import React from 'react';
import { Image } from 'react-bootstrap';
import { Button, Container, Row, Col } from "react-bootstrap";
import { MDBCol, MDBRow, MDBContainer } from 'mdb-react-ui-kit';
import Cari from '../assets/images/fi_search.png'
// import Data from "./data";



function Filter(ite) {
  return (
  <>
    <Container>
          <div className='kata_2'>
        Telusuri Kategori
      </div>

      
      <div className="relative flex item-center tab-category">
        <div id='slider' className='w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide d-flex'>
        <a href="/api/product" class="<%= isActive !== '/api/product/search?product_category=hobi' && isActive !== '/api/product/search?product_category=kendaraan' && isActive !== '/api/product/search?product_category=baju' && isActive !== /api/product/search?product_category=elektronik && isActive !== /api/product/search?product_category=kesehatan ? 'active' : '' %> btn btn-outline-primary"><Image className='filtering' src={Cari} />Semua</a>
        <a href="/api/product/search?product_category=hobi" class="<%= isActive === '/api/product/search?product_category=hobi' ? 'active' : '' %> btn btn-outline-primary"><Image className='filtering' src={Cari} />Hobi</a>
        <a href="/api/product/search?product_category=kendaraan" class="<%= isActive === '/api/product/search?product_category=kendaraan' ? 'active' : '' %> btn btn-outline-primary"><Image className='filtering' src={Cari} />Kendaraan</a>
        <a href="/api/product/search?product_category=baju" class="<%= isActive === '/api/product/search?product_category=baju' ? 'active' : '' %> btn btn-outline-primary"><Image className='filtering' src={Cari} />Baju</a>
        <a href="/api/product/search?product_category=elektronik" class="<%= isActive === '/api/product/search?product_category=elektronik' ? 'active' : '' %> btn btn-outline-primary"><Image className='filtering' src={Cari} />Elektronik</a>
        <a href="/api/product/search?product_category=kesehatan" class="<%= isActive === '/api/product/search?product_category=kesehatan' ? 'active' : '' %> btn btn-outline-primary"><Image className='filtering' src={Cari} />Kesehatan</a>
        </div>
      </div>      
      
      {/* <div class="relative d-flex category">
        <div class="col-md-4 product">
          <div class="card product-card">
            <div class="card-body product-detail">
              <img class="img-fluid w-100 product_image" src={Product} alt="Product" />
              <span class="name mb-2"> Jam Tangan Casio </span>
              <span class="type mb-3"> Aksesoris </span> <br/>
              <span class="price mb-4"> Rp 250.000 </span>
            </div>
          </div>
        </div>
    </div> */}
    </Container>
    </>
  );
}

export default Filter;