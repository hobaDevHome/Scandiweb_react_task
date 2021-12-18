import React, { Component } from 'react';
import './ProductDescription.css';
import SizeButton from '../../UI/Buttons/SizeButton';

import ProdcutDetailsImage from './ProdcutDetailsImage';
import ProdcutMainImage from './ProductMainImage';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import AddToCartComp from '../../UI/AddToCartComp/AddToCartComp';

class ProductDescription extends Component {
  state = { id: undefined, imageIndex: 0 };
  componentDidMount() {
    const sentId = this.props.match.params.porductid;
    this.setState({ id: sentId });
  }

  selecteProduct = {};
  price = 0;

  sizeButtons = [
    { data: 'XS', checked: false },
    { data: 'S', checked: true },
    { data: 'M', checked: false },
    { data: 'L', checked: false },
  ];

  render() {
    if (
      this.state.id !== undefined &&
      this.props.productsList.products !== undefined
    ) {
      this.selecteProduct = this.props.productsList.products.find(
        (prod) => prod.id === this.state.id
      );

      this.detailsImages = this.selecteProduct.gallery;
      this.price = this.selecteProduct.prices.find(
        (price) => price.currency.symbol === this.props.currency
      ).amount;
      console.log('product item', this.price.amount);

      return (
        <div className="prodcut-desc-container">
          <div className="details-pic-div">
            {this.selecteProduct.gallery.map((thumb) => (
              <ProdcutDetailsImage thumbSrc={thumb} />
            ))}
          </div>
          <div className="product-img-div">
            <ProdcutMainImage
              mainImage={this.selecteProduct.gallery[this.state.imageIndex]}
            />
          </div>
          <div className="prodcut-data-div">
            <div className="prod-title">{this.selecteProduct.name}</div>
            {/* <div className="prod-shore-desc">Running Short</div> */}
            <div className="size">SIZE:</div>
            <div className="sizes-buttons">
              {this.sizeButtons.map((button) => {
                return (
                  <SizeButton checked={button.checked}>
                    {button.data}
                  </SizeButton>
                );
              })}
            </div>
            <div className="size">PRICE:</div>
            <div className="price-amount">{`${this.props.currency} ${this.price}`}</div>
            <AddToCartComp />
            <p className="prod-long-desc">
              <span
                dangerouslySetInnerHTML={{
                  __html: this.selecteProduct.description.replace(
                    /(<? *script)/gi,
                    'illegalscript'
                  ),
                }}
              />
            </p>
          </div>
        </div>
      );
    }

    return <div>Loadidng</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    currency: state.currency,
    productsList: state.productsList,
    selectedList: state.selectedList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // add: () => dispatch(addAction()),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ProductDescription));
