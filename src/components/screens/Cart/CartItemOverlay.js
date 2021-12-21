import React, { Component } from 'react';
import './CartItemOverlay.css';

import { connect } from 'react-redux';
import { addCartItem } from '../../../store/actions';
import { deleteCartItem } from '../../../store/actions';

import OverlayAddRemove from '../../UI/Buttons/OverlayAddRemove';
import ColorBtn from '../../UI/Buttons/ColorBtn';
import OverlaySizeButton from '../../UI/Buttons/OverlaySizeButton';

class CartItemOverlay extends Component {
  constructor(props) {
    super(props);
    this.onAddItem = this.onAddItem.bind(this);
    this.onDeleteItem = this.onDeleteItem.bind(this);
  }
  attrValue;
  attrName;
  onAddItem() {
    // console.log('add item from overlay');
    this.props.addCartItem(this.props.cartItem);
  }
  onDeleteItem() {
    // console.log('delete item from overlay');
    // console.log(this.props.sentItem.id);
    this.props.deleteCartItem(this.props.cartItem.id);
  }
  render() {
    let price;
    if (this.props.cartItems !== undefined) {
      price = this.props.cartItem.productPrice.find(
        (price) => price.currency.symbol === this.props.currency
      ).amount;
      const found = this.props.clickedAttributes.find(
        (att) => att.id === this.props.cartItem.id
      );
      if (found) {
        // this.foundVlue = found.attribute.value;
        this.attrName = found.name;
        this.attrValue = found.attribute.value;
        console.log('att', this.attrName, this.attrValue);
      }
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
            {this.attrName === 'Color' ? (
              <ColorBtn
                style={{
                  backgroundColor: this.attrValue,
                  border: '2px solid rgb(218, 48, 203)',
                }}
              ></ColorBtn>
            ) : null}
            {this.attrName === 'Size' || this.attrName === 'Capacity' ? (
              <OverlaySizeButton
                style={{ backgroundColor: 'black', color: 'white' }}
              >
                {this.attrValue}
              </OverlaySizeButton>
            ) : null}
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
    clickedAttributes: state.clickedAttributes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addCartItem: (item) => dispatch(addCartItem(item)),
    deleteCartItem: (id) => dispatch(deleteCartItem(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartItemOverlay);
