import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import { Image } from 'react-bootstrap'
import Hero from '../assets/images/Rectangle 136.png'
import Gift from '../assets/images/gift.png'
import { Button, Container, Row, Col } from "react-bootstrap";
import Data from "../data/data";
import Buttons from "../components/Button";
import Product from '../components/Product';
import Home from '../components/Home';

export default function Homepage() {

  const [item, setItem] = useState(Data);

  const menuItems = [...new Set(Data.map((Val) => Val.category))];

  const filterItem = (curcat) => {
    const newItem = Data.filter((newVal) => {
      return newVal.category === curcat;
    });
    setItem(newItem);
  };

  return (
    <div className='App'>
      <Navbar />
      <Home />
      <Buttons
            filterItem={filterItem}
            setItem={setItem}
            menuItems={menuItems}
          />
      <Product item={item} />
    </div>
  )
}
