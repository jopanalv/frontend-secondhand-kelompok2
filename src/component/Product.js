import React, { useEffect } from "react";
import { Container, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getAllProduct } from "../redux/action/productActions";
import axios from "axios";
import { Link } from "react-router-dom";

function Product() {
  const title = {
    fontSize: "14px",
  };

  const image = {
    width: "91%",
    height: "100px",
    objectFit: "cover",
    margin: "8px",
  };

  // const { user } = useSelector((state) => state.auth);
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


  // if (user.length === 0 && localStorage.getItem("token") === null) {
  //   productFilter = getAllProductResult.rows;
  // } else {
  //   if (getAllProductResult.rows !== undefined) {
  //     if (getAllProductResult.length !== 0 && user.length !== 0) {
  //       productFilter = getAllProductResult.rows.filter((item) => item.user_id !== user.data.id);
  //     }
  //   }
  // }
  return (
    <>
      <Container className="card-content">
        {/* Opsi pertama */}
        {getAllProductResult ? (
          getAllProductResult.map((data) => {
            return (
              <div className="row justify-content-center category" key={data.id}>
                <Link to={`/buyer/detail-produk/` + data.id}>
                <Card>
                  <Card.Img
                    className="w-75 align-self-center"
                    variant="top"
                    multiple
                    src={`http://localhost:5000/upload/images/${data.image}`}
                    style={image}
                  />
                  <Card.Body className="p-2">
                    <Card.Title className="mb-0" style={title}>
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
              </div>
              
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
    </>
  );
}

export default Product;
