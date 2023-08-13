import { useContext } from "react";
import ShoppingCartContext from "../context/ShoppingCartContext";

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
  };
}
