import React from "react";
import { Image } from "react-bootstrap";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Navbar from "../component/Navbar2";
import icon_back from "../assets/images/fi_arrow-left.png";
import pembeli from "../assets/images/Rectangle 33.png";
import produk from "../assets/images/produk.png";
import data from "../data/InfoPenawar.json";
import "../assets/style.css";
import { Link } from "@mui/material";

export default function InfoPenawaran() {
  return (
    <>
      <Navbar judul="Info Penawaran" />
      <div className="container mt-5" id="info-penawaran">
        <div className="row justify-content-center">
          <div className="col-lg-1 col-sm-12 mb-1">
            <Link to="/">
              <Image src={icon_back} />
            </Link>
          </div>
          <div className="col-lg-11 col-sm-12">
            <div className="card px-3 mx-auto">
              <div className="d-flex justify-content-start py-3">
                <div className="align-self-center">
                  <Image
                    className="rounded mx-3 img-fluid"
                    src={pembeli}
                    style={{ width: 50, height: 50 }}
                  />
                </div>
                <div className="card-body">
                  <h4 className="card-title h5 h4-sm fw-bold">{data.name}</h4>
                  <h6 className="card-text">{data.city}</h6>
                </div>
              </div>
            </div>

            <h4 className="card-title fw-bold mt-3">
              Daftar Produkmu yang Ditawar
            </h4>

            <div className="card px-3 py-4">
              <div className="d-flex justify-content-start">
                <div className="mx-3 align-self-start">
                  <Image className=" img-fluid" src={produk} />
                </div>
                <div className="">
                  <div className="card-body p-0 px-3">
                    <h6 className="card-text">Penawaran Produk</h6>
                    <h4 className="card-title h5 h4-sm" id="namaProduk">
                      {data.tawaran.product}
                    </h4>
                    <h4 className="card-title h5 h4-sm" id="hargaProduk">
                      Rp {data.tawaran.price}
                    </h4>
                    <h4 className="card-title h5 h4-sm" id="hargaTawar">
                      Ditawar Rp {data.tawaran.bid}
                    </h4>
                  </div>
                </div>
                <div className="ms-auto">
                  <div className="card-body p-0 px-3">
                    <h6 className="card-text text-end">{data.tawaran.date}</h6>
                  </div>
                </div>
              </div>
              <div className="justify-content-md-end justify-content-xs-between d-flex ">
                <button
                  className="btn btn-outline-primary btn-action px-0 me-2"
                  type="button"
                  id="preview"
                  style={{ width: "158px" }}
                >
                  Tolak
                </button>
                <button
                  className="btn btn-primary btn-action"
                  type="button"
                  id="terbitkan"
                  style={{ width: "158px" }}
                  data-bs-toggle="modal"
                  data-bs-target="#modalPenawaran"
                >
                  Terima
                </button>

                <div
                  className="modal fade"
                  id="modalPenawaran"
                  tabindex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div className="modal-body">
                        <h4 className="fw-bold text-center">
                          Yeay kamu berhasil mendapat harga yang sesuai!
                        </h4>
                        <h4 className="text-center">
                          Segera hubungi pembeli melalui whatsapp untuk
                          transaksi selanjutnya
                        </h4>
                        <div
                          className="card mx-3"
                          style={{
                            background: "#EEEEEE",
                            borderRadius: "16px",
                          }}
                        >
                          <h4 className="fw-bold text-center mt-1">
                            Product Match
                          </h4>
                          <div class="row justify-content-center">
                            <div class="col-3 align-self-center">
                              <Image
                                className="rounded img-responsive center-block d-block mx-auto img-fluid"
                                src={pembeli}
                              />
                            </div>
                            <div class="col-9">
                              <div className="card-body">
                                <h4 className="card-title h5 h4-sm fw-bold">
                                  {data.name}
                                </h4>
                                <h6 className="card-text">{data.city}</h6>
                              </div>
                            </div>
                          </div>
                          <div class="row justify-content-center mt-2">
                            <div class="col-3 align-self-center">
                              <Image
                                className="rounded img-responsive center-block d-block mx-auto img-fluid"
                                src={produk}
                              />
                            </div>
                            <div class="col-9">
                              <div className="card-body p-0 px-3">
                                <h4
                                  className="card-title h5 h4-sm"
                                  id="namaProduk"
                                >
                                  {data.tawaran.product}
                                </h4>
                                <h4
                                  className="card-title h5 h4-sm text-decoration-line-through"
                                  id="hargaProduk"
                                >
                                  Rp {data.tawaran.price}
                                </h4>
                                <h4
                                  className="card-title h5 h4-sm"
                                  id="hargaTawar"
                                >
                                  Ditawar Rp {data.tawaran.bid}
                                </h4>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="modal-footer">
                        <button
                          className="btn btn-primary mx-3 "
                          id="modal-button"
                        >
                          <a
                            href="https://wa.me/6285815470517"
                            style={{
                              color: "white",
                              textDecoration: "none",
                            }}
                          >
                            Hubungi via Whatsapp
                            <FontAwesomeIcon
                              icon={faWhatsapp}
                              className="ms-2"
                            />
                          </a>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
