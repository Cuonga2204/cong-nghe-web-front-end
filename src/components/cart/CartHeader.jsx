import React from "react";

export default function CartHeader() {
  return (
    <>
      <div className="cart-header ">
        <div className="cart-header__name">Sản Phẩm</div>
        <div className="cart-header__price">Đơn Giá</div>
        <div className="cart-header__quantity">Số Lượng</div>
        <div className="cart-header__cart-header__price-total">Số Tiền</div>
        <div className="cart-header__operation">Thao Tác</div>
      </div>
    </>
  );
}
