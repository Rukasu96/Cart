import Cart from '../Data/cart.js';
import { products } from '../Data/products.js';

const cart = new Cart('cart');

renderProducts();

function renderProducts() {
  let productsHTML = '';

  products.forEach((product) => {
    productsHTML += 
    `
    <div class="ProductCardContainer">
      <div>
        <img src="/images/boots.jpg" class="ProductImage">
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
        <button class="ProductCardButton">Add to Cart</button>
      </span>
    </div>
    `
  } )

  document.querySelector('.jsProductsContainer').innerHTML = productsHTML;
}