import "./App.css";
import { Switch, Route } from "react-router-dom";

import { Producuts } from "../src/components/data/Dummy";

import Header from "../src/components/UI/Header/Header";
import ProductsPage from "./components/screens/PLP/ProductsPage";
import ProductDescription from "./components/screens/PDP/ProductDescription";

import Cart from "./components/screens/Cart/Cart";

import { EXCHANGE_RATES } from "./Apollo";

import React, { Component } from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
} from "@apollo/client";

export default class App extends Component {
  render() {
    console.log(EXCHANGE_RATES);

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
