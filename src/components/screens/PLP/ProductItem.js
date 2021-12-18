import React, { Component } from 'react';
import { BsCart2 } from 'react-icons/bs';
import { connect } from 'react-redux';
import AddToCartComp from '../../UI/AddToCartComp/AddToCartComp';
import { Link } from 'react-router-dom';

import './ProductItem.css';

class ProductItem extends Component {
  render() {
    return (
      <div className={this.props.inStock ? 'item out-of-stock' : 'item'}>
        <Link
          to={`/detials/${this.props.id}`}
          style={{ textDecoration: 'none', color: 'black' }}
        >
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
        </Link>
        <div
          className={
            this.props.inCart ? 'item-cart-icon item-in-cart' : 'item-cart-icon'
          }
        >
          <BsCart2 size={20} color={'white'} />
        </div>

        <p className="title">Apollo Running Short</p>
        <p className="price">{this.props.currency}50.00</p>
        <AddToCartComp />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currency: state.currency,
    productsList: state.productsList,
    selectedList: state.selectedList,
    category: state.category,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // add: () => dispatch(addAction()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductItem);
