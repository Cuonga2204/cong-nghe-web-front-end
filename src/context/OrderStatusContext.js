import React, { createContext } from "react";
import { useState } from "react";
export const OrderStatusContext = createContext();

export const OrderProvider = ({ Children }) => {
    const [orderDetail, setOrderDetail] = useState(false);
    const [orderDataDetai, setOrderDataDetail] = useState();
    const orderList = JSON.parse(localStorage.getItem("orderData") || "[]");
    return (
        <OrderStatusContext.Provider value={{ orderList }}>
            {Children}
        </OrderStatusContext.Provider>
    );
}

