import { useState, useEffect, useCallback } from "react";

export default function useVerifyToCart(cart, productId) {
  const [isToCart, setIsToCart] = useState(false);

  const verifyIsToCart = useCallback(
    () => setIsToCart(cart.some((item) => item.productId === productId)),
    [cart, productId]
  );

  useEffect(() => {
    verifyIsToCart();
  }, [verifyIsToCart]);

  return { isToCart };
}
