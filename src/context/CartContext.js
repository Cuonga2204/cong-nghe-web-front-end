import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    useEffect(() => {
        const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        setCartItems(storedCartItems);
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
    const removeFromCart = (productId) => {
        const newCartItems = cartItems.filter(item => item.id !== productId);
        setCartItems(newCartItems);
        localStorage.setItem('cartItems', JSON.stringify(newCartItems));
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