class CartItemModel {
  constructor(quantity, productPrice, productTitle, attributes, id) {
    this.quantity = quantity;
    this.productPrice = productPrice;
    this.productTitle = productTitle;

    this.attributes = attributes;
    this.id = id;
  }
}
export default CartItemModel;
