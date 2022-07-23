import React from "react";
import Data from "../data/data";
import { Container, Button } from "react-bootstrap";
import { FiSearch } from "react-icons/fi";
import { BsPlus } from "react-icons/bs";
import { useSelector } from "react-redux";

function Buttons() {
    const { user } = useSelector((state) => state.login);

  return (
    <>
    <Container className="category">
                <h6 className="fw-bold">Telusuri Kategori</h6>
                <div>
                    <div className="d-flex gap-3 button-category">
                        <Button className="d-flex gap-1 px-3" >
                            <FiSearch className="align-self-center" /> Semua
                        </Button>
                        <Button className="d-flex gap-1 px-3">
                            <FiSearch className="align-self-center" /> Hobi
                        </Button>
                        <Button className="d-flex gap-1 px-3">
                            <FiSearch className="align-self-center" /> Kendaraan
                        </Button>
                        <Button className="d-flex gap-1 px-3">
                            <FiSearch className="align-self-center" /> Baju
                        </Button>
                        <Button className="d-flex gap-1 px-3">
                            <FiSearch className="align-self-center" /> Elektronik
                        </Button>
                        <Button className="d-flex gap-1 px-3">
                            <FiSearch className="align-self-center" /> Kesehatan
                        </Button>
                    </div>
                    {user?.data.role === "seller" ? 
                    <a href="/info-produk"><Button className="d-flex gap-2 px-3 py-2 fixed-bottom button-sell mb-4">
                        
                        <BsPlus
                            className="align-self-center "
                            style={{ fontSize: "24px" }}
                        />{" "}
                        Jual
                        
                    </Button></a> : null
                    }
                </div>

            </Container>
      
    </>
  );
}

export default Buttons;
