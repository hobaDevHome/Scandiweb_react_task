class CartItemModel {
  constructor(quantity, productPrice, productTitle, sum, attributes, id) {
    this.quantity = quantity;
    this.productPrice = productPrice;
    this.productTitle = productTitle;
    this.sum = sum;
    this.attributes = attributes;
    this.id = id;
  }
}
export default CartItemModel;
