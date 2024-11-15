import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBox, faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const clearCart = (setCartItems) => {
  // Xoá dữ liệu từ state của ứng dụng
  setCartItems([]);

  // Xoá dữ liệu từ localStorage
  localStorage.removeItem("cartItems");
};
export default function ModalSuccess() {
  const { setCartItems } = useContext(CartContext);
  return (
    <>
      <div className="modal">
        <div className="modal__overlay"></div>
        <div className="modal-body__success">
          <FontAwesomeIcon
            icon={faCircleCheck}
            className="modal-body__success-icon"
          />
          <span>Bạn đã đặt hàng thành công</span>
          <Link to={"/orderStatus"}>
            <button
              className="modal-body__success-button"
              onClick={() => clearCart(setCartItems)}
            >
              OK
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
