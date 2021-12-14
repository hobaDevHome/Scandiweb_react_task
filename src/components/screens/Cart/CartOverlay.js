import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import SizeButton from '../../UI/Buttons/SizeButton';
import CartItemMain from './CartItemMain';
import './CartOverlay.css';

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

const portalElement = document.getElementById('overlays');

export default class CartOverlay extends Component {
  render() {
    return (
      <Fragment>
        {ReactDOM.createPortal(
          <Backdrop onBackHide={this.props.onHide} />,
          portalElement
        )}
        {ReactDOM.createPortal(
          <CartModal>
            <CartItemMain className="overlay-div" />
            <SizeButton>view bag</SizeButton>
            <button onClick={this.props.onHide}>close the modal</button>
          </CartModal>,
          portalElement
        )}
      </Fragment>
    );
  }
}
