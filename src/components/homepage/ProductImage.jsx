import React from "react";
import ProductBadge from "./ProductBadge";
import { Link } from "react-router-dom";

export default function ProductImage({ imageUrl, backgroundUrl }) {
  return (
    <>
      <div
        className="product-img"
        style={{
          backgroundImage: `url(${backgroundUrl})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
        }}
      >
        {/* Link wrapping the image */}
        <Link to="/">
          <img
            src={`http://localhost:4000${imageUrl}`}
            // src={imageUrl}
            alt="Product"
          />
        </Link>
        {/* Product badge or any other content */}
        <ProductBadge />
      </div>
    </>
  );
}
