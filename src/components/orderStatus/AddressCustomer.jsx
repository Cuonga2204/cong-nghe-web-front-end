import React from "react";

export default function AddressCustomer({ orderDataDetail }) {
  return (
    <div className="customer-order-infor">
      <h2 className="address-order-header">Thông tin người nhận</h2>
      <div className="customer-infor">Họ tên: {orderDataDetail.name}</div>
      <div className="customer-infor"> SDT: {orderDataDetail.phone}</div>
      <div className="customer-infor">Email: {orderDataDetail.email}</div>
      <div className="customer-infor">Địa chỉ:{orderDataDetail.address}</div>
      <div className="customer-infor">
        Hình thức thanh toán : {orderDataDetail.paymentMethod}
      </div>
    </div>
  );
}
