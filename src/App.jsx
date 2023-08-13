import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MyAccount from "./pages/MyAccount";
import MyOrder from "./pages/MyOrder";
import MyOrders from "./pages/MyOrders";
import NotFound from "./pages/NotFound";
import SignIn from "./pages/SignIn";
import RootLayout from "./components/RootLayout";
import { ProductsContextProvider } from "./context/ProductsContext";
import { ShoppingCartContextProvider } from "./context/ShoppingCartContext";
import CheckoutSideMenu from "./components/CheckoutSideMenu";
import "./App.css";

export default function App() {
  return (
    <ProductsContextProvider>
      <ShoppingCartContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<RootLayout />}>
              <Route index element={<Home />} />
              <Route path="/my-account" element={<MyAccount />} />
              <Route path="/my-orders" element={<MyOrders />} />
              <Route path="/my-orders/:orderId" element={<MyOrder />} />
              <Route path="/sign-in" element={<SignIn />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
        <CheckoutSideMenu />
      </ShoppingCartContextProvider>
    </ProductsContextProvider>
  );
}
