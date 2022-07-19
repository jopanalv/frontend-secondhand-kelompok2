import React from "react";
import Data from "../data/data";
import { Container, Button } from "react-bootstrap";
import { FiSearch } from "react-icons/fi";
import { BsPlus } from "react-icons/bs";
import { getAllProduct } from "../redux/action/productActions";
import { useDispatch, useSelector } from "react-redux";


function Buttons() {
    const dispatch = useDispatch();
    const { products, status } = useSelector((state) => state.product);
  
    React.useEffect(() => {
      dispatch(getAllProduct());
    }, [dispatch]);
  
    const filterAll = (event) => {
      dispatch(getAllProduct());
    };
  
    const filterHobi = (event) => {
      let CategoryId = 1;
  
      dispatch(getAllProduct(CategoryId));
    };
  
    const filterKendaraan = (event) => {
      let CategoryId = 2;
  
      dispatch(getAllProduct(CategoryId));
    };
  
    const filterBaju = (event) => {
      let CategoryId = 3;
  
      dispatch(getAllProduct(CategoryId));
    };
  
    const filterElektronik = (event) => {
      let CategoryId = 4;
  
      dispatch(getAllProduct(CategoryId));
    };
  
    const filterKesehatan = (event) => {
      let CategoryId = 5;
  
      dispatch(getAllProduct(CategoryId));
    };

  return (
    <>
    <Container className="category">
                <h6 className="fw-bold">Telusuri Kategori</h6>
                <div>
                    <div className="d-flex gap-3 button-category">
                        <Button className="d-flex gap-1 px-3" onClick={filterAll} id="filterAll">
                            <FiSearch className="align-self-center" /> Semua
                        </Button>
                        <Button className="d-flex gap-1 px-3">
                            <FiSearch className="align-self-center" onClick={filterHobi} id="filterHobi"/> Hobi
                        </Button>
                        <Button className="d-flex gap-1 px-3">
                            <FiSearch className="align-self-center" onClick={filterKendaraan} id="filterKendaraan"/> Kendaraan
                        </Button>
                        <Button className="d-flex gap-1 px-3">
                            <FiSearch className="align-self-center" onClick={filterBaju} id="filterBaju"/> Baju
                        </Button>
                        <Button className="d-flex gap-1 px-3">
                            <FiSearch className="align-self-center" onClick={filterElektronik} id="filterElektronik"/> Elektronik
                        </Button>
                        <Button className="d-flex gap-1 px-3">
                            <FiSearch className="align-self-center" onClick={filterKesehatan} id="filterKesehatan"/> Kesehatan
                        </Button>
                    </div>
                    
                    <a href="/info-produk"><Button className="d-flex gap-2 px-3 py-2 fixed-bottom button-sell mb-4">
                        
                        <BsPlus
                            className="align-self-center "
                            style={{ fontSize: "24px" }}
                        />{" "}
                        Jual
                        
                    </Button></a>
                </div>

            </Container>
      
    </>
  );
}

export default Buttons;
