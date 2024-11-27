import React from "react";
// import { sortByPrice } from "./ProductList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
export default function HomeFilter() {

  return (
    <>
      <div className="home-filter">
        <span className="home-filter__lable">Ưu tiên xem : </span>
        <button className="btn home-filter__lable-btn">Trả góp 0% </button>
        <button className="btn btn-primary home-filter__lable-btn">
          Phổ biến
        </button>
        <button className="btn home-filter__lable-btn">Mới nhất </button>
        <button className="btn home-filter__lable-btn">Bán chạy</button>
        <div className="slect-input">
          <span className="slect-input__label">{selectedSort}</span>
          <FontAwesomeIcon
            icon={faAngleDown}
            className="slect-input__label-icon"
          />
          <ul className="slect-input-list">
            <li className="slect-input-item">
              <div
                href="/"
                className="slect-input-link"
                onClick={() => handleClick("ASC", "Giá: thấp đến cao")}
              >
                Giá: thấp đến cao
              </div>
            </li>
            <li className="slect-input-item">
              <div
                href="/"
                className="slect-input-link"
                onClick={() => handleClick("DESC", "Giá: cao đến thấp")}
              >
                Giá: cao đến thấp
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
