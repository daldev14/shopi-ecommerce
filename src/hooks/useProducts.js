import { useContext, useEffect } from "react";
import ProductsContext from "../context/ProductsContext";
import getProducts from "../utils/getProducts";

export default function useProduct() {
  const { products, setProducts } = useContext(ProductsContext);

  useEffect(() => {
    getProducts().then((response) => setProducts(response));
  }, [setProducts]);

  return { products };
}
