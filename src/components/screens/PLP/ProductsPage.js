import React, { Component } from "react";
import "./ProductsPage.css";
import ProductItem from "./ProductItem";

export default class ProductsPage extends Component {
  render() {
    return (
      <div className="products">
        <div className="cat-name-containger">
          <p>Category name</p>
        </div>
        <div className="product-list-contianer">
          <ProductItem />
          <ProductItem />
          <ProductItem inStock={true} />
          <ProductItem />
          <ProductItem />
          <ProductItem inCart={true} />
        </div>
      </div>
    );
  }
}
