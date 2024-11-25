import React from "react";
import Category from "./Category";
export default function CategoryFilter() {
  const prices = [
    "Tất cả",
    "Dưới 10 triệu",
    "Từ 10-15 triệu",
    "Từ 15-20 triệu",
    "Từ 20-25 triệu",
    "Trên 25 triệu",
  ];

  return (
    <div>
      <nav className="category">
        <Category title="Mức giá" items={prices} />
      </nav>
    </div>
  );
}
