import { createContext } from "react";
import PropTypes from "prop-types";
import useLocalStorage from "../hooks/useLocalStorage";

ProductsContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

const ProductsContext = createContext();

export function ProductsContextProvider({ children }) {
  // Products
  const [products, setProducts] = useLocalStorage("PRODUCTS_V1");

  return (
    <ProductsContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductsContext.Provider>
  );
}

export default ProductsContext;
