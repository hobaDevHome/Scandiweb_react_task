import React, { Component } from "react";
import "./ProductDescription.css";
import SizeButton from "../../UI/Buttons/SizeButton";
import WideButton from "../../UI/Buttons/WideButton";
import ProdcutDetailsImage from "./ProdcutDetailsImage";
import ProdcutMainImage from "./ProductMainImage";

export default class ProductDescription extends Component {
  render() {
    const detailsImages = ["pro-1.jpg", "pro-2.jpg", "pro-4.jpg", "pro-3.jpg"];
    const currentImage = "pro-2.jpg";
    const sizeButtons = [
      { data: "XS", checked: false },
      { data: "S", checked: true },
      { data: "M", checked: false },
      { data: "L", checked: false },
    ];

    return (
      <div className="prodcut-desc-container">
        <div className="details-pic-div">
          {detailsImages.map((thumb) => (
            <ProdcutDetailsImage thumbSrc={thumb} />
          ))}
        </div>
        <div className="product-img-div">
          <ProdcutMainImage mainImage={currentImage} />
        </div>
        <div className="prodcut-data-div">
          <div className="prod-title">Apollo</div>
          <div className="prod-shore-desc">Running Short</div>
          <div className="size">SIZE:</div>
          <div className="sizes-buttons">
            {sizeButtons.map((button) => {
              return (
                <SizeButton checked={button.checked}>{button.data}</SizeButton>
              );
            })}
          </div>
          <div className="size">PRICE:</div>
          <div className="price-amount">$50.00</div>
          <WideButton>ADD TO CART</WideButton>
          <p className="prod-long-desc">
            Find stunning women's cocktail dresses and party dresses. Stand out
            in lace and metallic cocktail dresses and party dresses from all
            your favorite brands.
          </p>
        </div>
      </div>
    );
  }
}
