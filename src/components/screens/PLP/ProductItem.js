import React, { Component } from 'react';
import { BsCart2 } from 'react-icons/bs';
import './ProductItem.css';

export default class ProductItem extends Component {
  render() {
    console.log(this.props.inCart);
    return (
      <div className={this.props.inStock ? 'item out-of-stock' : 'item'}>
        <div className="item-image-container">
          <img
            className="item-image out-of-stock"
            src="./../../../images/pro-1.jpg"
            alt=""
          />
          <div className="out-lable">
            <p>OUT OF STOCK</p>
          </div>
        </div>
        <div
          className={
            this.props.inCart ? 'item-cart-icon item-in-cart' : 'item-cart-icon'
          }
        >
          <BsCart2 size={20} color={'white'} />
        </div>

        <p className="title">Apollo Running Short</p>
        <p className="price">$50.00</p>
      </div>
    );
  }
}
