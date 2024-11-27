import React from "react";
import CategoryItem from "./CategoryItem";
export default function Category({ title, items }) {
  return (
    <>
      <div className="category-1">
        <h3 className="category-heading">{title}</h3>
        <ul className="category-list">
          {items.map((item, index) => (
            <CategoryItem key={index} label={item} title={title} />
          ))}
        </ul>
      </div>
    </>
  );
}
