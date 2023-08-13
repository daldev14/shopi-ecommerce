import Card from "../../components/Card";
import ProductDetail from "../../components/ProductDetail";
import useProducts from "../../hooks/useProducts";

export default function Home() {
  const { products } = useProducts();

  return (
    <>
      <h1 className="text-2xl font-bold mb-2">Home</h1>
      <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {products
          .map((product) => {
            return <Card key={product.productId} {...product} />;
          })
          .slice(0, 20)}
      </section>
      <ProductDetail />
    </>
  );
}
