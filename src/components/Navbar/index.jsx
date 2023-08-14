import { NavLink } from "react-router-dom";
import useShoppingCart from "../../hooks/useShoppingCart";

const ItemsNavLeft = [
  { name: "All", href: "/" },
  { name: "Clothes", href: "/tag/clothes" },
  { name: "Electronic", href: "/tag/electronic" },
  { name: "Furniture", href: "/tag/furniture" },
  { name: "Toys", href: "/tag/toys" },
  { name: "Others", href: "/tag/others" },
];

const ItemsNavRight = [
  { name: "MyAccount", href: "/my-account" },
  { name: "MyOrders", href: "/my-orders" },
  { name: "Sign In", href: "/sign-in" },
];

export default function Navbar() {
  const { totalProductsInCart, handlerOpenCheckoutSideMenu } =
    useShoppingCart();
  return (
    <div className="fixed z-10 w-full px-10 py-4 bg-gray-50 border-b border-gray-200 shadow-sm">
      <nav className="flex items-center justify-between text-sm">
        {/* navbar left */}
        <div className="flex items-center gap-8">
          <h1 className="font-bold text-lg">
            <NavLink to="/">Shopi</NavLink>
          </h1>

          <ul className="flex items-center gap-1">
            {ItemsNavLeft.map(({ name, href }) => {
              return (
                <li key={name}>
                  <NavLink
                    to={href}
                    className={({ isActive, isPending }) =>
                      `rounded px-2.5 py-1.5 border border-transparent transition-all duration-200 hover:bg-slate-100 hover:border-solid ${
                        isPending
                          ? "text-red-500"
                          : isActive
                          ? "underline underline-offset-4"
                          : ""
                      }`
                    }
                  >
                    {name}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>

        {/* navbar right */}
        <ul className="flex items-center gap-1">
          {ItemsNavRight.map(({ name, href }) => {
            return (
              <li key={name}>
                <NavLink
                  to={href}
                  className="rounded px-2.5 py-1.5 border border-transparent transition-all duration-200 hover:bg-slate-100 hover:border-solid"
                >
                  {name}
                </NavLink>
              </li>
            );
          })}
          <li>
            <button
              onClick={() => handlerOpenCheckoutSideMenu()}
              className="flex items-center gap-2 rounded px-2.5 py-1.5 border border-transparent transition-all duration-200 hover:bg-slate-100 hover:border-solid"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                />
              </svg>

              <span>{totalProductsInCart}</span>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}
