import React from "react";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function ProductViewAssess() {
  return (
    <>
      <div className="product-view-assess">
        <div className="product-view-star">
          <span>4.9</span>
          <FontAwesomeIcon icon={faStar} className="product-view-star-icon" />
          <FontAwesomeIcon icon={faStar} className="product-view-star-icon" />
          <FontAwesomeIcon icon={faStar} className="product-view-star-icon" />
          <FontAwesomeIcon icon={faStar} className="product-view-star-icon" />
          <FontAwesomeIcon icon={faStar} className="product-view-star-icon" />
        </div>
        <div className="number-view">
          <span>15.5k lượt đánh giá</span>
        </div>
        <div className="number-bought">
          <span>3K đã bán</span>
        </div>
      </div>
    </>
  );
}
