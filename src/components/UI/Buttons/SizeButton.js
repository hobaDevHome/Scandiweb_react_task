import React, { Component } from 'react';
import './SizeButton.css';

export default class SizeButton extends Component {
  render() {
    return (
      <div
        className={
          this.props.checked ? 'size-button size-button-active' : 'size-button'
        }
      >
        {this.props.children}
      </div>
    );
  }
}
