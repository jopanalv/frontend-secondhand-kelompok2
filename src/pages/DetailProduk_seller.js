import React, { useState, useEffect } from "react";
import { Image } from "react-bootstrap";
import back from "../assets/images/fi_arrow-left.png";
import Navigasi from "../component/Navbar1";
import "../assets/style2.css";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Carousel, Card, Button, Row, Col, Container } from "react-bootstrap";
import { getProductSeller, categoryList } from "../redux/action/productActions";
import { DescriptionProduct } from "../component/DescriptionProduct"
import "../assets/style2.css";
import { addSearch } from "../slice/searchingSlice";
import { IMG_URL } from "../redux/action/api";
import { addProduct } from "../redux/action/addProduct";

const DetailProduk_seller = () => {
  const product = JSON.parse(localStorage.getItem("product"));
  const user = JSON.parse(localStorage.getItem("user"));

  const [show, setShow] = useState(false);
  const [searching, setSearching] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { id } = useParams();
  const dispatch = useDispatch();

  const handleSearch = () => {
    dispatch(addSearch(searching));
  };

  const handleTerbit = async (e) => {
    e.preventDefault();
    // const formData = new FormData();
    // formData.append("name", product.name);
    // formData.append("price", product.price);
    // formData.append("CategoryId", product.category);
    // formData.append("description", product.description);
    // formData.append("image", product.image);
    // dispatch(addProduct(formData));
    window.close();
  };

  const handleEdit = () => {
    // navigate('/info-produk')
    localStorage.removeItem("product");
    window.close();
  };

  const { categoryResult } = useSelector((state) => state.product);

  const kategori = [];

  // if (categoryResult !== null) {
  //   kategori.push(...categoryResult);
  // }

  useEffect(() => {
    handleSearch();

    //panggil action
    console.log("1. use effect component did mount");
    dispatch(getProductSeller(id));
    dispatch(categoryList());
  }, [dispatch]);

  return (
    <>
      <Navigasi />
      <Container>
      <Row className='mt-5'>
      <Col md={8}>
          <a href="/"><Image src={back} className='kembali position-absolute' /></a>
          <div>
          <div className="slider-product">
              <Carousel className="box_image" items={1} margin={10}>
                    <Carousel.Item interval={2000}>
                    <Image src={product.image.preview} className="detail_gambar" alt="detail_gambar" />                    
                    </Carousel.Item>
              </Carousel>
          </div>
          </div>
          </Col>

      <Col md={4}>
        <Card>
        <div className='card-body'>
            <h5 className="card-title fw-bold">{product.name}</h5>
              <p className="card-text">
                {kategori[product.category - 1] &&
                kategori[product.category - 1]
                  ? kategori[product.category - 1].name
                  : "tidak ada"}
              </p>
              <p className="card-text-2 fw-bold">{product.price}</p>
              <div class="d-grid gap-2">
                <button
                  class="btn_teks btn1 text-white"
                  type="button"
                  onClick={(e) => handleTerbit(e)}
                >
                  Terbitkan
                </button>
                <button
                  class="btn_teks btn2"
                  type="button"
                  onClick={() => handleEdit()}
                >
                  Edit
                </button>
              </div>

          </div>
        </Card>
          
        <Card className="d-flex flex-row gap-3 px-3 py-3 mt-3 text-black data">
                <Card.Img
                  className="rounded img-responsive center-block img-fluid gbr-seller"
                  src={`${IMG_URL}` + user.data.Profile.image}
                />
                <h4 className="card-title-seller fw-bold btn-teks">{user.data.Profile.name}</h4>
                    <h6 className="card-text-seller ket">{user.data.Profile.city}</h6>
              </Card>
        </Col>
        <div className='container3 justify-content-center align-items-center'>
              <button class="btn_teks btn-float text-white" type="button" onClick={(e) => handleTerbit(e)}>Terbitkan</button>
            </div>
          
            <Col md={8}>
              <DescriptionProduct description={product.description} />
            </Col>
        </Row>
      </Container>
    </>
  );
};
export default DetailProduk_seller;
