import React, { Component } from "react";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

export default class CartItemCarousel extends Component {
  state = { current: 0 };
  SliderData = [
    {
      image: "./images/pro-1.jpg",
    },
    {
      image: "./images/pro-2.jpg",
    },
    {
      image: "./images/pro-3.jpg",
    },
    {
      image: "./images/pro-4.jpg",
    },
  ];
  length = this.SliderData.length;
  nextSlide() {
    this.setState({
      current:
        this.state.current === this.length - 1 ? 0 : this.state.current + 1,
    });
  }

  prevSlide() {
    this.setState({
      current:
        this.state.current === 0 ? this.length - 1 : this.state.current - 1,
    });
  }

  render() {
    return (
      <section className="slider">
        <FaArrowAltCircleLeft
          className="left-arrow"
          onClick={this.prevSlide.bind(this)}
        />
        <FaArrowAltCircleRight
          className="right-arrow"
          onClick={this.nextSlide.bind(this)}
        />
        {this.SliderData.map((slide, index) => {
          return (
            <div
              className={
                index === this.state.current ? "slide active" : "slide"
              }
              key={index}
            >
              {index === this.state.current && (
                <img src={slide.image} alt="travel image" className="image" />
              )}
            </div>
          );
        })}
      </section>
    );
  }
}
