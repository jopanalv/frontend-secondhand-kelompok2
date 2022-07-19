import React from "react";
import "../assets/style.css";
import Navigasi from "../component/Navbar1";
import Notif from "../component/Notif";
import Alert from "../component/Alert";
import Penjual from "../component/Penjual";
import Jual from "../component/Daftar-jual";

export const DafJual = () => {
  return (
    <div>
      <Navigasi />
      <Notif />
      <Alert />
      <Penjual />
      <Jual />
    </div>
  );
};
