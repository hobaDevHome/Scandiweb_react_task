import React, { Component } from "react";
import CartOverlay from "../../screens/Cart/CartOverlay";
import { BsCart2 } from "react-icons/bs";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";

import "./Header.css";

export default class Header extends Component {
  state = { showCartModal: false, showCurrency: false };

  showCartOverlay() {
    this.setState({ showCartModal: true });
  }
  hideCartOverlay() {
    this.setState({ showCartModal: false });
  }

  showCurrencyList() {
    this.setState({ showCurrency: true });
  }
  hideCurrencyList() {
    this.setState({ showCurrency: false });
  }
  toggleCurrencyList() {
    this.setState({ showCurrency: !this.state.showCurrency });
  }
  render() {
    const cartItems = 2;
    return (
      <div className="header-row">
        {this.state.showCurrency && (
          <div className="currency-list">
            <div
              className="currency-item"
              onClick={this.hideCurrencyList.bind(this)}
            >
              $ USD
            </div>
            <div
              className="currency-item"
              onClick={this.hideCurrencyList.bind(this)}
            >
              € EUR
            </div>
            <div
              className="currency-item"
              onClick={this.hideCurrencyList.bind(this)}
            >
              ¥ JPY
            </div>
          </div>
        )}
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
              <a href=" #">kids</a>
            </li>
          </ul>
        </div>
        <div className="bag-section">
          <img src="./images/bag-icon.png" alt="" />
        </div>
        <div className="cart-section">
          <div
            className="currency-icons-section"
            onClick={this.toggleCurrencyList.bind(this)}
          >
            <div className="currencyAmount">$</div>
            <div className="currency">
              {this.state.showCurrency ? (
                <BsChevronUp size={10} />
              ) : (
                <BsChevronDown size={10} />
              )}
            </div>
          </div>

          <div
            onClick={this.showCartOverlay.bind(this)}
            className={`cart-icon ${cartItems > 0 ? "cart-badge-visible" : ""}`}
          >
            <BsCart2 size={20} />
            <div className="cart-badge">{cartItems}</div>
          </div>
        </div>
      </div>
    );
  }
}
