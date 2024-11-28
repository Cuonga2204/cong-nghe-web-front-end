import React from "react";
import { useParams } from "react-router-dom";
import Breadcrumb from "../components/homeProduct/Breadcrumb";
import ImageSlider from "../components/homepage/ImageSlider";
import ProductConfig from "../components/homepage/ProductConfig";
import ProductViewAssess from "../components/homeProduct/ProductViewAssess";
import ProductViewTransport from "../components/homeProduct/ProductViewTransport";
import ProductQuantity from "../components/homeProduct/ProductQuantity";
import AddProduct from "../components/homepage/AddProduct";
import PRODUCT__DETAIL from "../mockData/ProductDetail";
import ProductConnectItem from "../components/homeProduct/ProductConnectItem";
import DEFAULT__PRODUCTS from "../mockData/DefaultProduct";
import { useProducts } from "../context/ProductContext";
import { useState } from "react";
export default function ProductPage({ products }) {
  const { productId } = useParams();
  const product = products.find((p) => p.id === parseInt(productId, 10));
  
  if (!product) {
    return <div>Product not found</div>;
  }
  
  return (
    <>
      <div className="container">
        <div className="grid">
          <Breadcrumb />
          <div className="grid__row">
            <div className="product-view">
              <div className="grid__row-left">
                <div className="container-image">
                  <ImageSlider images={images} />
                </div>
                <ProductConfig
                  className={"product-config-param product-config-param-column"}
                  config={product.config}
                />
              </div>
              <div className="grid__row-right">
                <div className="grid__row-righ-product">
                  <h3>{product.name}</h3>
                  <ProductViewAssess />
                  <div class="product-view__prom">
                    <div class="product-view__price-current">
                      {formatPrice(product.currentPrice)}đ
                    </div>
                    <span class="product-view__price-old">
                      {product.oldPrice}vnđ
                    </span>
                  </div>
                  <ProductViewTransport />
                  <div class="product-view-quantity">
                    <h3>Số lượng</h3>
                    <div class="product-view-quantity-right">
                      <ProductQuantity
                        quantity={quantity}
                        setQuantity={setQuantity}
                      />
                      <div class="product-view-quantity-rest">
                        400 sản phẩm có sẵn
                      </div>
                    </div>
                  </div>
                  <AddProduct product={product} quantity={quantity} />
                </div>
              </div>
            </div>
            <div className="product-detail">
              <div
                className="ck-content"
                dangerouslySetInnerHTML={{ __html: PRODUCT__DETAIL[1] }}
              />
            </div>
            <div className="product-connect">
              <h2 className="product-connect__title">Sản phẩm liên quan</h2>
              <ul className="product-connect-list">
                <ProductConnectItem product={DEFAULT__PRODUCTS[1]} />
                <ProductConnectItem product={DEFAULT__PRODUCTS[2]} />
                <ProductConnectItem product={DEFAULT__PRODUCTS[3]} />
                <ProductConnectItem product={DEFAULT__PRODUCTS[4]} />
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
