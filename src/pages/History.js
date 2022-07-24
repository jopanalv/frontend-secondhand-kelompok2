import Navbar from "../component/Navbar1";
import gambar2 from "../assets/images/Group 33.png";
import gambar from "../assets/images/car01.min.jpg";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllHistory } from "../redux/action/historyAction";
import { categoryList } from "../redux/action/productActions";
import { IMG_URL } from "../redux/action/api";

export default function History() {
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

  const statusSuccess = {
    fontSize: "14px",
    color: "green",
  };

  const statusCancel = {
    fontSize: "14px",
    color: "red",
  };

  const { user } = useSelector((state) => state.login);

  const { getAllHistoryResult, getAllHistoryLoading, getAllHistoryError } =
    useSelector((state) => state.history);
  const { categoryResult } = useSelector((state) => state.product);

  const kategori = [];

  // if (categoryResult !== null) {
  //   kategori.push(...categoryResult);
  // }

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllHistory());
    dispatch(categoryList());
  }, [dispatch]);
  console.log(getAllHistoryResult);

  return (
    <div>
      <Navbar />
      <section className="container">
        <h2
          className="text-center mt-3 mb-3 fw-bold"
          style={{ fontSize: "14px" }}
        >
          History
        </h2>

        <div className="row">
          {getAllHistoryResult ? (
            getAllHistoryResult.length === 0 ? (
              <div className="d-flex justify-content-center p-3">
                <div className="text-center">
                  <img src={gambar2} alt="" className="img-fluid mb-3" />
                  <p>Tidak ada transaksi yang dilakukan</p>
                </div>
              </div>
            ) : (
              getAllHistoryResult.map((item, index) => {
                return (
                  <div className="col-lg-3 col-md-6 col-sm-6">
                    <Link className="mx-2" to={""}>
                      <Card>
                        <Card.Img
                          className="w-75 align-self-center"
                          variant="top"
                          multiple
                          src={`${IMG_URL}` + item.Product.image}
                          style={image}
                        />

                        <Card.Body className="p-2">
                          <Card.Title className="mb-0" style={title}>
                            {item.Product.name}
                          </Card.Title>

                          <p className="mb-0" style={accesoris}>
                            {/* {kategori[item.Product.CategoryId - 1] &&
                            kategori[item.Product.CategoryId - 1]
                              ? kategori[item.Product.CategoryId - 1].name
                              : "tidak ada"} */}
                            KATEGORI
                          </p>
                          <Card.Text className="mb-1">
                            Rp. {item.Product.price}
                          </Card.Text>
                          <Card.Title
                            className="mb-0"
                            style={
                              item.status === "success"
                                ? statusSuccess
                                : statusCancel
                            }
                          >
                            Transaksi : {item.status}
                          </Card.Title>
                        </Card.Body>
                      </Card>
                    </Link>
                  </div>
                );
              })
            )
          ) : getAllHistoryLoading ? (
            <h3>Loading ...</h3>
          ) : (
            <p>{getAllHistoryError ? getAllHistoryError : "Error"}</p>
          )}
        </div>
      </section>
    </div>
  );
}
