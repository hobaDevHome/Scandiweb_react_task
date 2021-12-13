import "./App.css";

import { Producuts } from "../src/components/data/Dummy";

import Header from "../src/components/UI/Header/Header";
import ProductsPage from "../src/components/screens/PLP/ProductsPage";

function App() {
  console.log(Producuts);
  return (
    <div className="App">
      <Header />
      <ProductsPage />
    </div>
  );
}

export default App;
