import { cartProducts } from "./checkout.js";
export let cartCost = 0;

export function SummarizeCartCost(){
  cartProducts.forEach((cartProduct) => {
  cartCost += cartProduct.product.price * cartProduct.quantity;
  });
  console.log(cartCost);
};

export function FormatCurrency(priceCents) {
  return (Math.round(priceCents) / 100).toFixed(2); 
}