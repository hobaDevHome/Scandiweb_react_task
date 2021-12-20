import React, { Component } from "react";
import "./Cart.css";
import CartItemMain from "./CartItemMain";
import { connect } from "react-redux";

class Cart extends Component {
  render() {
    console.log(this.props.cartItems);
    return (
      <div className="cart-container">
        <div className="cart-title">Cart</div>
        <div className="divdier"></div>
        {this.props.cartItems.map((item) => {
          return (
            <div>
              <CartItemMain key={item.id} cartItem={item} />
            </div>
          );
        })}

        <div className="total">{this.props.totalAmount}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cartItems: state.cartItems,
    totalAmount: state.totalAmount,
  };
};

export default connect(mapStateToProps, null)(Cart);
