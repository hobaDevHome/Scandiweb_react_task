import React, { Component } from 'react';
import './Cart.css';

import { connect } from 'react-redux';
import { addCartItem } from '../../../store/actions';
import { deleteCartItem } from '../../../store/actions';
import SizesAtributes from '../PDP/SizesAtributes';

import CartItemCarousel from './CartItemCarousel/CartItemCarousel';
import AddRemove from '../../UI/Buttons/AddRemove';

class CartItemMain extends Component {
  constructor(props) {
    super(props);
    this.onAddItem = this.onAddItem.bind(this);
    this.onDeleteItem = this.onDeleteItem.bind(this);
  }
  onAddItem() {
    // console.log(this.props.category);
    this.props.addCartItem(this.props.cartItem);
  }
  onDeleteItem() {
    // console.log(this.props.sentItem.id);
    this.props.deleteCartItem(this.props.cartItem.id);
  }

  render() {
    let price;
    if (this.props.cartItems !== undefined) {
      price = this.props.cartItem.productPrice.find(
        (price) => price.currency.symbol === this.props.currency
      ).amount;
    }

    console.log(this.props.cartItem.attributes);
    return (
      <div className="main-cart-item">
        <div className="cart-item-data">
          <div className="cart-item-title">
            {this.props.cartItem.productTitle}
          </div>

          <div className="price-amount">{`${this.props.currency} ${
            price * this.props.cartItem.quantity
          }`}</div>

          <div className="sizes-buttons">
            <SizesAtributes attributes={this.props.cartItem.attributes[0]} />
          </div>
        </div>
        <div className="cart-item-images-quantity">
          <div className="quantity-div">
            <AddRemove onClick={this.onAddItem}>+</AddRemove>
            <div className="quantity">{this.props.cartItem.quantity}</div>
            <AddRemove onClick={this.onDeleteItem}>-</AddRemove>
          </div>
          <div className="cart-item-pic-div">
            <CartItemCarousel cartItem={this.props.cartItem} />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currency: state.currency,
    cartItems: state.cartItems,
    totalAmount: state.totalAmount,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addCartItem: (item) => dispatch(addCartItem(item)),
    deleteCartItem: (id) => dispatch(deleteCartItem(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartItemMain);
