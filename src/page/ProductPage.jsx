import React from "react";
import { useParams } from "react-router-dom";
import Breadcrumb from "../components/homeProduct/Breadcrumb";
import ImageSlider from "../components/homepage/ImageSlider";
import ProductConfig from "../components/homepage/ProductConfig";
import ProductViewAssess from "../components/homeProduct/ProductViewAssess";
import ProductViewTransport from "../components/homeProduct/ProductViewTransport";
import ProductQuantity from "../components/homeProduct/ProductQuantity";
import AddProduct from "../components/homepage/AddProduct";
import ProductConnectItem from "../components/homeProduct/ProductConnectItem";
import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import { useState } from "react";
export default function ProductPage() {
  const { products } = useContext(ProductContext);
  const { productId } = useParams();

  const product = products.find((p) => p._id === productId);

  const [quantity, setQuantity] = useState(1);
  if (!product) {
    return <div>Product not found</div>;
  }
  console.log(`http://localhost:4000${product.imageUrl}`);

  const images = [
    
    "/img/viewProduct2.jpeg",
    "/img/viewProduct3.jpeg",
  ];
  if (!product) {
    return <div>Product not found</div>;
  }
  function formatPrice(price) {
    return new Intl.NumberFormat("vi-VN", {
      maximumSignificantDigits: 3,
    }).format(price);
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
                    <span class="product-view__price-old">
                      {product.oldPrice}vnđ
                    </span>
                  </div>
                  <ProductViewTransport />
                  <div class="product-view-quantity">
                    <h3>Số lượng</h3>
                    <div class="product-view-quantity-right">
                      <div class="product-view-quantity-rest">
                        400 sản phẩm có sẵn
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="product-detail"
              style={{ fontSize: "18px", lineHeight: "1.6" }}
            >
              <h2
                className="product-detail-title"
                style={{ fontSize: "24px", fontWeight: "bold" }}
              >
                Mô tả sản phẩm
              </h2>
              <div dangerouslySetInnerHTML={{ __html: product.description }} />
            </div>
            <div className="product-connect">
              <h2 className="product-connect__title">Sản phẩm liên quan</h2>
        
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
