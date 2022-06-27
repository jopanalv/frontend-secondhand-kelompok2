import React, { useState } from 'react';
import { Nav, Navbar, Container, NavLink } from "react-bootstrap";
import { Image } from 'react-bootstrap';
import Logo from '../assets/images/Rectangle 127.png'
import Cari from '../assets/images/fi_search.png'
import Masuk from '../assets/images/fi_log-in.png'
import menu from '../assets/images/fi_menu.png'


function Navigasi(props) {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar)

  return (
      <div
        className="navi shadow-sm"
      >
        <Container>
          <Navbar.Brand href="/">
            <Image className='logo_brand' src={Logo} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
            </Nav>
          </Navbar.Collapse> 
          <div className="input-group md-form form-sm form-1 pl-0">
            <input
              className="form-control my-0 py-1 pencarian"
              type="text"
              placeholder="Cari di sini ..."
              aria-label="Search"
            />
              <span className="input-group-text purple lighten-3 px-4">
                <Image className='input-search' src={Cari} />
              </span>
          </div>
          <a href="/register"><button className="regis">
               <Image className='log' src={Masuk} />
               <p className='reg text-white'>
                 Masuk
               </p>
          </button></a>
          <div className="frame-menu-nav">
                <img src={menu} className='menu-nav' />
            </div> 
        </Container>
      </div>
  );
}

export default Navigasi;