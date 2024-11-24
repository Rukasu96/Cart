export default class Cart {
  cartItems = [];
  #localStorageKey = "cart";

  saveToStorage(){
    localStorage.setItem(this.#localStorageKey, JSON.stringify(this.cartItems));
  }

  addToCart(Product) {
    this.cartItems.push({
      product: Product,
      quanity: 1,
    })

    this.saveToStorage();
    console.log(`${Product} dodany`);
    
  }

  removeFromCart(Product) {

  }
}