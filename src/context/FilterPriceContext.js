import React, { createContext, useState, useContext } from "react";

const FilterPriceContext = createContext();

export function FilterPriceProvider({ children }) {
    const [filterPrices, setFilterPrices] = useState([]);

    const updateFilterPrices = (price) => {
        setFilterPrices((prevPrices) => {
            if (prevPrices.includes(price)) {
                return prevPrices.filter((p) => p !== price);
            } else {
                return [...prevPrices, price];
            }
        });
    };
    return (
        <FilterPriceContext.Provider value={{ filterPrices, updateFilterPrices }}>
            {children}
        </FilterPriceContext.Provider>
    );
}
export const useFilterPrice = () => {
    return useContext(FilterPriceContext);
};
export default FilterPriceContext;