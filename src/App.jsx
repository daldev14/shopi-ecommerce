import { ProductsContextProvider } from "./context/ProductsContext";
import { ShoppingCartContextProvider } from "./context/ShoppingCartContext";
import { AppContextProvider } from "./context/AppContext";
import CheckoutSideMenu from "./components/CheckoutSideMenu";
import AppRoutes from "./AppRoutes";
import "./App.css";

export default function App() {
  return (
    <AppContextProvider>
      <ProductsContextProvider>
        <ShoppingCartContextProvider>
          <AppRoutes />
          <CheckoutSideMenu />
        </ShoppingCartContextProvider>
      </ProductsContextProvider>
    </AppContextProvider>
  );
}
