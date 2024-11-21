import React, { createContext, useState, useEffect } from "react";
import axios from "../common/common";
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    // Lấy dữ liệu giỏ hàng từ backend khi component được render lần đầu
    useEffect(() => {
        const fetchCart = async () => {
            try {
                const userId = localStorage.getItem("userId"); // Lấy userId từ localStorage
                const accessToken = localStorage.getItem("access_token"); // Lấy token từ localStorage
                console.log(userId);
                console.log(accessToken);

                const response = await axios.post(
                    "/cart",
                    { userId }, // Gửi userId qua body
                    {
                        headers: {
                            Authorization: `Bearer ${accessToken}`,
                        },
                    }
                );


                setCartItems(response.data.data.items); // Cập nhật giỏ hàng từ API
            } catch (error) {
                console.error("Error fetching cart:", error);
            }
        };

        fetchCart();
    }, []);

    // Thêm vào giỏ hàng

    const addToCart = (product, quantity = 1) => {
        const existingProductIndex = cartItems.findIndex(item => item.id === product.id);
        let newCartItems;
        if (existingProductIndex >= 0) {
            newCartItems = [...cartItems];
            newCartItems[existingProductIndex].quantity += quantity;
        } else {
            newCartItems = [...cartItems, { ...product, quantity }];
        }
        setCartItems(newCartItems);
        localStorage.setItem('cartItems', JSON.stringify(newCartItems));
    };
    //Xoá sản phẩm khỏi giỏ hàng
    const removeFromCart = async (productId) => {


        try {
            const accessToken = localStorage.getItem("access_token");
            const userId = localStorage.getItem("userId");
            console.log(userId);
            console.log(productId);
            console.log(accessToken);
            const response = await axios.delete(`http://localhost:4000/api/cart/delete/${productId}`,
                {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                    },
                    params: {
                        userId, // Gửi userId qua query parameter
                    },
                }
            )
            console.log(response);

            setCartItems(response.data.data.items);
        } catch (error) {
            console.error("Error fetching cart delete:", error);
        }
    };
    // Cập nhập khi ấn button "+" "-"
    const updateQuantity = (productId, quantity) => {
        const newCartItems = cartItems.map(item =>
            item.id === productId ? { ...item, quantity } : item
        );
        setCartItems(newCartItems);
        localStorage.setItem('cartItems', JSON.stringify(newCartItems));
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateQuantity, setCartItems }}>
            {children}
        </CartContext.Provider>
    );
};