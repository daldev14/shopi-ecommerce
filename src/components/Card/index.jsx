import PropTypes from "prop-types";
import useShoppingCart from "../../hooks/useShoppingCart";
import useVerifyToCart from "../../hooks/useVerifyToCart";

Card.propTypes = {
  productId: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  images: PropTypes.array.isRequired,
  category: PropTypes.object.isRequired,
};

export default function Card({
  productId,
  title,
  price,
  images,
  category: { categoryName },
}) {
  const {
    cart,
    handlerAddToCart,
    handlerRemoveToCart,
    handlerOpenProductDatil,
  } = useShoppingCart({
    id: productId,
  });

  const { isToCart } = useVerifyToCart(cart, productId);

  return (
    <article
      className="group flex min-h-60 .w-56 w-full cursor-pointer flex-col"
      onClick={() =>
        handlerOpenProductDatil({
          id: productId,
        })
      }
    >
      <header className="relative min-h-4/5 w-full aspect-square overflow-hidden rounded-lg">
        <figure className="h-full w-full">
          <img
            src={images[0]}
            alt=""
            className="h-full w-full object-cover object-center rounded-md transform transition-all duration-300 group-hover:scale-105"
          />
        </figure>

        {!isToCart ? (
          <button
            className="absolute right-2 top-2 rounded-full bg-white p-0.5 shadow-lg transition duration-200 hover:bg-green-500 hover:text-white"
            title="Agregar al carrito"
            onClick={(event) =>
              handlerAddToCart(event, {
                id: productId,
              })
            }
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
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </button>
        ) : (
          <button
            className="absolute right-2 top-2 rounded-full bg-white p-0.5 shadow-lg transition duration-200 hover:bg-red-500 hover:text-white"
            title="Eliminar del carrito"
            onClick={(event) =>
              handlerRemoveToCart(event, {
                id: productId,
              })
            }
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
                d="M19.5 12h-15"
              />
            </svg>
          </button>
        )}

        <span className="absolute bottom-2 left-2 rounded-lg bg-white/80 px-1.5 text-sm">
          {categoryName}
        </span>
      </header>
      <footer className="flex items-start justify-between gap-2 flex-1 px-2 py-1">
        <h3 className="text-sm">{title}</h3>
        <span className="font-semibold">${price}</span>
      </footer>
    </article>
  );
}
