import React from "react";
import { Container } from "react-bootstrap";

const Product = ({ item }) => {
  return (
    <>
    <Container>
      <div className="container-fluid">
        <div className="row justify-content-center category">
          {item.map((list) => {
            return (
            <div class="card product-card">
              <div class="card-body product-detail">
                <div
                  className="border-0"
                  key={list.id}
                >
                    <img src={list.image}
                    alt="produk_1"
                    className="img-fluid mb-3 product_image" />
                    <h4 className="name mb-2">{list.name}</h4>
                    <p className="type mb-3">{list.category}</p>
                    <h4 className="price mb-4">Rp. {list.price}</h4>
                </div>
              </div>
            </div>
            );
          })}
        </div>
      </div>
    </Container>
    </>
  );
};


export default Product;
