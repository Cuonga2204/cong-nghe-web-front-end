import React, { Children, createContext, useContext, useState } from 'react';
import DEFAULT__PRODUCTS from '../mockData/DefaultProduct';
const ProductsContext = createContext();
export function ProductsProvider({ Children }) {
    const [products, setProducts] = useState(DEFAULT__PRODUCTS);
    return (
        <ProductsContext.Provider value={{ products }}>
            {Children}
        </ProductsContext.Provider>
    )
}
export function useProducts() {
    return useContext(ProductsContext)
}