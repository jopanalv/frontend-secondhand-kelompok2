import React, { useEffect } from "react";
import box from "../assets/images/fi_box.png";
import chevronRight from "../assets/images/fi_chevron-right.png";
import dollar from "../assets/images/fi_dollar-sign.png";
import love from "../assets/images/Vector.png";
// mobile icon kategori
import boxMob from "../assets/images/mobile-fi_box.png";
import dollarMob from "../assets/images/mobile-fi_dollar-sign.png";
import loveMob from "../assets/images/mobile-fi_heart.png";

import { useDispatch, useSelector } from "react-redux";
import { getAllTerjual } from "../redux/action/daftarjualActions";
import { Link } from "react-router-dom";
import { IMG_URL } from "../redux/action/api";
import { categoryList, getAllProduct } from "../redux/action/productActions";

function Jual() {
  const { getAllTerjualResult, getAllTerjualLoading, getAllTerjualError } =
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
    dispatch(getAllTerjual());
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
          <a href="/seller/daftar-jual/diminati">
            <div className="frame-160">
              <img src={love} className="kategori-fi_box1" />
              <a className="kategori-txt1">Diminati</a>
              <img src={chevronRight} className="kategori-chevron-right1" />
            </div>
          </a>
          <div className="frame-160">
            <img src={dollar} className="kategori-fi_box1" />
            <span className="kategori-txt1">Terjual</span>
            <img src={chevronRight} className="kategori-chevron-right1" />
          </div>
        </div>
      </div>

      <div className="kategori-mobile">
        <a href="/seller/daftar-jual">
          <div className="kategori-mobile-frame">
            <img src={boxMob} className="kategori-mobile-icon" />
            <span className="kategori-mobile-text">Produk</span>
          </div>
        </a>
        <a href="/seller/daftar-jual/diminati">
          <div className="kategori-mobile-frame">
            <img src={dollarMob} className="kategori-mobile-icon" />
            <span className="kategori-mobile-text">Diminati</span>
          </div>
        </a>
        <div className="kategori-mobile-frame active">
          <img src={loveMob} className="kategori-mobile-icon" />
          <span className="kategori-mobile-text">Terjual</span>
        </div>
      </div>

      <div className="daftar-jual">
        <div className="frame-165 row justify-content-left">
          {/* Opsi pertama */}
          {getAllTerjualResult ? (
            getAllTerjualResult.map((transaction, Product) => {
              return (
                <div
                  className="col-md-3 col-sm-6 py-3 my-3 card3 border-1"
                  key={transaction.id}
                >
                  <Link to={`/transaction/detail/` + transaction.id}>
                    <img
                      src={`${IMG_URL}` + transaction.Product.image}
                      className="foto-barang"
                    />
                    {/* <img src={barang} className="foto-barang" /> */}
                    <div className="frame-149">
                      <div className="informasi-barang">
                        <div className="nama-barang">
                          {transaction.Product.name}
                        </div>
                        <div className="jenis-barang">
                          {kategori[transaction.Product.CategoryId - 1] &&
                          kategori[transaction.Product.CategoryId - 1]
                            ? kategori[transaction.Product.CategoryId - 1].name
                            : "tidak ada"}
                        </div>
                      </div>
                      <div className="harga-barang">
                        Ditawar : Rp {transaction.offer_price}
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })
          ) : // Opsi kedua
          getAllTerjualLoading ? (
            <p>Loading ...</p>
          ) : (
            // Opsi ketiga
            <div className="group34">
              {getAllTerjualError ? (
                getAllTerjualError
              ) : (
                <span className="diminati-txt">
                  Belum ada produk yang terjual
                </span>
              )}
            </div>
            // <p>{getAllTerjualError ? getAllTerjualError : "Data Kosong"}</p>
          )}
        </div>
        {/* </div> */}
      </div>
    </div>
  );
}

export default Jual;
