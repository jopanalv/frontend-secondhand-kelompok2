import Navigasi from '../component/Navbar1'
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Navbar from '../component/Navbar1';
import LogedNavbar from '../component/Navbar';
import Data from "../data/data";
import Buttons from "../component/Button";
import Home from '../component/Home';
import axios from "axios";
import { setProducts } from "../redux/action/productActions";
import { Product } from "../component"
import "../assets/style2.css"

export default function Homepage() {
  const [item, setItem] = useState(Data);
  const auth = useSelector(state => state.login)

  return (
    <div className='App'>
      <Navigasi />
      {
        auth.isAuthenticated ? <LogedNavbar/> : <Navbar/>
      }
      <Home />
      <Buttons />
      <Product />
    </div>
  )
}
