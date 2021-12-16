import React, { Component } from "react";
import "./ProductsPage.css";
import ProductItem from "./ProductItem";
import { Link } from "react-router-dom";

export default class ProductsPage extends Component {
  render() {
    return (
      <div className="products">
        <div className="cat-name-containger">
          <p>Category name</p>
        </div>
        <div className="product-list-contianer">
          <Link to="/detials/1">
            <ProductItem />
          </Link>
          <Link to="/detials/2">
            <ProductItem />
          </Link>
          <Link to="/detials/3">
            <ProductItem inStock={true} id="3" />
          </Link>
          <Link to="/detials/4">
            <ProductItem />
          </Link>
          <Link to="/detials/5">
            <ProductItem inCart={true} />
          </Link>
          <Link to="/detials/6">
            <ProductItem />
          </Link>
        </div>
      </div>
    );
  }
}
