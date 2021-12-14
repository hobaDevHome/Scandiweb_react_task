import React, { Component } from 'react';

import { BsCart2 } from 'react-icons/bs';
import { BsChevronDown } from 'react-icons/bs';
import './Header.css';

export default class Header extends Component {
  render() {
    return (
      <div className="header-row">
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
        <div className="cart-section">
          <div className="currencyAmount">$</div>
          <div className="currency">
            <BsChevronDown size={14} />
          </div>
          <div className="cart-icon">
            <BsCart2 size={20} />
          </div>
        </div>
      </div>
    );
  }
}
