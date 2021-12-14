import React, { Component } from "react";
import "./Cart.css";
import CartItemMain from "./CartItemMain";

export default class Cart extends Component {
  render() {
    return (
      <div className="cart-container">
        <div className="cart-title">Cart</div>
        <div className="divdier"></div>
        <CartItemMain />
        <CartItemMain />
      </div>
    );
  }
}
