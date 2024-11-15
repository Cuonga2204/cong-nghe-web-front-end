import React from "react";
import Product from "./Product";
import { useFilter } from "../../context/FilterContext";
import { useFilterPrice } from "../../context/FilterPriceContext";

export default function ProductList({ products, filter }) {
  const { sortBy } = useFilter();
  const { filterPrices } = useFilterPrice();

  let filteredProducts =
    filter === "TẤT CẢ"
      ? products
      : products.filter((product) => product.name.includes(filter));

  if (sortBy === "ASC") {
    filteredProducts = filteredProducts.sort(
      (a, b) => a.currentPrice - b.currentPrice
    );
  } else if (sortBy === "DESC") {
    filteredProducts = filteredProducts.sort(
      (a, b) => b.currentPrice - a.currentPrice
    );
  }

  const filterProductsByPrice = (product) => {
    if (filterPrices.length === 0) {
      return true;
    }

    return filterPrices.some((price) => {
      switch (price) {
        case "Dưới 10 triệu":
          return product.currentPrice < 10000000;
        case "Từ 10-15 triệu":
          return (
            product.currentPrice >= 10000000 && product.currentPrice <= 15000000
          );
        case "Từ 15-20 triệu":
          return (
            product.currentPrice >= 15000000 && product.currentPrice <= 20000000
          );
        case "Từ 20-25 triệu":
          return (
            product.currentPrice >= 20000000 && product.currentPrice <= 25000000
          );
        case "Trên 25 triệu":
          return product.currentPrice > 25000000;
        default:
          return true;
      }
    });
  };

  filteredProducts = filteredProducts.filter(filterProductsByPrice);

  return (
    <>
      <div className="home-product">
        <div className="grid__row">
          {filteredProducts.map((product, index) => (
            <Product key={index} product={product} />
          ))}
        </div>
      </div>
    </>
  );
}
