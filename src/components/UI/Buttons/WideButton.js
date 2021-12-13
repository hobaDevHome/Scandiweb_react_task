import React, { Component } from 'react';
import './WideButton.css';

export default class WideButton extends Component {
  render() {
    return <div className="wide-button">{this.props.children}</div>;
  }
}
