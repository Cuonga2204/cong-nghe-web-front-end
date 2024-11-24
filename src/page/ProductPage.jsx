import React from "react";
import { useParams } from "react-router-dom";
import Breadcrumb from "../components/homeProduct/Breadcrumb";

import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import { useState } from "react";
export default function ProductPage() {
  
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
                  
                </div>
                
              </div>
              <div className="grid__row-right">
                <div className="grid__row-righ-product">
                  <h3></h3>
                  
                  <div class="product-view__prom">
                    <div class="product-view__price-current">
                  
                    </div>
                    <span class="product-view__price-old">
                      
                    </span>
                  </div>
                  
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
            
          </div>
        </div>
      </div>
    </>
  );


