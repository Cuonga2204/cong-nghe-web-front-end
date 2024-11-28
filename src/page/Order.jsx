import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBox } from "@fortawesome/free-solid-svg-icons";
import ProductOrderList from "../components/order/ProductOrderList";
import ProductOrderHeader from "../components/order/ProductOrderHeader";

export default function Order() {
  return (
    <>
      <div className="container">
        <div className="grid">
          <div className="background-empty"></div>
          <h3 className=" Order-title">Thanh Toán</h3>
          <div className="inforOrder-cart inforOrder cart-product-by">
            <ProductOrderHeader />
            <ProductOrderList />
            <div class="cart-product-pay">
              <div class="cart-product-total">Tồng Tiền : </div>
              <div class="cart-product-total-price"></div>
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
            </div>
            <div className="customerAddress">
              <div className="customerAddress__header">
                <h2>Địa chỉ nhận hàng</h2>

                <input
                  className="input-infor input-infor_1-0"
                  type="text"
                  placeholder="Nhập địa chỉ của bạn"
                  name="address"
                  required
                />
              </div>
            </div>
            <button className="btn btn-pay">Đặt hàng</button>
          </div>
        </div>
      </div>

      {/* Thông báo đặt hàng thành công */}
    </>
  );
}
