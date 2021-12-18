import React, { Component } from 'react';
import './ProductsPage.css';
import ProductItem from './ProductItem';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class ProductsPage extends Component {
  state = { loaded: false };

  catNames = {
    tech: 'Tech Category Products',
    clothes: 'Clothes Category Products',
    all: 'All Products',
  };

  render() {
    console.log('starting selectedList', this.props.selectedList.products);

    console.log('starting productsList', this.props.productsList.products);
    return (
      <div className="products">
        <div className="cat-name-containger">
          <p>{this.catNames[this.props.category]}</p>
        </div>
        <div className="product-list-contianer">
          {this.props.selectedList.products !== undefined &&
            this.props.selectedList.products.map((product) => {
              return (
                <Link
                  key={product.id}
                  to="/detials/1"
                  style={{ textDecoration: 'none', color: 'black' }}
                >
                  <ProductItem />
                </Link>
              );
            })}

          {/* <Link
            to="/detials/2"
            style={{ textDecoration: 'none', color: 'black' }}
          >
            <ProductItem />
          </Link>
          <Link
            to="/detials/3"
            style={{ textDecoration: 'none', color: 'black' }}
          >
            <ProductItem inStock={true} id="3" />
          </Link>
          <Link
            to="/detials/4"
            style={{ textDecoration: 'none', color: 'black' }}
          >
            <ProductItem />
          </Link>
          <Link
            to="/detials/5"
            style={{ textDecoration: 'none', color: 'black' }}
          >
            <ProductItem inCart={true} />
          </Link>
          <Link
            to="/detials/6"
            style={{ textDecoration: 'none', color: 'black' }}
          >
            <ProductItem />
          </Link> */}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    selectedList: state.selectedList,
    category: state.category,
    query: state.query,
    productsList: state.productsList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // add: () => dispatch(addAction()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductsPage);
