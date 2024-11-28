import React from "react";
import { useParams } from "react-router-dom";
import ContainerEvent from "./ContainerEvent";
import ImageSlider from "./ImageSlider";
import CategoryFilter from "./CategoryFilter";
import OrderLapList from "./OrderLapList";
import HomeFilter from "./HomeFilter";
import ProductList from "./ProductList";
import Pagination from "./Pagination";
import { FilterProvider } from "../../context/FilterContext";
import { FilterPriceProvider } from "../../context/FilterPriceContext";
import { useMemo } from "react";
export default function Container({ products, filter }) {
  const { page = 1 } = useParams(); 
  const images = [
    "/img/slideShow1.png",
    "/img/slideShow4.png",
    "/img/slideShow3.png",
  ];

  const PRODUCTS_PER_PAGE = 9; 
  const filteredProducts = useMemo(() => {
    if (filter === "TẤT CẢ") {
      return products;
    }
    return products.filter((product) => product.name.includes(filter));
  }, [products, filter]);

  const totalPages = Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE);

  const startIndex = (page - 1) * PRODUCTS_PER_PAGE;
  const endIndex = startIndex + PRODUCTS_PER_PAGE;
  const paginatedProducts = filteredProducts.slice(startIndex, endIndex);

  return (
    <>
      <FilterPriceProvider>
        <FilterProvider>
          <div className="container">
            <div className="grid">
              <ContainerEvent />
              <ImageSlider images={images} />
              <div className="grid__row">
                <div className="grid__row-column-3">
                  <CategoryFilter />
                </div>
                <div className="grid__row-column-9">
                  <div className="order-lap">
                    <div className="order-lap-header">
                      <OrderLapList />
                    </div>
                  </div>
                  <div className="home-page">
                    <HomeFilter />
                    <ProductList
                      products={paginatedProducts}
                      filter={filter}
                      page={parseInt(page)}
                    />
                  </div>
                  <Pagination
                    totalPages={totalPages}
                    currentPage={parseInt(page)}
                  />
                </div>
              </div>
            </div>
          </div>
        </FilterProvider>
      </FilterPriceProvider>
    </>
  );
}
