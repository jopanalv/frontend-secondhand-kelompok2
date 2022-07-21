import Navbar from "../component/Navbar1";
import gambar from "../assets/images/car01.min.jpg";
import gambar2 from "../assets/images/Group 33.png";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Wishlist() {
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

        <div className="d-flex justify-content-center null-illustration p-5">
          <div>
            <img src={gambar2} alt="" className="img-fluid mb-3" />
            <p>Produk tidak ditemukan</p>
          </div>
        </div>
        <div className="d-flex justify-content-center category">
          <Link className="mx-2" to={""}>
            <Card>
              <Card.Img
                className="w-75 align-self-center"
                variant="top"
                multiple
                src={gambar}
                style={image}
              />
              <Card.Body className="p-2">
                <Card.Title className="mb-0" style={title}>
                  Mobil
                </Card.Title>
                <p className="mb-0" style={accesoris}>
                  Kendaraan
                </p>
                <Card.Text className="mb-1">100000</Card.Text>
              </Card.Body>
            </Card>
          </Link>

          <Link className="mx-2" to={""}>
            <Card>
              <Card.Img
                className="w-75 align-self-center"
                variant="top"
                multiple
                src={gambar}
                style={image}
              />
              <Card.Body className="p-2">
                <Card.Title className="mb-0" style={title}>
                  Mobil
                </Card.Title>
                <p className="mb-0" style={accesoris}>
                  Kendaraan
                </p>
                <Card.Text className="mb-1">100000</Card.Text>
              </Card.Body>
            </Card>
          </Link>

          <Link className="mx-2" to={""}>
            <Card>
              <Card.Img
                className="w-75 align-self-center"
                variant="top"
                multiple
                src={gambar}
                style={image}
              />
              <Card.Body className="p-2">
                <Card.Title className="mb-0" style={title}>
                  Mobil
                </Card.Title>
                <p className="mb-0" style={accesoris}>
                  Kendaraan
                </p>
                <Card.Text className="mb-1">100000</Card.Text>
              </Card.Body>
            </Card>
          </Link>
        </div>
      </section>
    </div>
  );
}
