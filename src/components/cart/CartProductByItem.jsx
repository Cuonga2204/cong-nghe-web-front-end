import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import ProductQuantity from "../homeProduct/ProductQuantity";
import { useState, useEffect } from "react";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { formatPrice } from "../utility/format";
export default function CartProductByItem({ product }) {
  const [quantity, setQuantity] = useState(product.quantity);
  const { updateQuantity, removeFromCart } = useContext(CartContext);
  useEffect(() => {
    updateQuantity(product.id, quantity);
  }, [quantity]);
  return (
    <>
      <li class="cart-product-by-item">
        <div class="cart-header__name">
          <img src={product.imageUrl} alt="" />
          {product.name}
        </div>
        <div class="cart-header__price">
          {formatPrice(product.currentPrice)}{" "}
        </div>
        <div class="cart-header__quantity">
          <ProductQuantity quantity={quantity} setQuantity={setQuantity} />
        </div>
        <div class="cart-header__cart-header__price-total">
          {formatPrice(product.currentPrice * product.quantity)}
        </div>
        <div class="cart-header__operation">
          <FontAwesomeIcon
            icon={faTrash}
            className="cart-header__operation-icon"
            onClick={() => removeFromCart(product.id)}
          />
        </div>
      </li>
    </>
  );
}
