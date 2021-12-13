import './App.css';

import { Producuts } from '../src/components/data/Dummy';

import Header from '../src/components/UI/Header/Header';
import ProductDescription from '../src/components/screens/PDP/ProductDescription';

function App() {
  console.log(Producuts);
  return (
    <div className="App">
      <Header />
      <ProductDescription />
    </div>
  );
}

export default App;
