import { NavLink } from "react-router-dom";
import useShoppingCart from "../../hooks/useShoppingCart";
import useAppContext from "../../hooks/useAppContext";

const ItemsNavLeft = [
  { name: "All", href: "/" },
  { name: "Clothes", href: "/tag/clothes" },
  { name: "Electronic", href: "/tag/electronic" },
  { name: "Furniture", href: "/tag/furniture" },
  { name: "Toys", href: "/tag/toys" },
  { name: "Others", href: "/tag/others" },
];

export default function Navbar() {
  const { totalProductsInCart, handlerOpenCheckoutSideMenu } =
    useShoppingCart();

  const { account, userIsLoggedIn, toggleSignOut } = useAppContext();

  const handlerSignOut = () => toggleSignOut();

  return (
    <div className="fixed z-10 w-full px-10 py-4 bg-white">
      <nav className="w-full h-auto flex items-center justify-between text-sm">
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
                          ? "bg-black/10"
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
          {!userIsLoggedIn ? (
            <li>
              <NavLink
                to="/sign-in"
                className="rounded px-2.5 py-1.5 border border-transparent transition-all duration-200 hover:bg-slate-100 hover:border-solid"
              >
                Sign In
              </NavLink>
            </li>
          ) : (
            <>
              <li>
                <span className="text-slate-400">{account.email}</span>
              </li>
              <li>
                <NavLink
                  to="/my-account"
                  className="rounded px-2.5 py-1.5 border border-transparent transition-all duration-200 hover:bg-slate-100 hover:border-solid"
                >
                  My Account
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/my-orders"
                  className="rounded px-2.5 py-1.5 border border-transparent transition-all duration-200 hover:bg-slate-100 hover:border-solid"
                >
                  My Orders
                </NavLink>
              </li>

              <li>
                <button
                  onClick={handlerSignOut}
                  className="rounded px-2.5 py-1.5 border border-transparent transition-all duration-200 hover:bg-slate-100 hover:border-solid"
                >
                  Sign Out
                </button>
              </li>

              <li>
                <button
                  onClick={() => handlerOpenCheckoutSideMenu()}
                  className=" inline-flex items-center gap-x-2 rounded px-2.5 py-1.5 border border-transparent transition-all duration-200 hover:bg-slate-100 hover:border-solid"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                    />
                  </svg>
                  <span>{totalProductsInCart}</span>
                </button>
              </li>
            </>
          )}
        </ul>
      </nav>
    </div>
  );
}
