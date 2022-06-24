import React from 'react';
import { Image } from 'react-bootstrap';
import Hero from '../assets/images/Rectangle 136.png'
import Gift from '../assets/images/gift.png'
import { Button, Container, Row, Col } from "react-bootstrap";
import { MDBCol, MDBRow, MDBContainer } from 'mdb-react-ui-kit';

function Home() {
  return (
    <>
    <div className='container-fluid' id="home">
      <div className="row content">
        <div className='col-sm-2'>
          <div className='side_left'></div>
        </div>
        <div className='col'>
          <div className='hero'>
            <div className='container-fluid'>
                <div className="row">
                  <Col sm={7} md={7} lg={7} className="main-section-left pb-3 pt-5 px-4">
                  <Image src={Gift} className="img-fluid hadiah pt-2" alt="gift" />
                    <h2>
                      <strong>Bulan Ramadhan Banyak diskon!</strong>
                    </h2>
                    <p>
                      Diskon Hingga
                    </p>
                    <p className='diskon'>
                      60%
                    </p>
                  </Col>
                  <Col sm={5} md={5} lg={5} className="main-section-right">
                    <Image src={Hero} className="img-fluid gbr_hero" alt="hero" />
                  </Col>
                </div>
              </div>
              </div>
        </div>
        <div className='col-sm-2'>
          <div className='side_right'></div>
        </div>
      </div>
  </div>
  </>
  );
}

export default Home;