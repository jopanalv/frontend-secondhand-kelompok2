import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Navbar from '../component/Navbar1';
import LogedNavbar from '../component/Navbar';
import Data from "../data/data";
import Buttons from "../component/Button";
import Product from '../component/Product';
import Home from '../component/Home';

export default function Homepage() {

  const [item, setItem] = useState(Data);
  const auth = useSelector(state => state.login)

  const menuItems = [...new Set(Data.map((Val) => Val.category))];

  const filterItem = (curcat) => {
    const newItem = Data.filter((newVal) => {
      return newVal.category === curcat;
    });
    setItem(newItem);
  };

  return (
    <div className='App'>
      {
        auth.isAuthenticated ? <LogedNavbar/> : <Navbar/>
      }
      <Home />
      <Buttons
            filterItem={filterItem}
            setItem={setItem}
            menuItems={menuItems}
          />
      <Product item={item} />
      <a href="/info-produk"><button class="btn-float1 btn_teks text-white" type="button">+ Jual</button></a>
    </div>
  )
}
