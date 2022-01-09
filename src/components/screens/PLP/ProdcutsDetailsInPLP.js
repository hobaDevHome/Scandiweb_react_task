import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";

class Backdrop extends Component {
  render() {
    return <div className="backdrop" onClick={this.props.onBackHide} />;
  }
}

class ProductCard extends Component {
  render() {
    return (
      <div className="cart-modal">
        <div className="content">{this.props.children}</div>
      </div>
    );
  }
}

const portalElement = document.getElementById("productAttirbutes");
class ProdcutsDetailsInPLP extends Component {
  render() {
    return (
      <Fragment>
        {ReactDOM.createPortal(
          <Backdrop onBackHide={this.props.onHide} />,
          portalElement
        )}
        {ReactDOM.createPortal(
          <ProductCard>
            <div>prodcut details temp</div>
          </ProductCard>,
          portalElement
        )}
      </Fragment>
    );
  }
}

export default ProdcutsDetailsInPLP;
