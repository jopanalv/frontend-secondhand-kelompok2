import Navigasi from "../component/Navbar1";
import React, { useState } from "react";
import Buttons from "../component/Button";
import Home from "../component/Home";
import { Product } from "../component";
import "../assets/style2.css";

export default function Homepage() {

  return (
    <div className="App">
      <Navigasi />
      <Home />
      {/* {user.data.role === 'seller' ? (<Buttons />) : null} */}
      <Buttons />
      <Product />
    </div>
  );
}
