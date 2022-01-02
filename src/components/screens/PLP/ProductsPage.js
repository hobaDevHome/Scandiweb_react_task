import React, { Component } from "react";
import ProductItem from "./ProductItem";
import { connect } from "react-redux";
import { gql } from "@apollo/client";
import { clientScandiweb } from "../../../Apollo";
import "./ProductsPage.css";

class ProductsPage extends Component {
  constructor(props) {
    super(props);

    this.state = { loaded: false, theSelectedList: undefined };
  }

  catNames = {
    tech: "Tech Category Products",
    clothes: "Clothes Category Products",
    all: "All Products",
  };

  // componentDidMount() {
  //   this.getProducts();
  // }

  async getProducts() {
    let temp;
    temp = await clientScandiweb.query({
      query: gql`
        query {
          category {
            products {
              id
              gallery
              name
              category
              inStock
              attributes {
                id
                type
                name
                items {
                  id
                  displayValue
                  value
                }
              }
              prices {
                currency
                amount
              }
            }
          }
        }
      `,
    });

    this.setState({
      products: temp.data,
    });
  }

  render() {
    return (
      <div className="products">
        <div className="cat-name-containger">
          <p>{this.catNames[this.props.category]}</p>
        </div>
        <div className="product-list-contianer">
          {this.props.selectedList.products !== undefined &&
            this.props.selectedList.products.map((product) => {
              return (
                <ProductItem
                  key={product.id}
                  inStock={product.inStock}
                  inCart={false}
                  id={product.id}
                  product={product}
                />
              );
            })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    selectedList: state.selectedList,
    category: state.category,
  };
};

export default connect(mapStateToProps, null)(ProductsPage);
