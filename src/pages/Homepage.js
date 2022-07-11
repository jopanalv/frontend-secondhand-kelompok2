import React, { useState, useEffect } from 'react'
import Navigasi from '../component/Navbar1'
import Data from "../data/data";
import Buttons from "../component/Button";
import Home from '../component/Home';
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../redux/action/productActions";
import { Product } from "../component"
import "../assets/style2.css"

export default function Homepage() {

  // const [item, setItem] = useState(Data);

  // const menuItems = [...new Set(Data.map((Val) => Val.category))];

  // const filterItem = (curcat) => {
  //   const newItem = Data.filter((newVal) => {
  //     return newVal.category === curcat;
  //   });
  //   setItem(newItem);
  // };

  // const Products = useSelector((state) => state.allProduct.Products);
  // const dispatch = useDispatch();
  // const fetchProducts = async () => {
  //   const response = await axios
  //   .get("http://localhost:8000/api/v1/products/")
  //   .catch((err) => {
  //     console.log("Err: ", err);
  //   });
  //   dispatch(setProducts(response.data));
  // };

//   const fetchProducts = async () => {
//     try {
//         const response = await axios.get(
//             `http://localhost:8000/api/v1/products/`
//         )

//         const payloadData = await response.data;
//         dispatch(setProducts(payloadData));
//     } catch (err) {
//         console.log(err);
//     }
// }

  // useEffect(() => {
  //   fetchProducts();
  // }, []);

  // console.log(Products);

  return (
    <div className='App'>
      <Navigasi />
      <Home />
      <Buttons />
      <Product />
    </div>
  )
}
