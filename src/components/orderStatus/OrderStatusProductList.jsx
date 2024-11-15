import React from "react";

import OrderStatusProductItem from "./OrderStatusProductItem";
export default function OrderStatusProductList({
  products,
  handleViewOrderDetail,
}) {
  return (
    <>
      <ul className="product-order-list">
        {products.map((product, index) => (
          <OrderStatusProductItem
            product={product}
            key={index}
            handleViewOrderDetail={handleViewOrderDetail}
          />
        ))}
      </ul>
    </>
  );
}
