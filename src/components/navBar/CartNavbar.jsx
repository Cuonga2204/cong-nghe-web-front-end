import React, { useContext } from "react";
import CartItem from "./CartItem";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
const Cart = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div className="header__cart-list">
      {cartItems.length === 0 ? (
        <>
          <img
            src="/img/no_cart.png"
            alt="No cart"
            className="header__cart-no-cart-img"
          />
          <span className="header__cart-no-cart-msg">Chưa có sản phẩm</span>
        </>
      ) : (
        <>
          <h4 className="header__cart-heading">Sản phẩm đã thêm</h4>
          <ul className="header__cart-list-item">
            {cartItems.map((item, index) => (
              <CartItem
                id={item.id}
                key={index}
                imageUrl={item.imageUrl}
                name={item.name}
                currentPrice={item.currentPrice}
                quantity={item.quantity}
              />
            ))}
          </ul>
          <Link to={"/Cart"}>
            <a href="/" className="header__cart-view-cart btn btn--primary">
              Xem giỏ hàng
            </a>
          </Link>
        </>
      )}
    </div>
  );
};

export default Cart;
