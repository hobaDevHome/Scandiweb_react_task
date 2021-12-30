import React, { Component } from 'react';
import ProductItem from './ProductItem';
import { connect } from 'react-redux';
// import { gql } from '@apollo/client';
// import { clientScandiweb } from './Apollo';
import './ProductsPage.css';

class ProductsPage extends Component {
  constructor(props) {
    super(props);

    this.state = { loaded: false };
  }

  catNames = {
    tech: 'Tech Category Products',
    clothes: 'Clothes Category Products',
    all: 'All Products',
  };
  // componentDidMount() {
  //   clientScandiweb
  //     .query({
  //       query: gql`
  //         query GetCategories {
  //           categories {
  //             name
  //             products {
  //               id
  //               name
  //               inStock
  //               gallery
  //               description
  //               category
  //               attributes {
  //                 name
  //                 items {
  //                   displayValue
  //                   value
  //                   id
  //                 }
  //               }
  //               prices {
  //                 currency {
  //                   label
  //                   symbol
  //                 }
  //                 amount
  //               }
  //               brand
  //             }
  //           }
  //         }
  //       `,
  //     })
  //     .then((result) => {
  //       this.setState({ categories: result.data.categories });
  //       this.props.getProductsLists(this.state.categories);
  //     });
  // }
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
