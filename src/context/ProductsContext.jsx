import { createContext, useState } from "react";
import PropTypes from "prop-types";

ProductsContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

const ProductsContext = createContext();

export function ProductsContextProvider({ children }) {
  // Products
  const [products, setProducts] = useState([]);

  return (
    <ProductsContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductsContext.Provider>
  );
}

export default ProductsContext;
