import React, { Component } from "react";
import "./ProductDescription.css";

import ProdcutDetailsImage from "./ProdcutDetailsImage";
import ProdcutMainImage from "./ProductMainImage";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import AddToCartComp from "../../UI/AddToCartComp/AddToCartComp";
import SizesAtributes from "./SizesAtributes";

class ProductDescription extends Component {
  state = { id: undefined, currentImage: undefined };
  componentDidMount() {
    const sentId = this.props.match.params.porductid;
    this.setState({ id: sentId });
  }

  selecteProduct = {};
  price = 0;
  attributes;
  currentImage;
  onThumbClickHandler(thumb) {
    console.log("thum cliked", thumb);
    this.setState({ currentImage: thumb });
  }
  render() {
    if (
      this.state.id !== undefined &&
      this.props.productsList.products !== undefined
    ) {
      this.selecteProduct = this.props.productsList.products.find(
        (prod) => prod.id === this.state.id
      );

      this.detailsImages = this.selecteProduct.gallery;
      this.currentImage = this.detailsImages[0];
      this.price = this.selecteProduct.prices.find(
        (price) => price.currency.symbol === this.props.currency
      ).amount;

      this.attributes = this.selecteProduct.attributes[0];

      // console.log("product item", this.attributes.name);

      return (
        <div className="main">
          <div className="prodcut-desc-container">
            <div className="details-pic-div">
              {this.selecteProduct.gallery.map((thumb) => (
                <ProdcutDetailsImage
                  thumbSrc={thumb}
                  onClick={() => this.onThumbClickHandler(thumb)}
                />
              ))}
            </div>
            <div className="product-img-div">
              <ProdcutMainImage
                mainImage={
                  this.state.currentImage === undefined
                    ? this.currentImage
                    : this.state.currentImage
                }
              />
            </div>
            <div className="prodcut-data-div">
              <div className="prod-title">{this.selecteProduct.name}</div>
              <SizesAtributes attributes={this.attributes} />

              <div className="size-desc">PRICE:</div>
              <div className="price-amount-desc">{`${this.props.currency} ${this.price}`}</div>
              <AddToCartComp />
            </div>
          </div>
          <p className="prod-long-desc">
            <span
              dangerouslySetInnerHTML={{
                __html: this.selecteProduct.description.replace(
                  /(<? *script)/gi,
                  "illegalscript"
                ),
              }}
            />
          </p>
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
