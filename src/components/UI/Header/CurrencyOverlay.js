import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";

import { connect } from "react-redux";

import "./Header.css";

class CurrBackdrop extends Component {
  render() {
    return <div className="currbackdrop" onClick={this.props.onCurrHide} />;
  }
}

class CurrencyModal extends Component {
  render() {
    return (
      <div className="curr-modal">
        <div className="curr-content">{this.props.children}</div>
      </div>
    );
  }
}

const portalElement = document.getElementById("curroverlays");

class CurrencytOverlay extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Fragment>
        <div className="mian-cur-cont">
          {ReactDOM.createPortal(
            <CurrBackdrop onCurrHide={this.props.onHide} />,
            portalElement
          )}
          {ReactDOM.createPortal(
            <CurrencyModal className="currency-modal">
              <div className="currency-list">
                {this.props.currNames.map((cur) => {
                  return (
                    <div
                      key={cur.length}
                      className="currency-item"
                      onClick={() =>
                        this.props.onChooseCurrencyHandler(cur.split(" ")[0])
                      }
                      on
                    >
                      {cur}
                    </div>
                  );
                })}
              </div>
            </CurrencyModal>,
            portalElement
          )}
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currency: state.currency,
  };
};

export default connect(mapStateToProps, null)(CurrencytOverlay);
