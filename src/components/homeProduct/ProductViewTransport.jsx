import React from "react";

export default function ProductViewTransport() {
  return (
    <>
      <div className="product-view-transport">
        <h3>Vận chuyển</h3>
        <div className="product-view-transport-right">
          <div className="product-view-transport-right__by">
            <img
              src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/productdetailspage/3e0adc366a3964f4fb59.svg"
              alt=""
            />
            <span> Vận chuyển bởi shop Cường</span>
          </div>
          <div className="product-view-transport-right__by">
            <img
              src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/productdetailspage/d9e992985b18d96aab90.png"
              alt=""
            />
            <span> Miễn phí vận chuyển</span>
          </div>
          <div className="product-view-transport-right__by">
            <img
              src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/productdetailspage/baa823ac1c58392c2031.svg"
              alt=""
            />
            <span> Giao đến ...</span>
          </div>
        </div>
      </div>
    </>
  );
}
