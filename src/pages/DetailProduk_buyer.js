import React, { useState, useEffect } from "react";
import { Carousel, Card, Button, Row, Col, Modal, Stack, Form } from "react-bootstrap";
import { Image } from "react-bootstrap";
import back from "../assets/images/fi_arrow-left.png";
import Navigasi from "../component/Navigasi";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Container } from "react-bootstrap";
import "../assets/style2.css"
import { DescriptionProduct } from "../component/DescriptionProduct"
import {
  getSelectedProduct,
  buyProduct,
  categoryList,
} from "../redux/action/productActions";
import { addSearch } from "../slice/searchingSlice";
import { addWishlist } from "../redux/action/wishlistAction";
import { IMG_URL } from "../redux/action/api";
import toast from "react-simple-toasts";

const DetailProduk_buyer = () => {

  const [show, setShow] = useState(false);
  const [offer, setOffer] = useState(0);
  const [searching, setSearching] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSearch = () => {
    dispatch(addSearch(searching));
  };

  const handleBuy = (e) => {
    e.preventDefault();
    dispatch(buyProduct({ id, offer }));
    handleClose();
  };

  const handleWishlist = (e) => {
    e.preventDefault();
    dispatch(addWishlist(id));
  };

  const handleEditProduct = () => {
    navigate(`/seller/edit-products/${id}`, { replace: true });
  };

  const { categoryResult } = useSelector((state) => state.product);
  const { getSelectedProductResult, getSelectedProductLoading, getSelectedProductError } = useSelector((state) => state.product)
  const { user } = useSelector((state) => state.login);
  const productInfo = getSelectedProductResult;

  // console.log(productInfo);

  const kategori = [];

  // if (categoryResult !== null) {
  //   kategori.push(...categoryResult);
  // }

  useEffect(() => {
    handleSearch();
    //panggil action
    console.log("1. use effect component did mount");
    dispatch(getSelectedProduct(id));
    // dispatch(categoryList());
  }, [dispatch, id]);

  console.log(getSelectedProduct(id))

  return (
    <>
      <Navigasi />
      {getSelectedProductResult !== null ? (
        <Container>
          <Row className='mt-5' key={productInfo.id}>
            <Col md={8}>
              <a href="/"><Image src={back} className='kembali position-absolute' /></a>
              <div>
                <div className="slider-product">
                  <Carousel className="box_image" items={1} margin={10}>
                    <Carousel.Item interval={2000}>
                      <Image src={`${IMG_URL}` + productInfo.image} className="d-block w-100 h-auto detail-gambar" alt="detail_gambar" />
                    </Carousel.Item>
                  </Carousel>
                </div>
              </div>
            </Col>


            <Col md={4}>
              <Card>
                <div className='card-body'>
                  <h5 className="card-title fw-bold">{productInfo.name}</h5>
                  <p className="card-text">
                    {kategori[productInfo.CategoryId - 1] &&
                kategori[productInfo.CategoryId - 1]
                  ? kategori[productInfo.CategoryId - 1].name
                  : "tidak ada"}
              </p>
              <p className="card-text-2 fw-bold">Rp {productInfo.price}</p>
              <div class="d-grid gap-2">
                {productInfo.sellerId === user?.data.id ? (
                  <button
                    class="btn_teks btn1 text-white"
                    type="button"
                    onClick={() => handleEditProduct()}
                  >
                    Edit
                  </button>
                ) : user?.data.role === "seller" ? (
                  <>
                    <button
                      class="btn_teks btn1 btn-secondary text-white"
                      type="button"
                      onClick={handleShow}
                      disabled
                    >
                      Saya Tertarik dan Ingin Nego
                    </button>
                    <button
                      class="btn_teks btn-secondary btn1 text-white"
                      type="button"
                      onClick={(e) => handleWishlist(e)}
                      disabled
                    >
                      Tambahkan ke Wishlist
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      class="btn_teks btn1 text-white"
                      type="button"
                      onClick={handleShow}
                    >
                      Saya Tertarik dan Ingin Nego
                    </button>
                    <button
                      class="btn_teks btn1 text-white"
                      type="button"
                      onClick={(e) => handleWishlist(e)}
                    >
                      Tambahkan ke Wishlist
                    </button>
                  </>
                )}
                  </div>
                </div>
              </Card>
              <Card className="d-flex flex-row gap-3 px-3 py-3 mt-3 text-black data">
                <Card.Img
                  className="rounded img-responsive center-block img-fluid gbr-seller"
                  src={`${IMG_URL}` + productInfo.sellerImage}
                />
                <h4 className="card-title fw-bold btn-teks">{productInfo.sellerName}</h4>
                <h6 className="card-text ket">{productInfo.sellerCity}</h6>
              </Card>

            </Col>


            <div className='container3 justify-content-center align-items-center'>
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
                        src={`${IMG_URL}` + productInfo.image}
                      />
                    </div>
                    <div className="col-8">
                      <div className="card-body-seller py-1">
                        <h4 className="card-title-seller fw-bold btn-teks">{productInfo.name}</h4>
                        <h6 className="card-text-seller ket">Rp {productInfo.price}</h6>
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
              <DescriptionProduct description={productInfo.description} />
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