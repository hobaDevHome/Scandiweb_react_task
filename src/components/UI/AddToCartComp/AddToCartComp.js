import React, { Component } from 'react';
import AddRemove from '../Buttons/AddRemove';
import WideButton from '../Buttons/WideButton';
import './AddToCartComp.css';

export default class AddToCartComp extends Component {
  render() {
    return (
      <div className="cart-buttons-component">
        <AddRemove>+</AddRemove>
        <WideButton>add to cart</WideButton>
        <AddRemove>-</AddRemove>
      </div>
    );
  }
}
