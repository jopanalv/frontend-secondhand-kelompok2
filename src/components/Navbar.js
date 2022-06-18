import React from 'react';
import { Nav, Button, Navbar, Container } from "react-bootstrap";
import { MDBCol, MDBIcon } from "mdbreact";
import { Image } from 'react-bootstrap';
import Logo from '../assets/images/Rectangle 127.png'
import Cari from '../assets/images/fi_search.png'
import Masuk from '../assets/images/fi_log-in.png'
import { iconName } from "react-icons/fa";


function Navigasi(props) {


  return (
    // <Navbar className="navbar navbar-expand-lg shadow-sm p-3 mb-5 navi">
    //     <Container>
    //         <Navbar.Brand href="#">
    //           <Image className='logo_brand' src={Logo} />
    //         </Navbar.Brand>
    //         <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    //         <Navbar.Collapse id="responsive-navbar-nav">
    //           <div className="input-group md-form form-sm form-1 pl-0">
    //             <input
    //               className="form-control my-0 py-1 pencarian"
    //               type="text"
    //               placeholder="Cari di sini ..."
    //               aria-label="Search"
    //             />
    //               <span className="input-group-text purple lighten-3 px-4" id="basic-text1">
    //               <Image className='input-search' src={Cari} />
    //               </span>
    //           </div>
    //         </Navbar.Collapse>
    //         <Button className="d-flex mx-3 regis" href="/register">
    //           <Image className='log' src={Masuk} />
    //           <p className='reg'>
    //             Masuk
    //           </p>
    //         </Button>
    //     </Container>
    // </Navbar>

    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        className="bg-nav fw-bold navi shadow-sm"
      >
        <Container>
          <Navbar.Brand href="/">
            <Image className='logo_brand' src={Logo} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
            <Button className="d-flex mx-3 regis" href="/register">
               <Image className='log' src={Masuk} />
               <p className='reg'>
                 Masuk
               </p>
             </Button>
            </Nav>
          </Navbar.Collapse>
          <div className="input-group md-form form-sm form-1 pl-0">
            <input
              className="form-control my-0 py-1 pencarian"
              type="text"
              placeholder="Cari di sini ..."
              aria-label="Search"
            />
              <span className="input-group-text purple lighten-3 px-4" id="basic-text1">
                <Image className='input-search' src={Cari} />
              </span>
          </div>
          
        </Container>
      </Navbar>
    </>
  );
}

export default Navigasi;