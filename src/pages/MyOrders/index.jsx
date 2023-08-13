import useShoppingCart from "../../hooks/useShoppingCart";
import OrdersCard from "../../components/OrdersCard";
import { Link } from "react-router-dom";

export default function MyOrders() {
  const { orderList } = useShoppingCart();

  return (
    <section className="max-w-3xl mx-auto">
      <h1 className="text-lg font-bold text-center mb-4">My Orders</h1>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {orderList.map(({ orderId, orderDate, totalProducts, totalPrice }) => {
          return (
            <Link key={orderId} to={`/my-orders/${orderId}`}>
              <OrdersCard
                orderDate={orderDate}
                totalProducts={totalProducts}
                totalPrice={totalPrice}
              />
            </Link>
          );
        })}
      </div>
    </section>
  );
}
