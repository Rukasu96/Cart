import cart from '../Data/cart.js';
import { products } from '../Data/products.js';
import { cartCost, SummarizeCartCost, FormatCurrency } from './money.js';

export let cartProducts;

document.addEventListener("DOMContentLoaded", () => {
  renderCartProducts();
});

function renderCartProducts(){
  checkCartProducts();
  SummarizeCartCost();
  let cartProductsHTML = '';


  if(Object.keys(cartProducts).length === 0){
    cartProductsHTML += "Your cart is empty";
    document.querySelector(".jsHeaderEmptyCart").innerHTML = cartProductsHTML;
    document.querySelector('.jsCartProductContainer').innerHTML = '';
  }else{
    cartProducts.forEach((cartProduct) => {
      cartProductsHTML += 
      `
      <div class="ProductContainer">
        <div class="ProductCardImageContainer">
          <img src="/images/${cartProduct.product.thumbnail}.jpg" class="ProductImage">
        </div>
        <div class="ProductCardPropertiesContainer">
          <span>
            Name: ${cartProduct.product.name}
          </span>
          <span class="ProductDescirption">
            Description: ${cartProduct.product.description}.
          </span>
          <span>
            Rating: ${cartProduct.product.rating}
          </span>
          <span>
            Price: ${FormatCurrency(cartProduct.product.price)}zł
          </span>
        </div>
        <span class="ProductCardButtonRemoveContainer">
          <button class="CheckoutCardButton jsRemoveItemButton" data-product-id = "${cartProduct.product.id}">Remove (${cartProduct.quantity})</button>
        </span>
      </div>
      `
      });

      cartProductsHTML += 
      `
      <span class="CartPrice">
        Price: ${FormatCurrency(cartCost)}zł
      </span>
      `
    
      document.querySelector('.jsCartProductContainer').innerHTML = cartProductsHTML;
    
      document.querySelectorAll('.jsRemoveItemButton').forEach((button) => {
        button.addEventListener('click', () => {
          const productId = button.dataset.productId;
          cart.removeFromCart(productId);
          renderCartProducts();
        });
      });
  }
}

function checkCartProducts(){
  cartProducts = [];
  cart.cartItems.forEach((cartProduct) => {
    products.forEach((product) => {
      if(cartProduct.productId === product.id){
        let quantity = cartProduct.quantity;
        cartProducts.push({product, quantity});
      }
    })
  })
}