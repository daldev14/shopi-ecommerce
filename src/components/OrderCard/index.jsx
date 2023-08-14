import PropTypes from "prop-types";

OrderCard.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  images: PropTypes.array.isRequired,
  handlerClick: PropTypes.func,
  handlerRemove: PropTypes.func,
};

export default function OrderCard({
  title,
  price,
  images,
  handlerClick,
  handlerRemove,
}) {
  return (
    <div
      className="flex w-full cursor-pointer p-2 rounded-md border border-transparent transition-all duration-200 hover:bg-slate-50 hover:border-slate-100"
      onClick={handlerClick}
    >
      <figure className="">
        <img
          src={images[0]}
          alt={title}
          className="rounded-lg w-36 aspect-square object-cover"
        />
      </figure>
      <div className="w-full px-2 flex flex-col">
        <div className="flex flex-col">
          <span className="font-bold">{`$${price}`}</span>
          <h3 className="text-xs">{title}</h3>
        </div>
        {handlerRemove ? (
          <button
            onClick={handlerRemove}
            className="w-full bg-red-600 text-white flex justify-center items-center gap-1 rounded-lg py-1 mt-auto transition-all duration-200 hover:bg-red-400"
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
                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
              />
            </svg>
            <span className="font-semibold">Remove</span>
          </button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
