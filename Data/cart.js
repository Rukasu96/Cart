export default class Cart {
  cartItems;
  cartQuantity = 0;
  #localStorageKey = "cart";

  constructor(){
    this.#loadFromStorage();
  }

  #loadFromStorage() {
    this.cartItems = JSON.parse(localStorage.getItem(this.#localStorageKey));
  
    if(!this.cartItems) {
      this.cartItems = [{
        productId: 12,
        quantity: 1,
      }];
    }
  }

  saveToStorage(){
    localStorage.setItem(this.#localStorageKey, JSON.stringify(this.cartItems));
  }

  addToCart(productId) {
    let matchingItem;

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

  removeFromCart(Product) {
  }

  #updateQuantity(){
    
  }
}