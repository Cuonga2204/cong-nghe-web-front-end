import React from "react";
export default function CategoryItem({ label, title }) {
  

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
