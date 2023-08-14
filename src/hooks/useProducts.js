import { useContext, useEffect, useState } from "react";
import ProductsContext from "../context/ProductsContext";
import getProducts from "../utils/getProducts";

export default function useProduct() {
  const { products, setProducts } = useContext(ProductsContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getProducts().then((response) => {
      setProducts(response);
      setIsLoading(false);
    });
  }, [setProducts]);

  return { products, isLoading };
}
