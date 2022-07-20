import React, { useEffect, useState } from "react";
import { Image } from "react-bootstrap";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Navbar from "../component/Navbar2";
import icon_back from "../assets/images/fi_arrow-left.png";
import "../assets/style.css";
import { useDispatch, useSelector } from "react-redux";
import {
  acceptTransaction,
  getTransDetail,
  cancelTransaction,
  successTransaction,
} from "../redux/action/transactionAction";
import { Link, useNavigate, useParams } from "react-router-dom";
import { IMG_URL } from "../redux/action/api";

export default function InfoPenawaran() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  const [status, setStatus] = useState("");
  const [accept, setAccept] = useState(false);

  useEffect(() => {
    dispatch(getTransDetail(id));
  }, [dispatch, id]);

  const { getTransactionResult, getTransactionLoading, getTransactionError } =
    useSelector((state) => state.transaction);

  const data = getTransactionResult;

  const handleAccept = (e) => {
    e.preventDefault();
    dispatch(acceptTransaction(id));
    setAccept(true);
  };

  const handleCancel = (e) => {
    e.preventDefault();
    dispatch(cancelTransaction(id));
  };

  const handleSuccess = (e) => {
    e.preventDefault();
    dispatch(successTransaction(id));
  };

  const handleStatus = (e) => {
    setStatus(e);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (status === "success") {
      handleSuccess(e);
      navigate("../seller/daftar-jual", { replace: true });
    } else {
      handleCancel(e);
      navigate("../seller/daftar-jual", { replace: true });
    }
  };

  return (
    <>
      {getTransactionResult !== null ? (
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
                        src={`${IMG_URL}`+data.buyerImage}
                        style={{ width: 50, height: 50 }}
                      />
                    </div>
                    <div className="card-body">
                      <h4 className="card-title h5 h4-sm fw-bold">
                        {data.buyerName}
                      </h4>
                      <h6 className="card-text">{data.buyerCity}</h6>
                    </div>
                  </div>
                </div>

                <h4 className="card-title fw-bold mt-3">
                  Daftar Produkmu yang Ditawar
                </h4>

                <div className="card px-3 py-4">
                  <div className="d-flex justify-content-start">
                    <div className="mx-3 align-self-start">
                      <Image
                        className="img-fluid"
                        width={100}
                        src={`${IMG_URL}`+data.productImage}
                      />
                    </div>
                    <div className="">
                      <div className="card-body p-0 px-3">
                        <h6 className="card-text">Penawaran Produk</h6>
                        <h4 className="card-title h5 h4-sm" id="namaProduk">
                          {data.productName}
                        </h4>
                        <h4 className="card-title h5 h4-sm" id="hargaProduk">
                          Rp {data.productPrice}
                        </h4>
                        <h4 className="card-title h5 h4-sm" id="hargaTawar">
                          Ditawar Rp {data.offer_price}
                        </h4>
                      </div>
                    </div>
                    <div className="ms-auto">
                      <div className="card-body p-0 px-3">
                        <h6 className="card-text text-end">{data.date}</h6>
                      </div>
                    </div>
                  </div>
                  <div className="justify-content-md-end justify-content-xs-between d-flex ">
                    {accept || data.transStatus === "accept" ? (
                      <div>
                        <button
                          className="btn btn-outline-primary btn-action px-0 me-2"
                          type="button"
                          id="preview"
                          data-bs-toggle="modal"
                          data-bs-target="#modalStatus"
                          style={{ width: "158px" }}
                        >
                          Status
                        </button>
                        <button
                          className="btn btn-primary btn-action"
                          type="button"
                          id="terbitkan"
                          style={{ width: "158px" }}
                        >
                          <a
                            href={`https://api.whatsapp.com/send/?phone=${data.buyerHp}`}
                            style={{
                              color: "white",
                              textDecoration: "none",
                            }}
                            target="_blank"
                            rel="noreferrer"
                          >
                            Hubungi via
                            <FontAwesomeIcon
                              icon={faWhatsapp}
                              className="ms-2"
                            />
                          </a>
                        </button>
                      </div>
                    ) : (
                      <div>
                        <button
                          className="btn btn-outline-primary btn-action px-0 me-2"
                          type="button"
                          id="preview"
                          style={{ width: "158px" }}
                          onClick={(e) => handleCancel(e)}
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
                          onClick={(e) => handleAccept(e)}
                        >
                          Terima
                        </button>
                      </div>
                    )}

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
                                    src={`${IMG_URL}`+data.buyerImage}
                                  />
                                </div>
                                <div class="col-9">
                                  <div className="card-body">
                                    <h4 className="card-title h5 h4-sm fw-bold">
                                      {data.buyerName}
                                    </h4>
                                    <h6 className="card-text">
                                      {data.buyerCity}
                                    </h6>
                                  </div>
                                </div>
                              </div>
                              <div class="row justify-content-center mt-2">
                                <div class="col-3 align-self-center">
                                  <Image
                                    className="rounded img-responsive center-block d-block mx-auto img-fluid"
                                    src={`${IMG_URL}`+data.productImage}
                                  />
                                </div>
                                <div class="col-9">
                                  <div className="card-body p-0 px-3">
                                    <h4
                                      className="card-title h5 h4-sm"
                                      id="namaProduk"
                                    >
                                      {data.productName}
                                    </h4>
                                    <h4
                                      className="card-title h5 h4-sm text-decoration-line-through"
                                      id="hargaProduk"
                                    >
                                      Rp {data.productPrice}
                                    </h4>
                                    <h4
                                      className="card-title h5 h4-sm"
                                      id="hargaTawar"
                                    >
                                      Ditawar Rp {data.offer_price}
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
                                href={`https://api.whatsapp.com/send/?phone=${data.buyerHp}`}
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

                    <div
                      className="modal fade"
                      id="modalStatus"
                      tabindex="-1"
                      aria-labelledby="exampleModalLabel1"
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
                          <div className="modal-body mx-4">
                            <h4 className="fw-bold my-3">
                              Perbarui status penjualan produkmu
                            </h4>
                            <div className="form-check my-4">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="exampleRadios"
                                id="exampleRadios1"
                                value="success"
                                onChange={(e) => handleStatus(e.target.value)}
                              />
                              <label
                                className="form-check-label"
                                for="exampleRadios1"
                              >
                                <h4 className="fw-bold">Berhasil terjual</h4>
                                <p className="text-secondary">
                                  Kamu telah sepakat menjual produk ini kepada
                                  pembeli
                                </p>
                              </label>
                            </div>
                            <div className="form-check mb-4">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="exampleRadios"
                                id="exampleRadios1"
                                value="cancel"
                                onChange={(e) => handleStatus(e.target.value)}
                              />
                              <label
                                className="form-check-label"
                                for="exampleRadios1"
                              >
                                <h4 className="fw-bold">Batalkan transaksi</h4>
                                <p className="text-secondary">
                                  Kamu membatalkan transaksi produk ini dengan
                                  pembeli
                                </p>
                              </label>
                            </div>
                          </div>

                          <div className="modal-footer">
                            <button
                              className="btn btn-primary mx-3 "
                              id="modal-button"
                              onClick={(e) => handleSubmit(e)}
                            >
                              {" "}
                              Kirim
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
      ) : (
        <p>`Loading...`</p>
      )}
    </>
  );
}
