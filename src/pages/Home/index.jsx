import { useEffect, useMemo, useState } from "react";
import ProductDetail from "../../components/ProductDetail";
import Search from "../../components/ProductSearch";
import useProducts from "../../hooks/useProducts";
import { useParams } from "react-router-dom";
import ProductContainer from "../../components/ProductContainer";

export default function Home() {
  const { products, isLoading } = useProducts();
  const [searchText, setSearchText] = useState("");
  const { idTag = "" } = useParams();

  useEffect(() => {
    if (idTag) setSearchText("");
  }, [idTag]);

  const searchProduct = useMemo(() => {
    if (!idTag) {
      return products.filter((product) =>
        product.title.toLowerCase().includes(searchText.toLowerCase())
      );
    }

    return products.filter(
      (product) =>
        product.title.toLowerCase().includes(searchText.toLowerCase()) &&
        product.category.categoryName
          .toLowerCase()
          .includes(idTag.toLowerCase())
    );
  }, [idTag, products, searchText]);

  return (
    <>
      <div className="mb-4">
        <Search searchText={searchText} handlerSearch={setSearchText} />
      </div>

      {!isLoading ? (
        searchProduct.length ? (
          <ProductContainer productList={searchProduct} />
        ) : (
          <div className="grid place-content-center">
            <p className="text-3xl text-slate-400 font-semibold">
              Products not found
            </p>
          </div>
        )
      ) : (
        <div className="grid place-content-center">
          <p className="text-3xl text-slate-400 font-semibold">Loading...</p>
        </div>
      )}
      <ProductDetail />
    </>
  );
}
