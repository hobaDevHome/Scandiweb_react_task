import React, { Component } from 'react';
import './AddRemove.css';

export default class AddRemove extends Component {
  render() {
    return <div className="addremove-div2">{this.props.children}</div>;
  }
}
