import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser, faPen } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { formatPrice } from "../components/utility/format";

export default function OrderStatus() {
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
      
    </>
  );

