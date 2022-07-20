import React, { useState, useEffect } from "react";
import box from "../assets/images/fi_box.png";
import chevronRight from "../assets/images/fi_chevron-right.png";
import dollar from "../assets/images/fi_dollar-sign.png";
import love from "../assets/images/Vector.png";
import divider from "../assets/images/divider.png";
import DiminatiNot from "../assets/images/Group 33.png";
// mobile icon kategori
import boxMob from "../assets/images/mobile-fi_box.png";
import dollarMob from "../assets/images/mobile-fi_dollar-sign.png";
import loveMob from "../assets/images/mobile-fi_heart.png";
import { getAllWishlist } from "../redux/action/daftarjualActions";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const Diminati = () => {
  const { getAllWishlistResult, getAllWishlistLoading, getAllWishlistError } =
    useSelector((state) => state.daftarjualReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    //panggil action
    console.log("1. use effect component did mount");
    dispatch(getAllWishlist());
  }, [dispatch]);

  return (
    <div className="Container">
      <div className="kategori">
        <span className="kategori-title">Kategori</span>
        <div className="frame-162">
          <a href="/seller/daftar-jual">
            <div className="frame-160">
              <img src={box} className="kategori-fi_box1" />
              <span className="kategori-txt1">Semua Produk</span>
              <img src={chevronRight} className="kategori-chevron-right1" />
            </div>
          </a>
          <div className="frame-160">
            <img src={love} className="kategori-fi_box1" />
            <span className="kategori-txt1">Diminati</span>
            <img src={chevronRight} className="kategori-chevron-right1" />
          </div>
          <a href="/seller/daftar-jual/terjual">
            <div className="frame-160">
              <img src={dollar} className="kategori-fi_box1" />
              <span className="kategori-txt1">Terjual</span>
              <img src={chevronRight} className="kategori-chevron-right1" />
            </div>
          </a>
        </div>
      </div>

      <div className="kategori-mobile">
        <a href="/seller/daftar-jual">
          <div className="kategori-mobile-frame">
            <img src={boxMob} className="kategori-mobile-icon" />
            <span className="kategori-mobile-text">Produk</span>
          </div>
        </a>

        <div className="kategori-mobile-frame active">
          <img src={dollarMob} className="kategori-mobile-icon" />
          <span className="kategori-mobile-text">Diminati</span>
        </div>
        <a href="/seller/daftar-jual/terjual">
          <div className="kategori-mobile-frame">
            <img src={loveMob} className="kategori-mobile-icon" />
            <span className="kategori-mobile-text">Terjual</span>
          </div>
        </a>
      </div>

      <div className="row daftar-jual">
        {getAllWishlistResult ? (
          getAllWishlistResult.map((wishlist, Product) => {
            return (
              <div className="col-md-3 col-sm-6 py-3 my-3 " key={wishlist.id}>
                <div className="card3 border-1 mx-2">
                  <Link to={`/transaction/detail/` + wishlist.Product.id}>
                    <img
                      src={
                        `http://localhost:5000/upload/images/` +
                        wishlist.Product.image
                      }
                      className="foto-barang"
                    />
                    {/* <img src={barang} className="foto-barang" /> */}
                    <div className="frame-149">
                      <div className="informasi-barang">
                        <div className="nama-barang">{Product.name}</div>
                        <div className="jenis-barang">
                          {wishlist.Product.CategoryId}
                        </div>
                      </div>
                      <div className="harga-barang">
                        {wishlist.Product.price}
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            );
          })
        ) : // Opsi kedua
        getAllWishlistLoading ? (
          <p>Loading ...</p>
        ) : (
          // Opsi ketiga
          <div className="group34">
            {getAllWishlistError ? (
              getAllWishlistError
            ) : (
              <span className="diminati-txt">
                Belum ada produkmu yang diminati nih, sabar ya rejeki nggak
                kemana kok
              </span>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Diminati;
