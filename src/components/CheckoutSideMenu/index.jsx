import { useState, useEffect } from "react";
import useShoppingCart from "../../hooks/useShoppingCart";
import OrderCard from "../OrderCard";
import totalPrice from "../../utils/totalPrice";

export default function CheckoutSideMenu() {
  const [totalPurchase, setTotalPurchase] = useState(0);

  const {
    cart,
    totalProductsInCart,
    isCheckoutSideMenuOpen,
    handlerCloseCheckoutSideMenu,
  } = useShoppingCart();

  useEffect(() => {
    setTotalPurchase(totalPrice(cart));
  }, [cart]);

  return (
    <aside
      className={`${
        isCheckoutSideMenuOpen ? "flex" : "hidden"
      } w-[360px] h-[calc(100vh-68px)] fixed top-[68px] right-0 z-20 bg-white border-2 border-black flex-col rounded-md shadow-md overflow-hidden`}
    >
      <div className="py-2 px-3 flex flex-col .gap-2 .flex-1 h-full">
        <div className="flex justify-between items-center">
          <h4 className="font-semibold pl-2">My Order</h4>
          <button
            onClick={() => handlerCloseCheckoutSideMenu()}
            className="rounded-lg p-1 border border-transparent transition-all duration-200 hover:bg-slate-100 hover:border-solid"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <title>Close</title>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="w-full .h-[80%] flex-1  overflow-hidden overflow-y-auto">
          <div className="flex flex-col gap-1">
            {totalProductsInCart ? (
              cart.map((product) => {
                return <OrderCard key={product.productId} {...product} />;
              })
            ) : (
              <p className="text-slate-400 text-center mt-2">
                Add products to your list
              </p>
            )}
          </div>
        </div>
        <div className="w-full h-auto flex flex-col border-t mt-auto">
          <p className="font-bold">
            Total: <span>{`$${totalPurchase}`}</span>
          </p>
          <button
            className={`w-full rounded py-2 bg-black text-white ${
              !totalPurchase ? "bg-black/50" : ""
            }`}
            disabled={!totalPurchase ? true : false}
          >
            Checkout
          </button>
        </div>
      </div>
    </aside>
  );
}
