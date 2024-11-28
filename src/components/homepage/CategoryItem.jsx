import React from "react";
import { useFilterPrice } from "../../context/FilterPriceContext";
export default function CategoryItem({ label, title }) {
  const inputId = `checkbox-${label}`;
  const { updateFilterPrices } = useFilterPrice();
  const handleItemClick = () => {
    if (title === "Mức giá") {
      updateFilterPrices(label);
    }
  };

  return (
    <li
      className="category-item"
      style={title === "Mức giá" ? { width: "100%" } : {}}
      onClick={handleItemClick}
    >
      <label className="category-item-filter" htmlFor={inputId}>
        <input
          className="category-item-filter__check"
          type="checkbox"
          id={inputId}
          onChange={handleItemClick}
        />
        <span>{label}</span>
      </label>
    </li>
  );
}
