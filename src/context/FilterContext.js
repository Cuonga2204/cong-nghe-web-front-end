import React, { createContext, useContext, useState } from 'react';

// Create context
const FilterContext = createContext();

// Create a provider component
export function FilterProvider({ children }) {
    const [sortBy, setSortBy] = useState("");

    const handleSort = (type) => {
        setSortBy(type);
    };
    return (
        <FilterContext.Provider value={{ sortBy, handleSort }}>
            {children}
        </FilterContext.Provider>
    );
}
// Custom hook to use the FilterContext
export function useFilter() {
    return useContext(FilterContext);
}