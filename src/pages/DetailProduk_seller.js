import React, { useState, useEffect } from "react";
import { Image } from "react-bootstrap";
import back from "../assets/images/fi_arrow-left.png";
import Navigasi from "../component/Navbar1";
import "../assets/style2.css";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Container } from "react-bootstrap";
import { getProductSeller, categoryList } from "../redux/action/productActions";
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

  if (categoryResult !== null) {
    kategori.push(...categoryResult);
  }

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
        <div
          className="container1 mx-5 py-3 justify-content-center align-item-center"
          id="produk-seller"
        >
          <a href="/">
            <Image src={back} className="kembali position-absolute" />
          </a>
          {/* <div className='box_image'>
            <Image src={`http://localhost:8000/api/v1/public/files/`} className="detail_gambar" alt="detail_gambar" />
          </div> */}
          <div className="box_image">
            <Image
              src={product.image.preview}
              className="detail_gambar img-fluid"
              alt="detail_gambar"
              style={{ width: "100px" }}
            />
          </div>

          <div className="card-body">
            <div className="card-body-produk px-3">
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
            <div className="card-body-produk mt-3">
              <div className="row">
                <div className="col-2 align-self-center">
                  <Image
                    className="rounded img-responsive center-block img-fluid gbr-seller"
                    src={`${IMG_URL}` + user.data.Profile.image}
                  />
                </div>
                <div className="col-8">
                  <div className="card-body-seller py-1">
                    <h4 className="card-title-seller fw-bold btn-teks">
                      {user.data.Profile.name}
                    </h4>
                    <h6 className="card-text-seller ket">
                      {user.data.Profile.city}
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container2">
          <div className="card-body">
            <div className="desc px-2 py-2 align-item-center">
              <p className="btn_teks fw-bold">Deskripsi</p>
              <p className="card-text">{product.description}</p>
            </div>
          </div>
        </div>
        <div className="container3">
          <button
            class="btn_teks btn1 btn-float text-white"
            type="button"
            onClick={(e) => handleTerbit(e)}
          >
            Terbitkan
          </button>
        </div>
      </Container>
    </>
  );
};
export default DetailProduk_seller;
