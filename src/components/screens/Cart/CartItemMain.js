import React, { Component } from 'react';
import './Cart.css';

import { connect } from 'react-redux';
import { addCartItem } from '../../../store/actions';
import { deleteCartItem } from '../../../store/actions';

import { Link } from 'react-router-dom';
import CartItemCarousel from './CartItemCarousel/CartItemCarousel';
import AddRemove from '../../UI/Buttons/AddRemove';
import SizeButton from '../../UI/Buttons/SizeButton';
import ColorBtn from '../../UI/Buttons/ColorBtn';

class CartItemMain extends Component {
  constructor(props) {
    super(props);
    this.onAddItem = this.onAddItem.bind(this);
    this.onDeleteItem = this.onDeleteItem.bind(this);
  }
  attrValue;
  attrName;
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

      const found = this.props.clickedAttributes.find(
        (att) => att.id === this.props.cartItem.id
      );
      if (found) {
        // this.foundVlue = found.attribute.value;
        this.attrName = found.name;
        this.attrValue = found.attribute.value;
        console.log('att', this.attrName);
      }
    }

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
            {this.attrName === 'Color' ? (
              <ColorBtn
                style={{
                  backgroundColor: this.attrValue,
                  border: '2px solid rgb(218, 48, 203)',
                }}
              ></ColorBtn>
            ) : null}
            {this.attrName === 'Size' || this.attrName === 'Capacity' ? (
              <SizeButton style={{ backgroundColor: 'black', color: 'white' }}>
                {this.attrValue}
              </SizeButton>
            ) : null}
          </div>
        </div>
        <div className="cart-item-images-quantity">
          <div className="quantity-div">
            <AddRemove onClick={this.onAddItem}>+</AddRemove>
            <div className="quantity">{this.props.cartItem.quantity}</div>
            <AddRemove onClick={this.onDeleteItem}>-</AddRemove>
          </div>
          <Link to={`/detials/${this.props.cartItem.id}`}>
            <div className="cart-item-pic-div">
              <CartItemCarousel cartItem={this.props.cartItem} />
            </div>
          </Link>
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

export default connect(mapStateToProps, mapDispatchToProps)(CartItemMain);
