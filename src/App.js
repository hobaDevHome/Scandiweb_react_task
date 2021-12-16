import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

import Header from '../src/components/UI/Header/Header';
import ProductsPage from './components/screens/PLP/ProductsPage';
import ProductDescription from './components/screens/PDP/ProductDescription';

import Cart from './components/screens/Cart/Cart';
import { gql } from '@apollo/client';
import { clientScandiweb } from './Apollo';

export default class App extends Component {
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
      .then((result) => this.setState({ categories: result.data.categories }));
  }
  render() {
    if (this.state.categories !== undefined) {
      console.log('cat data', this.state.categories);
    }

    return (
      <div className="App">
        <Header />

        <Switch>
          <Route exact path="/">
            <ProductsPage />
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
