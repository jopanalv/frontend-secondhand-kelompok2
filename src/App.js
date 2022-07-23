import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";
import "bootstrap/dist/js/bootstrap.bundle";
import "bootstrap-select/dist/css/bootstrap-select.min.css";
import "bootstrap-select/dist/js/bootstrap-select.min";
import "./assets/style.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { NotifikasiMobile } from "./pages/NotifikasiMobile";
import { DafJual } from "./pages/DafJual";
import { DafJualDiminati } from "./pages/DafJual-diminati";
import { DafJualTerjual } from "./pages/DafJual-terjual";
import InfoProduk from "./pages/InfoProduk";
import Profile from "./pages/Profile";
import InfoPenawaran from "./pages/InfoPenawaran";
import Homepage from "./pages/Homepage";
import DetailProduk_buyer from "./pages/DetailProduk_buyer";
import DetailProduk_seller from "./pages/DetailProduk_seller";
import EditProduk from "./pages/EditProduk";
import Wishlist from "./pages/Wishlist";
import History from "./pages/History";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/detail-produk/:id"
            element={<DetailProduk_buyer />}
          />
          {/* <Route
            path="/seller/detail-produk/:id"
            element={<DetailProduk_seller />}
          /> */}
          <Route path="/seller/preview" element={<DetailProduk_seller />} />
          <Route path="/seller/daftar-jual" element={<DafJual />} />
          <Route
            path="/seller/daftar-jual/diminati"
            element={<DafJualDiminati />}
          />
          <Route
            path="/seller/daftar-jual/terjual"
            element={<DafJualTerjual />}
          />
          <Route path="/seller/edit-products/:id" element={<EditProduk />} />
          <Route path="/seller/notifikasi" element={<NotifikasiMobile />} />
          <Route path="/info-profile" element={<Profile />} />
          <Route path="/info-produk" element={<InfoProduk />} />
          <Route path="/info-penawaran/:id" element={<InfoPenawaran />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/history" element={<History />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
