import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home";
import MyAccount from "./pages/MyAccount";
import MyOrders from "./pages/MyOrders";
import MyOrder from "./pages/MyOrder";
import NotFound from "./pages/NotFound";
import SignIn from "./pages/SignIn";

import useAppContext from "./hooks/useAppContext";

export default function AppRoutes() {
  const { userIsLoggedIn } = useAppContext();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route
            index
            element={
              userIsLoggedIn ? <Home /> : <Navigate replace to={"/sign-in"} />
            }
          />
          <Route
            path="/tag/:idTag"
            element={
              userIsLoggedIn ? <Home /> : <Navigate replace to={"/sign-in"} />
            }
          />
          <Route
            path="/my-account"
            element={
              userIsLoggedIn ? (
                <MyAccount />
              ) : (
                <Navigate replace to={"/sign-in"} />
              )
            }
          />
          <Route
            path="/my-orders"
            element={
              userIsLoggedIn ? (
                <MyOrders />
              ) : (
                <Navigate replace to={"/sign-in"} />
              )
            }
          />
          <Route
            path="/my-orders/:orderId"
            element={
              userIsLoggedIn ? (
                <MyOrder />
              ) : (
                <Navigate replace to={"/sign-in"} />
              )
            }
          />
          <Route path="/sign-in" element={<SignIn />} />
          <Route
            path="*"
            element={
              userIsLoggedIn ? (
                <NotFound />
              ) : (
                <Navigate replace to={"/sign-in"} />
              )
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
