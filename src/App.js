import "./App.css";

import { Producuts } from "../src/components/data/Dummy";

import Header from "../src/components/UI/Header/Header";

import Cart from "./components/screens/Cart/Cart";

function App() {
  console.log(Producuts);
  return (
    <div className="App">
      <Header />
      <Cart />
    </div>
  );
}

export default App;
