import React from 'react'
import gambar from "../assets/images/Rectangle 134.png"
import { Image } from 'react-bootstrap';
import penjual from "../assets/images/Rectangle 33.png"
import back from '../assets/images/fi_arrow-left.png'
import Navigasi from '../component/Navigasi';

function DetailProduk_seller() {
  return (
    <>
      <Navigasi />
      <div className="container1 mx-5 py-3 justify-content-center align-item-center" id="produk-seller">
      <a href="/info-produk"><Image src={back} className='kembali position-absolute' /></a>
            <div className='box_image'>
              <div>
              <Image src={gambar} className="img-fluid detail_gambar" alt="detail_gambar" />
              </div>
            </div>
            
            <div className='card_produk'>
              <div className="card-body-produk">
                <h5 className="card-title fw-bold">Apple Watch Series 3</h5>
                <p className="card-text">Aksesoris</p>
                <p className="card-text-2 fw-bold">Rp 250000</p>
                <div class="d-grid gap-2">
                <a href="/seller/daftar-jual"><button class="btn_teks btn1 text-white" type="button">Terbitkan</button></a>
                <a href="/info-produk"><button class=" btn-teks btn2" type="button">Edit</button></a>                
                </div>
              </div>
              <div className="card2 py-1">
              <div className="row">
                <div className="col-2 align-self-center">
                  <Image
                    className="rounded img-responsive center-block img-fluid gbr-seller"
                    src={penjual}
                  />
                </div>
                <div className="col-8">
                  <div className="card-body-seller py-1">
                    <h4 className="card-title-seller fw-bold btn-teks">Nama Penjual</h4>
                    <h6 className="card-text-seller ket">Kota</h6>
                  </div>
                </div>
              </div>
            </div>
            </div>
            
        </div>
        <div className='container2'>
          <div className ='desc px-2 py-2 align-item-center'>
          <p className='btn_teks fw-bold'>
                Deskripsi
              </p>
              <p className='card-text'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
          </div>    
            </div>
          <div className='container3'>
            <a href="/seller/daftar-jual"><button class="btn1 btn_teks btn-float text-white" type="button">Terbitkan</button></a>
          </div>
    </>
  )
}
export default DetailProduk_seller;