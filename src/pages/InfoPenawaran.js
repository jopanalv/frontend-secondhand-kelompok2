import React from "react";
import { Image } from "react-bootstrap";
import Navbar from "./Navbar";
import icon_back from "../assets/images/fi_arrow-left.png";
import data from "../data/InfoPenawar.json";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function InfoPenawaran() {
  return (
    <>
      <Navbar judul="Info Penawar" />
      <div className="container mt-5" id="info-penawaran">
        <div className="row justify-content-center">
          <div className="col-1 back">
            <Image src={icon_back} />
          </div>
          <div className="col-11">
            <div className="card px-3 mx-auto">
              <div className="row justify-content-start py-3">
                <div className="col-2 align-self-center">
                  <Image
                    className="rounded img-responsive center-block  mx-auto img-fluid"
                    src={data.image}
                  />
                </div>
                <div className="col-8">
                  <div className="card-body">
                    <h4 className="card-title h5 h4-sm fw-bold">{data.name}</h4>
                    <h6 className="card-text">{data.city}</h6>
                  </div>
                </div>
              </div>
            </div>

            <h4 className="card-title fw-bold mt-3">
              Daftar Produkmu yang Ditawar
            </h4>

            <div className="card px-3 py-4">
              <div className="row justify-content-start">
                <div className="col-2 align-self-start">
                  <Image
                    className="rounded img-responsive center-block d-block mx-auto img-fluid"
                    src={data.tawaran.productImage}
                  />
                </div>
                <div className="col-4">
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
                <div className="col-6">
                  <div className="card-body p-0 px-3">
                    <h6 className="card-text text-end">{data.tawaran.date}</h6>
                  </div>
                </div>
              </div>
              <div className="justify-content-end d-flex ms-5">
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
                          className="card mx-auto"
                          style={{
                            width: "27rem",
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
                                src={data.image}
                                style={{ width: "90%" }}
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
                                src={data.tawaran.productImage}
                                style={{ width: "90%" }}
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
                        <div className="mx-auto p-0">
                          <button
                            className="btn btn-primary"
                            type="button"
                            id="modal-button"
                          >
                            Hubungi via Whatsapp
                            <FontAwesomeIcon
                              icon={faWhatsapp}
                              className="ms-2"
                            />
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
      </div>
    </>
  );
}