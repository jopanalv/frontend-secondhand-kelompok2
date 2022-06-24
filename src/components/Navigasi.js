import React from 'react';
import { Image } from 'react-bootstrap';
import { Nav, Button, Navbar, Container, NavLink } from "react-bootstrap";
import Logo from '../assets/images/Rectangle 127.png'
import Cari from '../assets/images/fi_search.png'
import list from '../assets/images/fi_list.png'
import bell from '../assets/images/fi_bell.png'
import user from '../assets/images/fi_user.png'
import menu from '../assets/images/fi_menu.png'

const Navigasi = () => {
    return (
        <div
        className="navbar navi2 shadow-sm"
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
          <div className="frame-158"> 
                    <img src={list} />
                    {/* <a href="/notifikasi">    */}
                        <img src={bell} />
                    {/* </a>  */}
                    <img src={user} /> 
            </div> 
            <div className="frame-menu">
                <img src={menu} className='menu' />
            </div> 
        </Container>
      </div>
    );
 
};

export default Navigasi;