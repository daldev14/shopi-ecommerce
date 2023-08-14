import Card from "../Card";
import PropTypes from "prop-types";

ProductContainer.propTypes = {
  productList: PropTypes.array.isRequired,
};

export default function ProductContainer({ productList }) {
  return (
    <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
      {productList.map((product) => {
        return <Card key={product.productId} {...product} />;
      })}
    </section>
  );
}
