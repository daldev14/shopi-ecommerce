import { useContext } from "react";
import ShoppingCartContext from "../context/ShoppingCartContext";
import totalPrice from "../utils/totalPrice";
import { v4 as uuidv4 } from "uuid";

export default function useShoppingCart() {
  const {
    cart,
    addToCart,
    removeToCart,
    openProductDetail,
    closeProductDetail,
    totalProductsInCart,
    isProductDetailOpen,
    productToShow,
    isCheckoutSideMenuOpen,
    openCheckoutSideMenu,
    closeCheckoutSideMenu,
    orderList,
    addCheckoutList,
  } = useContext(ShoppingCartContext);

  const handlerAddToCart = (event, { id }) => {
    event.stopPropagation();
    addToCart(id);
  };

  const handlerRemoveToCart = (event, { id }) => {
    event.stopPropagation();
    removeToCart(id);
  };

  const handlerOpenProductDatil = ({ id }) => {
    closeCheckoutSideMenu();
    openProductDetail(id);
  };

  const handlerCloseProductDatil = () => closeProductDetail();

  const handlerOpenCheckoutSideMenu = () => {
    closeProductDetail();
    openCheckoutSideMenu();
  };

  const handlerCloseCheckoutSideMenu = () => closeCheckoutSideMenu();

  const handlerAddCheckoutList = () => {
    const date = new Date(Date.now());

    const newOrder = {
      orderId: uuidv4(),
      orderDate: date.toLocaleDateString(),
      products: [...cart],
      totalProducts: cart.length,
      totalPrice: totalPrice(cart),
    };

    addCheckoutList(newOrder);
  };

  return {
    cart,
    handlerAddToCart,
    handlerRemoveToCart,
    handlerOpenProductDatil,
    handlerCloseProductDatil,
    totalProductsInCart,
    isProductDetailOpen,
    productToShow,
    isCheckoutSideMenuOpen,
    handlerOpenCheckoutSideMenu,
    handlerCloseCheckoutSideMenu,
    orderList,
    handlerAddCheckoutList,
  };
}
