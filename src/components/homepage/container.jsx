import React from "react";
import ContainerEvent from "./ContainerEvent";
import ImageSlider from "./ImageSlider";
import CategoryFilter from "./CategoryFilter";
import OrderLapList from "./OrderLapList";
import HomeFilter from "./HomeFilter";
import ProductList from "./ProductList";
import Pagination from "./Pagination";
import { FilterProvider } from "../../context/FilterContext";
import { FilterPriceProvider } from "../../context/FilterPriceContext";
export default function Container({ products, filter }) {
  const images = [
    "/img/slideShow1.png",
    "/img/slideShow4.png",
    "/img/slideShow3.png",
  ];

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
                
                </div>
              </div>
            </div>
          </div>
        </FilterProvider>
      </FilterPriceProvider>
    </>
  );
}
