import React, { Component } from 'react';
import './ProductDescription.css';
import SizeButton from '../../UI/Buttons/SizeButton';
import WideButton from '../../UI/Buttons/WideButton';

export default class ProductDescription extends Component {
  render() {
    return (
      <div>
        ProductDescription
        <SizeButton>L</SizeButton>
        <SizeButton checked={true}>S</SizeButton>
        <WideButton>ADD TO CART</WideButton>
      </div>
    );
  }
}
