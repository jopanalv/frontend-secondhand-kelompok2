import React, { useEffect } from "react";
import { Container, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getAllProduct } from "../redux/action/productActions";
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

  const accesoris = {
    fontSize: "11px",
    opacity: "0.5",
  };

  const { getAllProductResult, getAllProductLoading, getAllProductError } = useSelector((state) => state.product)
  const dispatch = useDispatch();

  useEffect(() => {
    //panggil action
    console.log("1. use effect component did mount");
    dispatch(getAllProduct());
  }, [dispatch]);

  return (
    <>
      <Container className="card-content">
        {/* Opsi pertama */}
        {getAllProductResult ? (
          getAllProductResult.map((Product) => {
            return (
              <div className="row justify-content-center category" key={Product.id}>
                <Link to={`/buyer/detail-produk/` + Product.id}>
                <Card>
                  <Card.Img
                    className="w-75 align-self-center"
                    variant="top"
                    multiple
                    src={`http://localhost:8000/api/v1/public/files/${Product.image[0]}`}
                    style={image}
                  />
                  <Card.Body className="p-2">
                    <Card.Title className="mb-0" style={title}>
                      {Product.name}
                    </Card.Title>
                    <p className="mb-0" style={accesoris}>
                      {Product.CategoryId}
                    </p>
                    <Card.Text className="mb-1">{Product.price}</Card.Text>
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
