import React, { Component } from "react";
import "./ProdcutDetailsImage.css";

export default class ProdcutDetailsImage extends Component {
  render() {
    return (
      <div className="thumb-container">
        <img
          className="product-thumb"
          src={`./images/${this.props.thumbSrc}`}
          alt=""
        />
      </div>
    );
  }
}
