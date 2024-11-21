import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import { formatPrice } from "../utility/format";
const CartItem = ({ id, imageProduct, name, currentPrice, quantity }) => {
  const { removeFromCart } = useContext(CartContext);
  // console.log(id);
  return (
    <li className="header__cart-item">
      <Link className="product-link" to={`/products/${id}`}>
        <img src={imageProduct} alt={name} className="header__cart-img" />
      </Link>
      <div className="header__cart-item-info">
        <div className="header__cart-item-head">
          <h5 className="header__cart-item-name">{name}</h5>
          <div className="header__cart-item-price-wrap">
            <span className="header__cart-item-price">
              {formatPrice(currentPrice)}
            </span>
            <span className="header__cart-item-multiply">x</span>
            <span className="header__cart-item-qnt">{quantity}</span>
          </div>
        </div>
        <div className="header__cart-item-body">
          <span className="header__cart-item-description">Phân loại: Nhôm</span>
          <span
            className="header__cart-item-remove"
            onClick={() => removeFromCart(id)}
          >
            Xóa
          </span>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
