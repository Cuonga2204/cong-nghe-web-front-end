import React from "react";

export default function OrderLapItem({ src, title }) {
  return (
    <>
      <div className="grid__row-column-9-5">
        <div className="order-lap-item">
          <img src={src} alt="" />
          <h2>{title}</h2>
        </div>
      </div>
    </>
  );
}
