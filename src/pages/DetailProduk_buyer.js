import React, { useState, useEffect } from 'react'
import { Carousel, Card, Button, Row, Col, Modal, Stack, Form } from "react-bootstrap";
import gambar from "../assets/images/Rectangle 134.png"
import { Image } from 'react-bootstrap';
import penjual from "../assets/images/Rectangle 33.png"
import back from '../assets/images/fi_arrow-left.png'
import Navigasi from '../component/Navigasi';
import Alert from '../component/Alert_produk';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { connect } from "react-redux";
import { Container } from "react-bootstrap";
import { getSelectedProduct } from "../redux/action/productActions";
import "../assets/style2.css"
import { DescriptionProduct } from "../component/DescriptionProduct"
import { addUser } from "../slice/userSlice";
import { addSearch } from "../slice/searchingSlice";

const DetailProduk_buyer = () => {

  const [show, setShow] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [user, setUser] = useState({});
  const [searching, setSearching] = useState("");
  const [negotiation, setNegotiation] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { id } = useParams();
  const { getSelectedProductResult, getSelectedProductLoading, getSelectedProductError } = useSelector((state) => state.product)
  const data = getSelectedProductResult;
  const dispatch = useDispatch();

  useEffect(() => {
    //panggil action
    console.log("1. use effect component did mount");
    dispatch(getSelectedProduct(id));
  }, [dispatch], id);

  console.log(getSelectedProduct(id))

  const handleSearch = () => {
    dispatch(
      addSearch(searching)
    )
  }

  const handleSubmit = (e) => { }

  return (
    <>
      <Navigasi />
      {/* <Alert /> */}
      {getSelectedProductResult !== null ? (
        <Container>
          <Row className='mt-5'>
            <Col md={8}>
              <a href="/"><Image src={back} className='kembali position-absolute' /></a>
              <div>
                <div className="slider-product">
                  <Carousel className="box_image" items={1} margin={10}>
                    <Carousel.Item interval={2000}>
                      <Image src={`http://localhost:5000/upload/images/${data.productImage}`} className="d-block w-100 h-auto detail-gambar" alt="detail_gambar" />
                    </Carousel.Item>
                  </Carousel>
                </div>
              </div>
            </Col>


            <Col md={4}>
              <Card>
                <div className='card-body'>
                  <h5 className="card-title fw-bold">{data.productName}</h5>
                  <p className="card-text">{data.productCategory}</p>
                  <p className="card-text-2 fw-bold">{data.productPrice}</p>
                  <div class="d-flex flex-column gap-3 mt-3">
                    <button class="btn_teks w-100 btn1 text-white" type="button" onClick={handleShow}>Saya Tertarik dan Ingin Nego</button>
                  </div>
                </div>
              </Card>
              <Card className="d-flex flex-row gap-3 px-3 py-3 mt-3 text-black data">
                <Card.Img
                  className="rounded img-responsive center-block img-fluid gbr-seller"
                  src={`http://localhost:5000/upload/images/${data.buyerImage}`}
                />
                <h4 className="card-title fw-bold btn-teks">{data.buyerName}</h4>
                <h6 className="card-text ket">{data.buyerCity}</h6>
              </Card>

            </Col>


            <div className='container3'>
              <button class="btn_teks btn-float text-white" type="button" onClick={handleShow}>Saya Tertarik dan ingin Nego</button>
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
                        src={`http://localhost:5000/upload/images/${data.productImage}`}
                      />
                    </div>
                    <div className="col-8">
                      <div className="card-body-seller py-1">
                        <h4 className="card-title-seller fw-bold btn-teks">{data.productName}</h4>
                        <h6 className="card-text-seller ket">{data.productPrice}</h6>
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

            <Col md={8}>
              <DescriptionProduct description={data.productDescription} />
            </Col>

          </Row>
        </Container>
      ) : getSelectedProductLoading ? (
        <p>Loading ...</p>
      ) : (
        // Opsi ketiga
        <p>{getSelectedProductError ? getSelectedProductError : "Data Kosong"}</p>
      )
      }
    </>
  );
}
export default DetailProduk_buyer;