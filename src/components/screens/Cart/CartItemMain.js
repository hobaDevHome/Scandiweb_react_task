import React, { Component } from 'react';
import './Cart.css';
import SizeButton from '../../UI/Buttons/SizeButton';

import CartItemCarousel from './CartItemCarousel/CartItemCarousel';
import AddRemove from '../../UI/Buttons/AddRemove';

export default class CartItemMain extends Component {
  render() {
    const sizeButtons = [
      { data: 'XS', checked: false },
      { data: 'S', checked: true },
    ];

    return (
      <div className="main-cart-item">
        <div className="cart-item-data">
          <div className="cart-item-title">Apollo</div>
          <div className="cart-item-shore-desc">Running Short</div>
          <div className="price-amount">$50.00</div>

          <div className="sizes-buttons">
            {sizeButtons.map((button) => {
              return (
                <SizeButton checked={button.checked}>{button.data}</SizeButton>
              );
            })}
          </div>
        </div>
        <div className="cart-item-images-quantity">
          <div className="quantity-div">
            <AddRemove>+</AddRemove>
            <div className="quantity">1</div>
            <AddRemove>-</AddRemove>
          </div>
          <div className="cart-item-pic-div">
            <CartItemCarousel />
          </div>
        </div>
      </div>
    );
  }
}
