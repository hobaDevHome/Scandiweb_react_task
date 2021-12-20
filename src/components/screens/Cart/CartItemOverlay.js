import React, { Component } from 'react';
import './CartItemOverlay.css';
import SizesAtributes from '../PDP/SizesAtributes';
import { connect } from 'react-redux';
import { addCartItem } from '../../../store/actions';
import { deleteCartItem } from '../../../store/actions';

import OverlayAddRemove from '../../UI/Buttons/OverlayAddRemove';

class CartItemOverlay extends Component {
  constructor(props) {
    super(props);
    this.onAddItem = this.onAddItem.bind(this);
    this.onDeleteItem = this.onDeleteItem.bind(this);
  }
  onAddItem() {
    console.log('add item from overlay');
    this.props.addCartItem(this.props.cartItem);
  }
  onDeleteItem() {
    console.log('delete item from overlay');
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

    return (
      <div className="overlay-cart-item">
        <div className="overlay-item-data">
          <div className="overlay-item-title-details">
            {this.props.cartItem.productTitle}
          </div>

          <div className="overlay-price-amount">{`${this.props.currency} ${
            price * this.props.cartItem.quantity
          }`}</div>

          <div className="overlay-sizes-buttons">
            <SizesAtributes attributes={this.props.cartItem.attributes[0]} />
          </div>
        </div>
        <div className="overlay-item-images-quantity">
          <div className="overlay-quantity-div">
            <OverlayAddRemove onClick={this.onAddItem}>+</OverlayAddRemove>
            <div className="overlay-quantity">
              {this.props.cartItem.quantity}
            </div>
            <OverlayAddRemove onClick={this.onDeleteItem}>-</OverlayAddRemove>
          </div>
          <div className="overlay-item-pic">
            <img src={this.props.cartItem.gallery[0]} alt="" />
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

export default connect(mapStateToProps, mapDispatchToProps)(CartItemOverlay);
