import "./App.css";
import { Switch, Route } from "react-router-dom";

import { Producuts } from "../src/components/data/Dummy";

import Header from "../src/components/UI/Header/Header";
import ProductsPage from "./components/screens/PLP/ProductsPage";
import ProductDescription from "./components/screens/PDP/ProductDescription";

import Cart from "./components/screens/Cart/Cart";

function App() {
  console.log(Producuts);
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

export default App;
