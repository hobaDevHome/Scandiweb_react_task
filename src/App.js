import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from '../src/components/UI/Header/Header';
import ProductsPage from './components/screens/PLP/ProductsPage';
import ProductDescription from './components/screens/PDP/ProductDescription';

import Cart from './components/screens/Cart/Cart';
import { gql } from '@apollo/client';
import { clientScandiweb } from './Apollo';
import { getProductsLists } from './store/actions';

class App extends Component {
  state = { categories: undefined };

  componentDidMount() {
    clientScandiweb
      .query({
        query: gql`
          query GetCategories {
            categories {
              name
              products {
                id
                name
                inStock
                gallery
                description
                category
                attributes {
                  name
                  items {
                    displayValue
                    value
                    id
                  }
                }
                prices {
                  currency {
                    label
                    symbol
                  }
                  amount
                }
                brand
              }
            }
          }
        `,
      })
      .then((result) => {
        this.setState({ categories: result.data.categories });

        this.props.getProductsLists(this.state.categories);
      });
  }
  render() {
    if (this.state.categories !== undefined) {
    }
    if (this.state.categories === undefined) {
      return <div>Loading</div>;
    }

    return (
      <div className="App">
        <Header
          categories={this.state.categories}
          style={{
            position: 'fixed',
            top: 0,
            backgroundColor: 'white',
            zIndex: 25,
            width: '100%',
          }}
        />

        <Switch>
          <Route exact path="/">
            <ProductsPage cats={this.state.categories} />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/detials/:porductid">
            <ProductDescription />
          </Route>
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currency: state.currency,
    category: state.category,
    cartItems: state.cartItems,
    productsList: state.productsList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getProductsLists: (list) => dispatch(getProductsLists(list)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
