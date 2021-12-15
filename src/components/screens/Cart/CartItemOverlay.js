import React, { Component } from "react";
import "./CartItemOverlay.css";
import OverlaySizeButton from "../../UI/Buttons/OverlaySizeButton";

import CartItemCarousel from "./CartItemCarousel/CartItemCarousel";
import OverlayAddRemove from "../../UI/Buttons/OverlayAddRemove";

export default class CartItemOverlay extends Component {
  render() {
    const sizeButtons = [
      { data: "XS", checked: false },
      { data: "S", checked: true },
    ];

    return (
      <div className="overlay-cart-item">
        <div className="overlay-item-data">
          <div className="overlay-item-title-details">Apollo</div>
          <div className="overlay-item-title-details">Running Short</div>
          <div className="overlay-price-amount">$50.00</div>

          <div className="overlay-sizes-buttons">
            {sizeButtons.map((button) => {
              return (
                <OverlaySizeButton checked={button.checked}>
                  {button.data}
                </OverlaySizeButton>
              );
            })}
          </div>
        </div>
        <div className="overlay-item-images-quantity">
          <div className="overlay-quantity-div">
            <OverlayAddRemove>+</OverlayAddRemove>
            <div className="overlay-quantity">1</div>
            <OverlayAddRemove>-</OverlayAddRemove>
          </div>
          <div className="overlay-item-pic">
            <img src="./images/pro-2.jpg" alt="" />
          </div>
        </div>
      </div>
    );
  }
}
