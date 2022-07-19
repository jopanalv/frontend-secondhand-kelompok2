import React, { useState, useEffect } from 'react'
import gambar from "../assets/images/Rectangle 134.png"
import { Image } from 'react-bootstrap';
import penjual from "../assets/images/Rectangle 33.png"
import back from '../assets/images/fi_arrow-left.png'
import Navigasi from '../component/Navigasi';
import "../assets/style2.css"
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { connect } from "react-redux";
import { Container } from "react-bootstrap";
import { getProductSeller } from "../redux/action/productActions";
import "../assets/style2.css"
import { addUser } from "../slice/userSlice";
import { addSearch } from "../slice/searchingSlice";
import { getSelectedProduct } from "../redux/action/productActions";
import { Carousel, Card, Button, Row, Col, Modal, Stack, Form } from "react-bootstrap";
import { DescriptionProduct } from "../component/DescriptionProduct"


const DetailProduk_seller = () => {

  const [show, setShow] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [user, setUser] = useState({});
  const [searching, setSearching] = useState("");
  const [negotiation, setNegotiation] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { id } = useParams();
  const { getProductSellerResult, getProductSellerLoading, getProductSellerError } = useSelector((state) => state.productReducer)
  const data = getProductSellerResult;
  const dispatch = useDispatch();

  const handleSearch = () => {
    dispatch(
        addSearch(searching)
    )
    }

    useEffect(() => {          
    //panggil action
    console.log("1. use effect component did mount");
    dispatch(getProductSeller(id));
  }, [dispatch], id);

  console.log(getSelectedProduct(id))

  return (
    <>
      <Navigasi />
      {getProductSellerResult !== null (
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
                  <button class="btn_teks btn1 text-white" type="button"><a href="/seller/daftar-jual">Terbitkan</a></button>
                  <button class="btn-teks btn2" type="button"><a href="/info-produk">Edit</a></button>                   </div>
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
          <button class="btn_teks btn1 btn-float text-white" type="button"><a href="/seller/daftar-jual">Terbitkan</a></button>          
          </div>

          <Col md={8}>
              <DescriptionProduct description={data.productDescription} />
            </Col>

          </Row>
              </Container>
)
}
</>
  );
}
export default DetailProduk_seller;