import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser, faPen } from "@fortawesome/free-solid-svg-icons";
import OrderStatusProductList from "../components/orderStatus/OrderStatusProductList";
import ProductOrderHeader from "../components/order/ProductOrderHeader";
import ProductOrderList from "../components/order/ProductOrderList";
import AddressCustomer from "../components/orderStatus/AddressCustomer";
import { useState } from "react";
import { formatPrice } from "../components/utility/format";

// import { useContext } from "react";
// import { OrderStatusContext } from "../context/OrderStatusContext";
// import { OrderProvider } from "../context/OrderStatusContext";
export default function OrderStatus() {
  const [orderDetail, setOrderDetail] = useState(false);
  const [orderDataDetail, setOrderDataDetail] = useState(null);
  const [orderStatusHeader, setOrderStatusHeader] = useState("Vận chuyển");
  const closeModal = () => {
    setOrderDetail(false);
    setOrderDataDetail(null);
  };

  const handleViewOrderDetail = (order) => {
    setOrderDataDetail(order);
    setOrderDetail(true);
  };

  let orderList = JSON.parse(localStorage.getItem("orderData") || "[]");

  const handleRemoveOrder = (orderToRemove) => {
    const newOrderList = orderList.filter(
      (order) => order.id !== orderToRemove.id
    );
    localStorage.setItem("orderData", JSON.stringify(newOrderList));
    // Cập nhật lại orderList sau khi xoá
    orderList = newOrderList;
    // Đóng modal nếu đơn hàng hiện tại đang được hiển thị
    if (orderDataDetail && orderDataDetail.id === orderToRemove.id) {
      closeModal();
    }
  };
  const menuItems = [
    "Tất cả",
    "Chờ thanh toán",
    "Vận chuyển",
    "Chờ giao hàng",
    "Hoàn thành",
  ];
  return (
    <>
      {/* <OrderProvider> */}
      <div class="container">
        <div class="grid">
          <div class="grid__row">
            <div class="grid__row-column-2-4">
              <div class="account">
                <div class="base-icon">
                  <FontAwesomeIcon
                    icon={faCircleUser}
                    className="base-icon-account"
                  />
                </div>
                <div class="account-edit">
                  <span class="account-name">Cuonga2242002</span>
                  <div class="account-edit-infor">
                    <FontAwesomeIcon icon={faPen} />
                    {/* <i class="fa-solid fa-pen"></i> */}
                    <span>Chỉnh sửa hồ sơ</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="grid__row-column-9-6">
              <div class="product-header-status">
                {menuItems.map((item) => (
                  <div
                    key={item}
                    className={`product-header-status__menu ${
                      orderStatusHeader === item ? "active" : ""
                    }`}
                    onClick={() => setOrderStatusHeader(item)}
                  >
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              {orderStatusHeader === "Vận chuyển" ? (
                orderList.map((order, index) => (
                  <OrderStatusProductList
                    products={order.products}
                    key={index}
                    handleViewOrderDetail={() => handleViewOrderDetail(order)}
                  />
                ))
              ) : (
                <div className="order-status-empty">
                  <img
                    className="order-status-empty__img"
                    src="/img/OrderEmpty.png"
                    alt=""
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      {orderDetail && (
        <div className="modal">
          <div className="modal__overlay" onClick={closeModal}></div>
          <div className="modal-body-product-order">
            <AddressCustomer orderDataDetail={orderDataDetail} />
            <ProductOrderHeader />
            <ProductOrderList
              products={orderDataDetail.products}
              setOrderDetail={setOrderDetail}
            />
            <div class="cart-product-pay">
              <div class="cart-product-total">Tồng Tiền : </div>
              <div class="cart-product-total-price">
                {formatPrice(orderDataDetail.totalPrice)}
              </div>
            </div>
            <button
              className="btn btn-cancel"
              onClick={() => handleRemoveOrder(orderDataDetail)}
            >
              {" "}
              Huỷ đơn hàng
            </button>
          </div>
        </div>
      )}
      <div className="inforOrder-cart inforOrder cart-product-by"></div>/
      {/* </OrderProvider> */}
    </>
  );
}
