import Navigasi from "../component/Navbar1";
import React, { useState } from "react";
import Buttons from "../component/Button";
import Home from "../component/Home";
import { Product } from "../component";
import "../assets/style2.css";

export default function Homepage() {
  // const auth = useSelector(state => state.login)

  return (
    <div className="App">
      <Navigasi />
      <Home />
      <Buttons />
      <Product />
    </div>
  );
}
