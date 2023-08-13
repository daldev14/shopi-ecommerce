import { Link, useParams } from "react-router-dom";
import useShoppingCart from "../../hooks/useShoppingCart";
import OrderCard from "../../components/OrderCard";
import ProductDetail from "../../components/ProductDetail";

export default function MyOrder() {
  const { orderId } = useParams();
  const { orderList } = useShoppingCart();
  const { handlerOpenProductDatil } = useShoppingCart();

  const { orderDate, totalProducts, totalPrice } = orderList.filter(
    (order) => order.orderId === orderId
  )[0];

  return (
    <div className="relative">
      <section className="max-w-md mx-auto">
        <div className="flex items-center border-b pb-1 mb-2">
          <Link to="/my-orders">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M7.72 12.53a.75.75 0 010-1.06l7.5-7.5a.75.75 0 111.06 1.06L9.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
          <h1 className="text-lg font-bold text-center flex-1">My Order</h1>
        </div>
        <div className="grid gap-1">
          {orderList
            .filter((order) => order.orderId === orderId)[0]
            .products.map(({ productId, title, price, images }) => {
              return (
                <OrderCard
                  key={productId}
                  title={title}
                  price={price}
                  images={images}
                  handlerClick={() =>
                    handlerOpenProductDatil({ id: productId })
                  }
                />
              );
            })}
        </div>
      </section>

      <aside className="w-[300px] h-auto .h-[calc(100vh-68px)] absolute top-0 left-5 z-20 bg-white border-2 border-black flex flex-col rounded-md shadow-md overflow-hidden overflow-y-auto">
        <div className="p-4">
          <h4 className="font-bold mb-2 border-b">Order Detail</h4>
          <div className="flex flex-col gap-1 ">
            <span>{`Date: ${orderDate}`}</span>
            <span>{`Articles: ${totalProducts}`}</span>
            <span className="font-semibold text-lg">{`Total price: $${totalPrice}`}</span>
          </div>
        </div>
      </aside>

      <ProductDetail />
    </div>
  );
}
