import React from "react";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function ProductQuantity({ quantity, setQuantity }) {
  const increment = () => setQuantity((prevQuantity) => prevQuantity + 1);
  const decrement = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };
  return (
    <>
      <div className="product-view-quantity-input">
        <button className="product-view-quantity-btn" onClick={decrement}>
          <FontAwesomeIcon icon={faMinus} />
        </button>
        <input
          type="text"
          value={quantity}
          readOnly
          className="product-view-quantity__input"
        />
        <button className="product-view-quantity-btn" onClick={increment}>
          <FontAwesomeIcon icon={faPlus} />
        </button>
      </div>
    </>
  );
}
