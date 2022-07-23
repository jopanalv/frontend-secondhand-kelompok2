import React, { useEffect } from "react";
import { Container, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { categoryList, getAllProduct } from "../redux/action/productActions";
import { Link } from "react-router-dom";
import { IMG_URL } from "../redux/action/api";

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

  const {
    getAllProductResult,
    getAllProductLoading,
    getAllProductError,
    categoryResult,
  } = useSelector((state) => state.product);
  const dispatch = useDispatch();

  const kategori = [];

  // if (categoryResult !== null) {
  //   kategori.push(...categoryResult);
  // }

  useEffect(() => {
    //panggil action
    console.log("1. use effect component did mount");
    dispatch(getAllProduct());
    dispatch(categoryList());
  }, [dispatch]);

  return (
    <>
      <Container className="card-content">
        {/* Opsi pertama */}
        {getAllProductResult ? (
          getAllProductResult.map((Product) => {
            return (
              <div
                className="row justify-content-center category"
                key={Product.id}
              >
                <Link to={`/detail-produk/` + Product.id}>
                  <Card>
                    <Card.Img
                      className="w-75 align-self-center"
                      variant="top"
                      multiple
                      src={`${IMG_URL}`+Product.image}
                      style={image}
                    />
                    <Card.Body className="p-2">
                      <Card.Title className="mb-0" style={title}>
                        {Product.name}
                      </Card.Title>
                      <p className="mb-0" style={accesoris}>
                        {kategori[Product.CategoryId-1] &&
                        kategori[Product.CategoryId-1]
                          ? kategori[Product.CategoryId-1].name
                          : "tidak ada"}
                      </p>
                      <Card.Text className="mb-1">{Product.price}</Card.Text>
                    </Card.Body>
                  </Card>
                </Link>
              </div>
            );
          })
        ) : // Opsi kedua
        getAllProductLoading ? (
          <p>Loading ...</p>
        ) : (
          // Opsi ketiga
          <p>{getAllProductError ? getAllProductError : "Data Kosong"}</p>
        )}
      </Container>
    </>
  );
}

export default Product;
