import React from "react";

export default function Breadcrumb() {
  return (
    <>
      <ul className="breadcrumb">
        <li className="breadcrumb-item">
          <a href="/" title="Trang chủ">
            {" "}
            Trang chủ /
          </a>
        </li>
        <li className="breadcrumb-item">
          <a className="breadcrumb-item-product" href="/" title="Trang chủ">
            Sản phẩm
          </a>
        </li>
      </ul>
    </>
  );
}
