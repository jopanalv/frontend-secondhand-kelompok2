import Navbar from "../component/Navbar1";
import gambar from "../assets/images/car01.min.jpg";
import gambar2 from "../assets/images/Group 33.png";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  deleteWishlist,
  getListWishlistBuyer,
} from "../redux/action/wishlistAction";
import { categoryList } from "../redux/action/productActions";
import { IMG_URL } from "../redux/action/api";

export default function Wishlist() {
  const title = {
    fontSize: "14px",
  };

  const image = {
    width: "91%",
    height: "100px",
    objectFit: "cover",
    margin: "8px",
    marginLeft: "70px",
  };

  const accesoris = {
    fontSize: "11px",
    opacity: "0.5",
  };

  const { user } = useSelector((state) => state.login);

  const {
    getListWishlistBuyerResult,
    getListWishlistBuyerLoading,
    getListWishlistBuyerError,
    deleteWishlistResult,
  } = useSelector((state) => state.wishlist);
  const { categoryResult } = useSelector((state) => state.product);

  const kategori = [];

  if (categoryResult !== null) {
    kategori.push(...categoryResult);
  }

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getListWishlistBuyer());
    dispatch(categoryList());
  }, [dispatch]);

  useEffect(() => {
    if (deleteWishlistResult) {
      dispatch(getListWishlistBuyer());
    }
  }, [deleteWishlistResult, dispatch]);

  return (
    <div>
      <Navbar />
      <section className="container">
        <h2
          className="text-center mt-3 mb-3 fw-bold"
          style={{ fontSize: "14px" }}
        >
          Wishlist
        </h2>
        <p className="text-center mb-4">
          Klik Logo Hati Jika Ingin Menghapus Wishlist
        </p>

        <div className="row">
          {getListWishlistBuyerResult ? (
            getListWishlistBuyerResult.data.length === 0 ? (
              <div className="d-flex justify-content-center p-3">
                <div className="text-center">
                  <img src={gambar2} alt="" className="img-fluid mb-3" />
                  <p>Produk tidak ditemukan</p>
                </div>
              </div>
            ) : (
              getListWishlistBuyerResult.data.map((item, index) => {
                return (
                  <div className="col-lg-3 col-md-6 col-sm-6 mb-3 ">
                    <Card>
                      <button
                        style={{
                          textDecoration: "none",
                          color: "purple",
                          backgroundColor: "transparent",
                          border: "none",
                        }}
                        onClick={() => dispatch(deleteWishlist(item.id))}
                        data-bs-toggle="tooltip"
                        data-bs-placement="bottom"
                        title="Delete Wihslist"
                        className="d-flex flex-row-reverse mt-4 me-2"
                      >
                        <i className="fa-solid fa-heart fa-xl"></i>
                      </button>
                      <Link
                        className="mx-2"
                        to={`/detail-produk/${item.Product.id}`}
                      >
                        <Card.Img
                          className="w-50 align-items-center "
                          variant="top"
                          multiple
                          src={`${IMG_URL}` + item.Product.image}
                          style={image}
                        />
                        <div className="d-flex justify-content-around mx-4">
                          <Card.Body className="p-2">
                            <Card.Title className="mb-0" style={title}>
                              {item.Product.name}
                            </Card.Title>

                            <p className="mb-0" style={accesoris}>
                              {kategori[item.Product.CategoryId - 1] &&
                                kategori[item.Product.CategoryId - 1]
                                ? kategori[item.Product.CategoryId - 1].name
                                : "tidak ada"}
                            </p>
                            <Card.Text className="mb-1">
                              Rp. {item.Product.price}
                            </Card.Text>
                          </Card.Body>
                        </div>
                      </Link>
                    </Card>
                  </div>
                );
              })
            )
          ) : getListWishlistBuyerLoading ? (
            <h3>Loading ...</h3>
          ) : (
            <p>
              {getListWishlistBuyerError ? getListWishlistBuyerError : "Error"}
            </p>
          )}
        </div>
      </section>
    </div>
  );
}
