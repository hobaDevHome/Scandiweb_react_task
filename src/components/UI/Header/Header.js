import React, { Component } from 'react';
import CartOverlay from '../../screens/Cart/CartOverlay';
import { BsCart2 } from 'react-icons/bs';
import { BsChevronDown } from 'react-icons/bs';

import './Header.css';

export default class Header extends Component {
  state = { showCartModal: false };

  showCartOverlay() {
    this.setState({ showCartModal: true });
  }
  hideCartOverlay() {
    this.setState({ showCartModal: false });
  }
  render() {
    const cartItems = 2;
    return (
      <div className="header-row">
        {this.state.showCartModal && (
          <CartOverlay onHide={this.hideCartOverlay.bind(this)} />
        )}
        <div className="links-section">
          <ul>
            <li className="cat-link acitve-cat">
              <a href="#">women</a>
            </li>
            <li className="cat-link">
              <a href="#">men</a>
            </li>
            <li className="cat-link">
              <a href="#">kids</a>
            </li>
          </ul>
        </div>
        <div className="bag-section">
          <img src="./images/bag-icon.png" alt="" />
        </div>
        <div className="cart-section" onClick={this.showCartOverlay.bind(this)}>
          <div className="currencyAmount">$</div>
          <div className="currency">
            <BsChevronDown size={14} />
          </div>

          <div
            className={`cart-icon ${cartItems > 0 ? 'cart-badge-visible' : ''}`}
          >
            <BsCart2 size={20} />
            <div className="cart-badge">{cartItems}</div>
          </div>
        </div>
      </div>
    );
  }
}
