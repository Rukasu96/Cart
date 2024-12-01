export default class Cart {
  cartItems;
  #localStorageKey = "cart";

  constructor(){
    this.#loadFromStorage();
  }

  #loadFromStorage() {
    this.cartItems = JSON.parse(localStorage.getItem(this.#localStorageKey));
  
    if(!this.cartItems) {
      this.cartItems = [];
    }
  }

  saveToStorage(){
    localStorage.setItem(this.#localStorageKey, JSON.stringify(this.cartItems));
  }

  addToCart(productId) {
    let matchingItem;

    if(this.cartItems === null){
      this.cartItems = [{
        productId: productId,
        quantity: 1,
      }
      ]
    }

    this.cartItems.forEach((cartItem) => {
      if(productId === cartItem.productId){
        matchingItem = cartItem;
      } 
    })
    
    if(matchingItem){
      matchingItem.quantity++;
    }else {
      this.cartItems.push({
        productId: productId,
        quantity: 1,
      });
    };

    this.saveToStorage();
  }

  removeFromCart(productId) {
    let updatedCart = [];

    this.cartItems.forEach((item) => {
      if(item.productId !== productId){
        updatedCart.push(item);
      }else if(item.productId === productId && item.quantity > 1) {
        item.quantity--;
        updatedCart.push(item);
      }
    })

    this.cartItems = updatedCart;
    this.saveToStorage();
  }
}