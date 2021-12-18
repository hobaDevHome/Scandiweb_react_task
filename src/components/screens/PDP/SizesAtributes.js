import React, { Component } from 'react';
import ColorBtn from '../../UI/Buttons/ColorBtn';
import SizeButton from '../../UI/Buttons/SizeButton';
import './SizesAtributes.css';

export default class SizesAtributes extends Component {
  state = { att: undefined };
  currentAttributes = this.props.attributes;

  render() {
    return (
      <div>
        <div className="size">{this.currentAttributes.name}</div>

        <div className="sizes-buttons">
          {this.currentAttributes.name === 'Color'
            ? this.currentAttributes.items.map((attr) => {
                return (
                  <ColorBtn style={{ backgroundColor: attr.value }}></ColorBtn>
                );
              })
            : this.currentAttributes.items.map((attr) => {
                return (
                  <SizeButton checked={attr.checked}>{attr.value}</SizeButton>
                );
              })}
        </div>
      </div>
    );
  }
}
