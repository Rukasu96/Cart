import cart from '../Data/cart.js';
import { products } from '../Data/products.js';


document.addEventListener("DOMContentLoaded", () => {
  renderProducts();
});

function renderProducts() {
  let productsHTML = '';

  products.forEach((product) => {
    productsHTML += 
    `
    <div class="ProductCardContainer">
      <div>
        <img src="/images/${product.thumbnail}.jpg" class="ProductImage">
      </div>
      <div class="ProductCardPropertiesContainer">
        <span>
          Name: ${product.name}
        </span>
        <span class="ProductDescirption">
          Description: ${product.description}.
        </span>
        <span>
          Rating: ${product.rating}
        </span>
        <span>
          Price: ${product.price}
        </span>
      </div>
      <span class="ProductCardButtonContainer">
        <button class="ProductCardButton jsAddToCartButton" data-product-id = "${product.id}">Add to Cart</button>
      </span>
    </div>
    `
  } )

  document.querySelector('.jsProductsContainer').innerHTML = productsHTML;

  document.querySelectorAll('.jsAddToCartButton').forEach((button) => {
    button.addEventListener('click', () => {
      const productId = button.dataset.productId;
      cart.addToCart(productId);
      updateCartQuantity();
    });
  });

  updateCartQuantity();
}

function updateCartQuantity(){
  let cartQuantity = 0;
    cart.cartItems.forEach((cartItem) => {
      cartQuantity += cartItem.quantity;
    })

  let cartQuantityHTML = 
    `
    <button class="CartButton">Cart Icon (${cartQuantity})</button>
    `;

  document.querySelector('.jsCartQuantityButton').innerHTML = cartQuantityHTML;
}