import React, { useEffect } from "react";
import box from "../assets/images/fi_box.png"
import chevronRight from "../assets/images/fi_chevron-right.png"
import dollar from "../assets/images/fi_dollar-sign.png"
import love from "../assets/images/Vector.png"
import plus from "../assets/images/fi_plus.png"
import Diminati from "../assets/images/Group 33.png"
import barang from "../assets/images/Rectangle23.png"
// mobile icon kategori
import boxMob from "../assets/images/mobile-fi_box.png"
import dollarMob from "../assets/images/mobile-fi_dollar-sign.png"
import loveMob from "../assets/images/mobile-fi_heart.png"
import { useDispatch, useSelector } from "react-redux";
import { getAllDaftarjual } from "../redux/action/daftarjualActions";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Container, Row, Card, Col, Button, Stack, Table } from "react-bootstrap";
import { Product } from "./Product"
import { getAllProduct } from "../redux/action/productActions";

function Jual() {
    // const navigate = useNavigate();
    // // const { getAllDaftarjualResult, getAllDaftarjualLoading, getAllDaftarjualError } = useSelector((state) => state.daftarjualReducer)

    // const dispatch = useDispatch();
  

    // useEffect(() => {
    //   //panggil action
    //   console.log("1. use effect component did mount");
    //   dispatch(getAllDaftarjual());
    // }, [dispatch]);

    const { getAllProductResult, getAllProductLoading, getAllProductError } = useSelector((state) => state.product)
  const data = getAllProductResult;
  const { name, CategoryId } = data;
  const dispatch = useDispatch();
  let productFilter = "";

  useEffect(() => {
    //panggil action
    console.log("1. use effect component did mount");
    dispatch(getAllProduct());
  }, [dispatch]);

    return (

        <Container>
        {getAllProductResult ? (
          getAllProductResult.map((data) => {
            return (
                <>
                    <Row className="justify-content-md-center mt-5 mb-3 ">
        <Col>
          <h4 className="fw-bold">Daftar Jual Saya</h4>
        </Col>
      </Row>
      <Row className="justify-content-md-center mt-5 mb-3 ">
        <Col>
          <Stack direction="horizontal" gap={3} className="infoPenjual">
                <img src={love} alt="" className="image-profile" style={{ width: "48px", height: "48px", flex: "none", borderRadius: "12px" }} />
                <div>
                  <h5 className="my-auto">Nama penjual</h5>
                  <p className="my-auto">Kota</p>
                </div>
            <Button type="button" className="btn-block bg-button-edit ms-auto me-2">
              Edit
            </Button>
          </Stack>
        </Col>
      </Row>
      <Row className="justify-content-md-center mt-5 mb-3 ">
        <Col lg={3} md={12} xs={12}>
          <div className="boxShadow mt-4">
            <h5>Kategori</h5>
            <Table style={{ color: "grey" }}>
              <thead>
                <tr style={{ height: "50px" }} className="kategori " id="filterAll">
                  <td>
                    <i className="bi bi-box me-2"></i>Semua Produk<i className="bi bi-chevron-right float-end"></i>
                  </td>
                </tr>
                <tr style={{ height: "50px" }} className="kategori " id="filterDiminati">
                  <td>
                    <i className="bi bi-heart me-2"></i>Diminati<i className="bi bi-chevron-right float-end"></i>
                  </td>
                </tr>
                <tr style={{ height: "50px" }} className="kategori " id="filterTerjual">
                  <td>
                    <i className="bi bi-currency-dollar me-2"></i>Terjual<i className="bi bi-chevron-right float-end"></i>
                  </td>
                </tr>
              </thead>
            </Table>
          </div>
        </Col>
        <Col lg={9} md={12} xs={12}>
          <Row className="mt-4">
            <Col lg={4} md={4} xs={6} className="pt-4">
              <Link to="/infoproduct">
                <Card>
                  <img src={plus} className="imgAdd" alt="" />
                </Card>
              </Link>
            </Col>
                <Col lg={4} md={4} xs={6} className="pt-4">
                  <Link to={`/seller/detail-produk/`+ data.id} style={{ textDecoration: "none" }}>
                  <Card>
                  <Card.Img
                    className="w-75 align-self-center"
                    variant="top"
                    multiple
                    src={`http://localhost:5000/upload/images/${data.image}`}
                  />
                  <Card.Body className="p-2">
                    <Card.Title className="mb-0">
                      {data.name}
                    </Card.Title>
                    {/* {CategoryId === 1 ? (
                        <Card.Text style={{ fontSize: "12px", height: "5px", color: "black" }}>Hobi</Card.Text>
                      ) : CategoryId === 2 ? (
                        <Card.Text style={{ fontSize: "12px", height: "5px", color: "black" }}>Kendaraan</Card.Text>
                      ) : CategoryId === 3 ? (
                        <Card.Text style={{ fontSize: "12px", height: "5px", color: "black" }}>Baju</Card.Text>
                      ) : CategoryId === 4 ? (
                        <Card.Text style={{ fontSize: "12px", height: "5px", color: "black" }}>Elektronik</Card.Text>
                      ) : CategoryId === 5 ? (
                        <Card.Text style={{ fontSize: "12px", height: "5px", color: "black" }}>Kesehatan</Card.Text>
                      ) : (
                        <div></div>
                      )} */}
                    <Card.Text className="mb-1">{data.price}</Card.Text>
                  </Card.Body>
                </Card>
                  </Link>
                </Col>
          </Row>
        </Col>
      </Row>
                </>
      
        )
          })
          // Opsi kedua
        ) : getAllProductLoading ? (
          <p>Loading ...</p>
        ) : (
          // Opsi ketiga
          <p>{getAllProductError ? getAllProductError : "Data Kosong"}</p>
        )
      }
        </Container>
    );
 
};

export default Jual;