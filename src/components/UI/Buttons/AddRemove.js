import React, { Component } from "react";
import "./AddRemove.css";

export default class AddRemove extends Component {
  render() {
    return <div className="addremove-div1">{this.props.children}</div>;
  }
}
