import { createContext, useEffect } from "react";
import axios from "axios";

const ProductContext = createContext();

export function ProductProvider({ children }) {
    // const [products, setProducts] = useState();

    useEffect(() => {
        const axiosProducts = async () => {
            await axios.get("localhost:4000/products")
                .then((res) => console.log(res))
                .catch(() => console.log("error getting products"))
        }
        axiosProducts();
    }, []);

    return <ProductContext.Provider value={{}}>
        {children}
    </ProductContext.Provider>
}