import { createContext, useEffect, useState, useCallback } from "react";
import useProducts from "../hooks/useProducts";
import PropTypes from "prop-types";

ShoppingCartContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

const ShoppingCartContext = createContext();

export function ShoppingCartContextProvider({ children }) {
  // Cart status
  const [cart, setCart] = useState([]);

  // Number of products in cart
  const [totalProductsInCart, setTotalProductsInCart] = useState(0);

  // Product detail · Open/Close
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);

  // Checkout side menu · Open/Close
  const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(true);

  // Product selected
  const [productToShow, setProductToShow] = useState({
    productId: null,
    title: "",
    price: "",
    description: "",
    images: [],
    categoryName: "",
  });

  // Products
  const { products } = useProducts();

  // Count products in the cart
  const countItemsToCart = useCallback(
    () => setTotalProductsInCart(cart.length),
    [cart.length]
  );

  // Add product to cart
  const addToCart = (id) => {
    if (cart.some((item) => item.productId === id)) return;

    const newProduct = products.filter((product) => product.productId === id);

    setCart([...cart, ...newProduct]);
  };

  // Remove product to cart
  const removeToCart = (id) => {
    setCart(cart.filter((product) => product.productId !== id));
  };

  // Select a product
  const selectProduct = (id) => {
    const aux = products.filter((product) => product.productId === id);

    const { productId, title, price, description, images, category } = aux[0];
    const { categoryName } = category;

    setProductToShow({
      productId,
      title,
      price,
      description,
      images,
      categoryName,
    });
  };

  // Open porduct detail
  const openProductDetail = (id) => {
    if (!products.some((item) => item.productId === id)) return;

    selectProduct(id);
    setIsProductDetailOpen(true);
  };

  // Close porduct detail
  const closeProductDetail = () => setIsProductDetailOpen(false);

  // Open chekout side menu
  const openCheckoutSideMenu = () =>
    setIsCheckoutSideMenuOpen(!isCheckoutSideMenuOpen);

  // Close chekout side menu
  const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false);

  useEffect(() => {
    countItemsToCart();
  }, [cart, countItemsToCart]);

  return (
    <ShoppingCartContext.Provider
      value={{
        cart,
        setCart,
        countItemsToCart,
        addToCart,
        removeToCart,
        totalProductsInCart,
        isProductDetailOpen,
        openProductDetail,
        productToShow,
        closeProductDetail,
        isCheckoutSideMenuOpen,
        openCheckoutSideMenu,
        closeCheckoutSideMenu,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}

export default ShoppingCartContext;
