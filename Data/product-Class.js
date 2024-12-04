export default class Product {
  id;
  name;
  description;
  rating;
  price;
  thumbnail;

  constructor(id, name, description, rating, price, thumbnail) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.rating = rating;
    this.price = price;
    this.thumbnail = thumbnail;
  }
}