import React, { useEffect, useState } from "react";
import Data from "../data/data";
import { Container, Button, Row, Col } from "react-bootstrap";
import { FiSearch } from "react-icons/fi";
import { BsPlus } from "react-icons/bs";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Buttons(handleData) {
    const { user } = useSelector((state) => state.login);
    const navigate = useNavigate();

    const [width, setWidth] = useState(window.innerWidth);

    const detectSize = () => {
        setWidth(width.innerWidth);
    };
    useEffect(() => {
        window.addEventListener("resize", detectSize);

        return () => {
            window.removeEventListener("resize", detectSize);
        };
    }, [width]);
  return (
    <>
    <Container className="category">
                <h6 className="fw-bold">Telusuri Kategori</h6>
                <div>
                    <div className="d-flex gap-3 button-category">
                        <Button className="d-flex gap-1 px-3" onClick={() => handleData("all")}>
                            <FiSearch className="align-self-center" /> Semua
                        </Button>
                        <Button className="d-flex gap-1 px-3" onClick={() => handleData(1)}>
                            <FiSearch className="align-self-center" /> Hobi
                        </Button>
                        <Button className="d-flex gap-1 px-3" onClick={() => handleData(2)}>
                            <FiSearch className="align-self-center" /> Kendaraan
                        </Button>
                        <Button className="d-flex gap-1 px-3" onClick={() => handleData(3)}>
                            <FiSearch className="align-self-center" /> Baju
                        </Button>
                        <Button className="d-flex gap-1 px-3" onClick={() => handleData(4)}>
                            <FiSearch className="align-self-center" /> Elektronik
                        </Button>
                        <Button className="d-flex gap-1 px-3" onClick={() => handleData(5)}>
                            <FiSearch className="align-self-center" /> Kesehatan
                        </Button>
                    </div>
                    {user?.data.role === "seller" ? 
                    <Row>
                        <Col md="auto" xs="auto">
                        <Button className="d-flex gap-2 px-3 py-2 fixed-bottom button-sell mb-4" onClick={() => navigate("/info-produk")}>
                        <BsPlus
                            className="align-self-center "
                            style={{ fontSize: "24px" }}
                        />{" "}
                        Jual
                    </Button>
                    </Col>
                    </Row>
                     : null
                    }
                </div>

            </Container>
      
    </>
  );
}

export default Buttons;
