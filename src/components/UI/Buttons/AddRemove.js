import React, { Component } from "react";
import "./AddRemove.css";

export default class AddRemove extends Component {
  render() {
    return <div className="addremove-div">{this.props.children}</div>;
  }
}
