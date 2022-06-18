import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/style.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Filter from './components/Filter';
import React, { useState } from "react";
import Data from "./data/data";
import Buttons from "./components/Button";
import Product from './components/Product';

const App = () => {
  const [item, setItem] = useState(Data);

  const menuItems = [...new Set(Data.map((Val) => Val.category))];

  const filterItem = (curcat) => {
    const newItem = Data.filter((newVal) => {
      return newVal.category === curcat;
    });
    setItem(newItem);
  };

  return (
    <div className="App">
      <Navbar />
      <Home />
      <Buttons
            filterItem={filterItem}
            setItem={setItem}
            menuItems={menuItems}
          />
      <Product item={item} />
    </div>
  );
}

export default App;