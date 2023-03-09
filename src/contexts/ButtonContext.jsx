import { createContext } from "react";
import Products from "../components/Products";
import LoadMore from "../components/LoadMore";
import FCategory from "../components/FCategory";

export const BtnContext = createContext();

export function ButtonProvider({ children }) {
    const buttons = [
        {
            name: "All product",
            value: "all",
            component: <Products />
        },
        {
            name: "Load more",
            value: "loadmore",
            component: <LoadMore />
        },
        {
            name: "Filter by category",
            value: "fcategory",
            component: <FCategory />
        },
        {
            name: "Filter by brand",
            value: "fbrand",
            component: <FCategory />
        },
        {
            name: "Add products",
            value: "add",
            component: <Products />
        }
    ]

    return <BtnContext.Provider value={{ buttons }}>
        {children}
    </BtnContext.Provider>
}