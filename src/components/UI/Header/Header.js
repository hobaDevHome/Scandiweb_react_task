import React, { Component } from 'react';
import CartOverlay from '../../screens/Cart/CartOverlay';
import { BsCart2 } from 'react-icons/bs';
import { BsChevronDown, BsChevronUp } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  changeCurrency,
  getSelectedProductsLists,
} from '../../../store/actions';

import './Header.css';

class Header extends Component {
  state = { showCartModal: false, showCurrency: false };

  showCartOverlay() {
    this.setState({ showCartModal: true });
    this.hideCurrencyList();
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
    this.hideCartOverlay();
    this.setState({ showCurrency: !this.state.showCurrency });
  }

  onChooseCurrencyHandler(newCurrency) {
    // console.log('handler called whit', newCurrency);

    this.props.changeCurrency(newCurrency);

    this.hideCurrencyList();
  }

  onChosseCatHandler(choosecCat) {
    this.props.getSelectedProductsLists(choosecCat);
  }
  render() {
    const cartItems = this.props.cartItems.length;
    return (
      <div className="header-row" style={this.props.style}>
        {this.state.showCurrency && (
          <div className="currency-list">
            <div
              className="currency-item"
              onClick={() => this.onChooseCurrencyHandler('$')}
            >
              $ USD
            </div>
            <div
              className="currency-item"
              onClick={() => this.onChooseCurrencyHandler('£')}
            >
              £ GBP
            </div>
            <div
              className="currency-item"
              onClick={() => this.onChooseCurrencyHandler('A$')}
            >
              A$ AUD
            </div>
            <div
              className="currency-item"
              onClick={() => this.onChooseCurrencyHandler('¥')}
            >
              ¥ JPY
            </div>
            <div
              className="currency-item"
              onClick={() => this.onChooseCurrencyHandler('₽')}
            >
              ₽ RUB
            </div>
          </div>
        )}
        {this.state.showCartModal && (
          <CartOverlay onHide={this.hideCartOverlay.bind(this)} />
        )}
        <div className="links-section">
          <ul>
            <Link to="/">
              <li
                className={`cat-link ${
                  this.props.category === 'all' ? 'acitve-cat' : ''
                }`}
                onClick={() => this.onChosseCatHandler('all')}
              >
                <p>all</p>
              </li>
            </Link>
            <Link to="/">
              <li
                className={`cat-link ${
                  this.props.category === 'clothes' ? 'acitve-cat' : ''
                }`}
                onClick={() => this.onChosseCatHandler('clothes')}
              >
                <p>clothes</p>
              </li>
            </Link>
            <Link to="/">
              <li
                className={`cat-link ${
                  this.props.category === 'tech' ? 'acitve-cat' : ''
                }`}
                onClick={() => this.onChosseCatHandler('tech')}
              >
                <p>tech</p>
              </li>
            </Link>
          </ul>
        </div>
        <div className="bag-section">
          <Link to="/">
            <img src="./images/bag-icon.png" alt="" />
          </Link>
        </div>
        <div className="cart-section">
          <div
            className="currency-icons-section"
            onClick={this.toggleCurrencyList.bind(this)}
          >
            <div className="currencyAmount">{this.props.currency}</div>
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

const mapStateToProps = (state) => {
  return {
    currency: state.currency,
    category: state.category,
    cartItems: state.cartItems,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeCurrency: (curr) => dispatch(changeCurrency(curr)),
    getSelectedProductsLists: (cat) => dispatch(getSelectedProductsLists(cat)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
