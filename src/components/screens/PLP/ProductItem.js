import React, { Component } from 'react';
import { BsCart2 } from 'react-icons/bs';
import { connect } from 'react-redux';
import AddToCartComp from '../../UI/AddToCartComp/AddToCartComp';

import { Link } from 'react-router-dom';
import SizesAtributes from '../PDP/SizesAtributes';
import { changeAttrubute } from '../../../store/actions';

import './ProductItem.css';

class ProductItem extends Component {
  itemProduct = this.props.product;
  price = 0;
  itemImage;
  attributes = 0;

  render() {
    this.itemImage = this.itemProduct.gallery[0];
    this.price = this.itemProduct.prices.find(
      (price) => price.currency.symbol === this.props.currency
    ).amount;
    if (
      this.props.product.attributes[0] &&
      this.props.product.attributes[0].items !== undefined
    ) {
      this.attributes = this.props.product.attributes[0];
    }
    // console.log('attributes', this.attributes);
    return (
      <div className={this.props.inStock ? 'item out-of-stock' : 'item'}>
        <Link
          to={`/detials/${this.props.id}`}
          style={{ textDecoration: 'none', color: 'black' }}
        >
          <div className="item-image-container">
            <img
              className="item-image out-of-stock"
              src={this.itemImage}
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

        <p className="title">{this.itemProduct.name}</p>
        <p className="price">{`${this.props.currency} ${this.price}`}</p>
        {this.attributes !== 0 && (
          <SizesAtributes
            attributes={this.attributes}
            sentItem={this.itemProduct}
            id={this.itemProduct.id}
          />
        )}
        <div className="add-to-cart-comp">
          {!this.itemProduct.inStock && (
            <AddToCartComp
              sentItem={this.itemProduct}
              clicked={this.props.clickedAttributes}
            />
          )}
        </div>
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
    clickedAttributes: state.clickedAttributes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeAttrubute: (id, attribute) =>
      dispatch(changeAttrubute(id, attribute)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductItem);
