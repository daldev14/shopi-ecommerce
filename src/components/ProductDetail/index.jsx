import useShoppingCart from "../../hooks/useShoppingCart";
import useVerifyToCart from "../../hooks/useVerifyToCart";

export default function ProductDetail() {
  const {
    cart,
    handlerAddToCart,
    handlerRemoveToCart,
    handlerCloseProductDatil,
    isProductDetailOpen,
    productToShow,
  } = useShoppingCart();

  const { isToCart } = useVerifyToCart(cart, productToShow?.productId);

  return (
    <aside
      className={`${
        isProductDetailOpen ? "flex" : "hidden"
      } w-[310px] h-[calc(100vh-68px)] fixed top-[68px] right-0 z-20 bg-white border-2 border-black flex-col rounded-md shadow-md overflow-hidden overflow-y-auto`}
    >
      <div className="py-2 px-3 flex flex-col gap-2 flex-1">
        <div className="flex justify-between items-center">
          <h4>Product Detail</h4>
          <button
            onClick={() => handlerCloseProductDatil()}
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
        <div className="flex flex-col gap-3 flex-1">
          <figure className="">
            <img
              src={productToShow?.images[0]}
              alt={productToShow?.title}
              className="rounded-lg h-full w-full aspect-square object-cover"
            />
          </figure>

          <div className="flex justify-between items-center">
            <span className="font-bold text-lg">${productToShow?.price}</span>
            <span className="text-sm bg-slate-200 rounded-lg px-2">
              {productToShow?.categoryName}
            </span>
          </div>
          <h4 className="text-sm">{productToShow?.title}</h4>

          <p className="text-sm">{productToShow?.description}</p>
        </div>

        {!isToCart ? (
          <button
            onClick={(event) =>
              handlerAddToCart(event, {
                id: productToShow?.productId,
              })
            }
            className="flex justify-center items-center gap-2 bg-slate-100 py-3 rounded-lg font-semibold border-2 transition-all duration-200 hover:bg-slate-200 hover:shadow-sm hover:border-black/50"
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
            <span>Add to cart</span>
          </button>
        ) : (
          <button
            onClick={(event) =>
              handlerRemoveToCart(event, {
                id: productToShow?.productId,
              })
            }
            className="flex justify-center items-center gap-2 bg-slate-100 py-3 rounded-lg font-semibold border-2 transition-all duration-200 hover:bg-slate-200 hover:shadow-sm hover:border-black/50"
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
            <span>Remove to cart</span>
          </button>
        )}
      </div>
    </aside>
  );
}
