import React, { useState, useEffect } from "react";
import box from "../assets/images/fi_box.png";
import chevronRight from "../assets/images/fi_chevron-right.png";
import dollar from "../assets/images/fi_dollar-sign.png";
import love from "../assets/images/Vector.png";
// mobile icon kategori
import boxMob from "../assets/images/mobile-fi_box.png";
import dollarMob from "../assets/images/mobile-fi_dollar-sign.png";
import loveMob from "../assets/images/mobile-fi_heart.png";
import gambar2 from "../assets/images/Group 33.png";
import { getAllWishlist } from "../redux/action/daftarjualActions";
import { categoryList, getAllProduct } from "../redux/action/productActions";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { IMG_URL } from "../redux/action/api";

const Diminati = () => {
  const { getAllWishlistResult, getAllWishlistLoading, getAllWishlistError } =
    useSelector((state) => state.daftarjualReducer);
  const { categoryResult } = useSelector((state) => state.product);

  const dispatch = useDispatch();

  const kategori = [];

  if (categoryResult !== null) {
    kategori.push(...categoryResult);
  }

  useEffect(() => {
    //panggil action
    console.log("1. use effect component did mount");
    dispatch(getAllWishlist());
    dispatch(categoryList());
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

      <div className="daftar-jual">
        <div className="frame-165 row justify-content-left">
          {getAllWishlistResult ? (
            getAllWishlistResult.length === 0 ? (
              <div className="d-flex justify-content-center p-3">
                <div className="text-center">
                  <img src={gambar2} alt="" className="img-fluid mb-3" />
                  <p>
                    Belum ada produkmu yang diminati nih, sabar ya rejeki nggak
                    kemana kok
                  </p>
                </div>
              </div>
            ) : (
              getAllWishlistResult.map((wishlist, Product) => {
                return (
                  <div
                    className="col-md-3 col-sm-6 py-3 my-3 card3 border-1"
                    key={wishlist.id}
                  >
                    <Link to={`/detail-produk/${wishlist.Product.id}`}>
                      <img
                        src={`${IMG_URL}` + wishlist.Product.image}
                        className="foto-barang"
                      />
                      {/* <img src={barang} className="foto-barang" /> */}
                      <div className="frame-149">
                        <div className="informasi-barang">
                          <div className="nama-barang">
                            {wishlist.Product.name}
                          </div>
                          <div className="jenis-barang">
                            {kategori[wishlist.Product.CategoryId - 1] &&
                          kategori[wishlist.Product.CategoryId - 1]
                            ? kategori[wishlist.Product.CategoryId - 1].name
                            : "tidak ada"}
                          </div>
                        </div>
                        <div className="harga-barang">
                          Rp {wishlist.Product.price}
                        </div>
                      </div>
                    </Link>
                  </div>
                );
              })
            )
          ) : getAllWishlistLoading ? (
            <p>Loading ...</p>
          ) : (
            // Opsi ketiga
            <p>{getAllWishlistError ? getAllWishlistError : "Error"}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Diminati;
