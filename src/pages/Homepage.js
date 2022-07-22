import Navigasi from '../component/Navbar1'
import React, { useState } from 'react';
import Buttons from "../component/Button";
import Home from '../component/Home';
import { Product } from "../component"
import "../assets/style2.css"
import { useSelector } from 'react-redux';

export default function Homepage() {

  const {user} = useSelector(state => state.login)

  return (
    <div className='App'>
      <Navigasi />
      <Home />
      {user?.data.role === 'seller' ? (<Buttons />) : null}
      <Product />
    </div>
  )
}
