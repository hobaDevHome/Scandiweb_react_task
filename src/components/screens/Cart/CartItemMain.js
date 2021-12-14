import React, { Component } from "react";
import "./Cart.css";
import SizeButton from "../../UI/Buttons/SizeButton";

import ProdcutDetailsImage from "./../PDP/ProdcutDetailsImage";

export default class CartItemMain extends Component {
  render() {
    const detailsImages = ["pro-1.jpg", "pro-2.jpg", "pro-4.jpg", "pro-3.jpg"];

    const sizeButtons = [
      { data: "XS", checked: false },
      { data: "S", checked: true },
    ];
    return (
      <div className="main-cart-item">
        <div className="cart-item-data">
          <div className="cart-item-title">Apollo</div>
          <div className="cart-item-shore-desc">Running Short</div>
          <div className="price-amount">$50.00</div>

          <div className="sizes-buttons">
            {sizeButtons.map((button) => {
              return (
                <SizeButton checked={button.checked}>{button.data}</SizeButton>
              );
            })}
          </div>
        </div>
        <div className="cart-item-images-quantity">
          <div className="quantity-div">
            <div className="add">+</div>
            <div className="quantity">1</div>
            <div className="remove">-</div>
          </div>
          <div className="details-pic-div">
            <ProdcutDetailsImage thumbSrc={"pro-2.jpg"} />
          </div>
        </div>
      </div>
    );
  }
}
