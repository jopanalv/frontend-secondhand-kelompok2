import React, { useState, useEffect } from 'react'
import { Modal, Form } from "react-bootstrap";
import gambar from "../assets/images/Rectangle 134.png"
import { Image } from 'react-bootstrap';
import penjual from "../assets/images/Rectangle 33.png"
import back from '../assets/images/fi_arrow-left.png'
import Navigasi from '../component/Navigasi';
import Alert from '../component/Alert_produk';


function DetailProduk_buyer() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    if (isLoading) {
        setLoading(false);
    }
  }, [isLoading]);

  const handleClick = () => setLoading(true);
  
  return (
    <>
        <Navigasi />
        {/* <Alert /> */}
        <div className="container1 mx-5 py-3 justify-content-center align-item-center" id="produk-seller">
        <a href="/"><Image src={back} className='kembali position-absolute' /></a>
            <div className='box_image'>
              <Image src={gambar} className="detail_gambar" alt="detail_gambar" />
            </div>
            
            <div className='card-body'>
              <div className="card-body-produk px-3">
                <h5 className="card-title fw-bold">Apple Watch Series 3</h5>
                <p className="card-text">Aksesoris</p>
                <p className="card-text-2 fw-bold">Rp 250000</p>
                <div class="d-grid gap-2">
                  <button class="btn_teks btn1 text-white" type="button" onClick={handleShow}>Saya Tertarik dan Ingin Nego</button>
                </div>
              </div>
              <div className="card-body-produk mt-3">
              <div className="row">
                <div className="col-2 align-self-center">
                  <Image
                    className="rounded img-responsive center-block img-fluid gbr-seller"
                    src={penjual}
                  />
                </div>
                <div className="col-8">
                  <div className="card-body-seller py-1">
                    <h4 className="card-title-seller fw-bold btn-teks">Nama Penjual</h4>
                    <h6 className="card-text-seller ket">Kota</h6>
                  </div>
                </div>
              </div>
            </div>
            </div>
        </div>
        <div className='container2'>
          <div className='card-body'>
            <div className ='desc px-2 py-2 align-item-center'>
            <p className='btn_teks fw-bold'>
                  Deskripsi
                </p>
                <p className='card-text'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div> 
          </div>
            </div>
          <div className='container3'>
          <button class="btn1 btn_teks btn-float text-white" type="button" onClick={handleShow}>Saya Tertarik dan ingin Nego</button>
          </div>

          <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Masukkan Harga Tawarmu</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <p className="card-text">
                          Segera hubungi pembeli melalui whatsapp untuk
                          transaksi selanjutnya
            </p>
            <div className="card2 py-1 px-2 mb-3 mt-0">
              <div className="row">
                <div className="col-2 align-self-center">
                  <Image
                    className="rounded center-block gbr-seller"
                    src={gambar}
                  />
                </div>
                <div className="col-8">
                  <div className="card-body-seller py-1">
                    <h4 className="card-title-seller fw-bold btn-teks">Apple Watch Series 3</h4>
                    <h6 className="card-text-seller ket">Rp 250000</h6>
                  </div>
                </div>
              </div>
            </div>
          <Form className="form-modal">
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Harga Tawar</Form.Label>
              <Form.Control
                placeholder="Rp 0.0"
                autoFocus
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
        <a href="/notifikasi"><button className='btn-kirim btn-teks justify-content-center align-items-center text-white' onClick={handleClose}>
            Kirim
          </button>
        </a>
        </Modal.Footer>
      </Modal>
    </>
  )
}
export default DetailProduk_buyer;