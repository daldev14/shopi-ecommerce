/**
 * This function calculates total price of a new order
 * @param {String} products cardProduct: Array of Objects
 * @returns {Number} Total price
 */
export default function totalPrice(products) {
  let total = 0;
  products.forEach((product) => (total += product.price));
  return total;
}
