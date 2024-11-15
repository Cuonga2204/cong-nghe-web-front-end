import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBox } from "@fortawesome/free-solid-svg-icons";
import ProductOrderList from "../components/order/ProductOrderList";
import ProductOrderHeader from "../components/order/ProductOrderHeader";
import { useState } from "react";
import ModalSuccess from "../components/order/ModalSuccess";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { formatPrice } from "../components/utility/format";
export default function Order() {
  const [isModalSuccess, setIsModalSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
  });
  const { cartItems } = useContext(CartContext);
  const products = [...cartItems];
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.currentPrice * item.quantity,
    0
  );
  // const [paymentMethod, setPaymentMethod] = useState("");

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // const handlePaymentChange = (event) => {
  //   setPaymentMethod(event.target.value);
  //   setFormData({
  //     ...formData,
  //     paymentMethod: event.target.value,
  //   });
  // };

  const handleSubmit = () => {
    let orders = JSON.parse(localStorage.getItem("orderData") || "[]");
    const orderData = {
      ...formData,
      products: cartItems,
      totalPrice,
      id: orders.length + 1,
    };
    orders.push(orderData);
    localStorage.setItem("orderData", JSON.stringify(orders));
    setIsModalSuccess(true);
  };
  return (
    <>
      <div className="container">
        <div className="grid">
          <div className="background-empty"></div>
          <h3 className=" Order-title">Thanh Toán</h3>
          <div className="inforOrder-cart inforOrder cart-product-by">
            <ProductOrderHeader />
            <ProductOrderList products={products} />
            <div class="cart-product-pay">
              <div class="cart-product-total">Tồng Tiền : </div>
              <div class="cart-product-total-price">
                {formatPrice(totalPrice)}
              </div>
            </div>
          </div>
          <div className="inforOrder inforOrder-infor">
            <div className="inforOrder__header">
              <FontAwesomeIcon
                icon={faBox}
                className="inforOrder__header-icon"
              />
              <span className="inforOrder__header-title">
                Thông tin người nhận hàng
              </span>
            </div>
            <div className="customerInfor">
              <div className="customerInfor-name-phone">
                <input
                  className="input-infor input-infor_1-2"
                  type="text"
                  placeholder="Nhập họ và tên"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
                <input
                  className="input-infor input-infor_1-2"
                  type="text"
                  placeholder="Nhập số điện thoại"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <input
                className="input-infor input-infor_1-0"
                type="text"
                placeholder="Nhập email không bắt buộc"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                z
              />
            </div>
            <div className="customerAddress">
              <div className="customerAddress__header">
                <h2>Địa chỉ nhận hàng</h2>

                <input
                  className="input-infor input-infor_1-0"
                  type="text"
                  placeholder="Nhập địa chỉ của bạn"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
            {/* Phương thức thanh toán */}
            <div className="pay-order-select">
              <ul className="pay-order-select-list">
                <li className="pay-order-select-item">
                  <input
                    type="radio"
                    id="Thanh toán khi nhận hàng"
                    name="payment-method"
                    value="Thanh toán khi nhận hàng"
                    className="pay-order-select-item__input"
                    // onChange={handlePaymentChange}
                  />
                  <label htmlFor="Thanh toán khi nhận hàng">
                    Thanh toán khi nhận hàng
                  </label>
                </li>
                <li className="pay-order-select-item">
                  <input
                    type="radio"
                    id="Thanh toán online"
                    name="payment-method"
                    value="Thanh toán online"
                    className="pay-order-select-item__input"
                    // onChange={handlePaymentChange}
                  />
                  <label htmlFor="Thanh toán online">Thanh toán online</label>
                </li>
              </ul>
            </div>
            {/* {paymentMethod === "Thanh toán online" && (
              <div className="pay-online">
                <input
                  className="input-infor input-infor_1-0 pay-online-input"
                  type="text"
                  placeholder="Nhập số thẻ"
                />
                <input
                  className="input-infor input-infor_1-0 pay-online-input"
                  type="password"
                  placeholder="Nhập mật khẩu thẻ"
                />
              </div>
            )} */}

            <button className="btn btn-pay" onClick={handleSubmit}>
              Thanh toán
            </button>
          </div>
        </div>
      </div>
      {isModalSuccess && <ModalSuccess />}

      {/* Thông báo đặt hàng thành công */}
    </>
  );
}
