import React from 'react';
import { Image } from 'react-bootstrap';
import Logo from '../assets/images/Rectangle 127.png'

function Header() {
  return (
    <nav className="navbar navbar-expand-lg shadow-sm p-3 mb-5 bg-body rounded">
        <div className="container-fluid">
            <a className="navbar-brand col-4" id="logo" style={{ paddingLeft : "100px"}}>
            <Image src={Logo} />
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse col-8">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <a aria-current="page" id="title">Lengkapi Info Akun</a>
            </ul>
            </div>
        </div>
    </nav>
  );
}

export default Header;