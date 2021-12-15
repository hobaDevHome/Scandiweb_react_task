import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import ViewBagButton from "../../UI/Buttons/ViewBagButton";
import CartItemOverlay from "./CartItemOverlay";
import WideButton from "../../UI/Buttons/WideButton";
import "./CartOverlay.css";

class Backdrop extends Component {
  render() {
    return <div className="backdrop" onClick={this.props.onBackHide} />;
  }
}

class CartModal extends Component {
  render() {
    return (
      <div className="cart-modal">
        <div className="content">{this.props.children}</div>
      </div>
    );
  }
}

const portalElement = document.getElementById("overlays");

export default class CartOverlay extends Component {
  render() {
    const bagItems = 2;
    const total = 100;
    return (
      <Fragment>
        {ReactDOM.createPortal(
          <Backdrop onBackHide={this.props.onHide} />,
          portalElement
        )}
        {ReactDOM.createPortal(
          <CartModal>
            <div className="overlay-item-titles">My Bag. {bagItems} items</div>
            <div className="overlay-items-containter">
              <CartItemOverlay />
              <CartItemOverlay />
            </div>
            <div className="overlay-total-containt">
              <div className="overlay-item-titles">Total </div>
              <div className="overlay-item-titles"> $ {total} </div>
            </div>
            <div className="overlay-buttons-div">
              <div className="btn">
                <ViewBagButton>view bag</ViewBagButton>
              </div>
              <div className="btn">
                <WideButton
                  onClick={this.props.onHide}
                  style={{ fontSize: "14px", fontWeight: "normal" }}
                >
                  check out
                </WideButton>
              </div>
            </div>
          </CartModal>,
          portalElement
        )}
      </Fragment>
    );
  }
}
