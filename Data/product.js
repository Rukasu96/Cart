export default class Product {
  name;
  description;
  rating;
  price;
  thumbnail;

  constructor(name, description, rating, price) {
    this.name = name;
    this.description = description;
    this.rating = rating;
    this.price = price;
    //this.thumbnail = thumbnail;
  }
}