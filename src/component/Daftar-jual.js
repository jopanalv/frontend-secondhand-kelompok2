import React, { useEffect } from "react";
import box from "../assets/images/fi_box.png";
import chevronRight from "../assets/images/fi_chevron-right.png";
import dollar from "../assets/images/fi_dollar-sign.png";
import love from "../assets/images/Vector.png";
import plus from "../assets/images/fi_plus.png";
// mobile icon kategori
import boxMob from "../assets/images/mobile-fi_box.png";
import dollarMob from "../assets/images/mobile-fi_dollar-sign.png";
import loveMob from "../assets/images/mobile-fi_heart.png";
import { useDispatch, useSelector } from "react-redux";
import { getAllDaftarjual } from "../redux/action/daftarjualActions";
import { Link } from "react-router-dom";
import { IMG_URL } from "../redux/action/api";
import { categoryList, getAllProduct } from "../redux/action/productActions";

function Jual() {
  const {
    getAllDaftarjualResult,
    getAllDaftarjualLoading,
    getAllDaftarjualError,
  } = useSelector((state) => state.daftarjualReducer);
  const { categoryResult } = useSelector((state) => state.product);

  const dispatch = useDispatch();

  const kategori = [];

  if (categoryResult !== null) {
      kategori.push(...categoryResult);
  }

  useEffect(() => {
    //panggil action
    console.log("1. use effect component did mount");
    dispatch(getAllDaftarjual());
    dispatch(categoryList());
  }, [dispatch]);

  return (
    <div className="Container">
      <div className="kategori">
        <span className="kategori-title">Kategori</span>
        <div className="frame-162">
          <div className="frame-160">
            <img src={box} className="kategori-fi_box1" />
            <span className="kategori-txt1">Semua Produk</span>
            <img src={chevronRight} className="kategori-chevron-right1" />
          </div>
          <a href="/seller/daftar-jual/diminati">
            <div className="frame-160">
              <img src={love} className="kategori-fi_box1" />
              <span className="kategori-txt1">Diminati</span>
              <img src={chevronRight} className="kategori-chevron-right1" />
            </div>
          </a>
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
        <div className="kategori-mobile-frame active">
          <img src={boxMob} className="kategori-mobile-icon" />
          <span className="kategori-mobile-text">Produk</span>
        </div>
        <a href="/seller/daftar-jual/diminati">
          <div className="kategori-mobile-frame">
            <img src={dollarMob} className="kategori-mobile-icon" />
            <span className="kategori-mobile-text">Diminati</span>
          </div>
        </a>
        <a href="/seller/daftar-jual/terjual">
          <div className="kategori-mobile-frame">
            <img src={loveMob} className="kategori-mobile-icon" />
            <span className="kategori-mobile-text">Terjual</span>
          </div>
        </a>
      </div>

      <div className="daftar-jual">
        <Link to={`/info-produk`}>
          <div className="card1">
            <div className="group3">
              <img src={plus} className="fi-plus" />
              <span className="group3-txt">Tambah Produk</span>
            </div>
          </div>
        </Link>

        <div className="frame-165 row justify-content-left">
          {/* Opsi pertama */}
          {getAllDaftarjualResult ? (
            getAllDaftarjualResult.map((Product) => {
              return (
                <div
                  className="col-md-3 col-sm-6 py-3 my-3 card3 border-1"
                  key={Product.id}
                >
                  <Link to={`/detail-produk/${Product.id}`}>
                    <img
                      src={`${IMG_URL}` + Product.image}
                      className="foto-barang"
                    />
                    {/* <img src={barang} className="foto-barang" /> */}
                    <div className="frame-149">
                      <div className="informasi-barang">
                        <div className="nama-barang">{Product.name}</div>
                        <div className="jenis-barang">
                          {kategori[Product.CategoryId - 1] &&
                                                    kategori[Product.CategoryId - 1]
                                                    ? kategori[Product.CategoryId - 1].name
                                                    : "tidak ada"}
                        </div>
                      </div>
                      <div className="harga-barang">{Product.price}</div>
                    </div>
                  </Link>
                </div>
              );
            })
          ) : // Opsi kedua
          getAllDaftarjualLoading ? (
            <p>Loading ...</p>
          ) : (
            // Opsi ketiga
            <p>
              {getAllDaftarjualError ? getAllDaftarjualError : "Data Kosong"}
            </p>
          )}
        </div>
        {/* </div> */}
      </div>
    </div>
  );
}

export default Jual;
