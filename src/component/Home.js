import React from 'react';
import { Card, Row, Col } from "react-bootstrap";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

function Home() {

  const options = {
    items: 2,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    center: true,
    loop: true,
    margin: 10,
    nav: true,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
        },
        400: {
            items: 1,
        },
        600: {
            items: 2,
        },
        700: {
            items: 2,
        },
        1000: {
            items: 2,
        }
    },
};

  return (
    <>
    <div className="slider">
                <OwlCarousel
                    className="owl-theme slider-items"
                    {...options}
                >
                    <div className="slider-card">
                        <Card className="card-content home-carousel-1">
                            <Row>
                                <Col xs={8} md={6} className="carousel-text">
                                    <p className="text-1">Bulan Ramadhan Banyak diskon!</p>
                                    <p className="text-2">Diskon Hingga</p>
                                    <p className="text-3">60%</p>
                                </Col>
                                <Col xs={4} md={2} className="carousel-1">
                                    <img src="/images/carousel-1.png" alt="" />
                                </Col>
                                <Col xs={6} md={4} className="carousel-2">
                                    <img src="/images/carousel-2.png" alt="" />
                                </Col>
                            </Row>
                        </Card>
                    </div>
                    <div className="slider-card second-slide slider-2">
                        <Card className="card-content home-carousel-2">
                            <Row>
                                <Col xs={8} md={6} className="carousel-text">
                                    <p className="text-1">Bulan Ramadhan Banyak diskon!</p>
                                    <p className="text-2">Diskon Hingga</p>
                                    <p className="text-3">60%</p>
                                </Col>
                                <Col xs={4} md={2} className="carousel-1">
                                    <img src="/images/carousel-1.png" alt="" />
                                </Col>
                                <Col xs={6} md={4} className="carousel-2">
                                    <img src="/images/carousel-3.png" alt="" />
                                </Col>
                            </Row>
                        </Card>
                    </div>
                    <div className="slider-card third-slide slider-2">
                        <Card className="card-content home-carousel-3">
                            <Row>
                                <Col xs={8} md={6} className="carousel-text">
                                    <p className="text-1">Bulan Ramadhan Banyak diskon!</p>
                                    <p className="text-2">Diskon Hingga</p>
                                    <p className="text-3">60%</p>
                                </Col>
                                <Col xs={4} md={2} className="carousel-1">
                                    <img src="/images/carousel-1.png" alt="" />
                                </Col>
                                <Col xs={6} md={4} className="carousel-2">
                                    <img src="/images/carousel-4.png" alt="" />
                                </Col>
                            </Row>
                        </Card>
                    </div>
                </OwlCarousel>
            </div>
  </>
  );
}

export default Home;