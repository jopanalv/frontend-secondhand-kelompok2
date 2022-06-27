import React from 'react';
import box from '../assets/images/fi_box.png'
import chevronRight from '../assets/images/fi_chevron-right.png'
import dollar from '../assets/images/fi_dollar-sign.png'
import love from '../assets/images/Vector.png'
import plus from '../assets/images/fi_plus.png'
import Diminati from '../assets/images/Group 33.png'
import barang from '../assets/images/Rectangle23.png'
// mobile icon kategori
import boxMob from '../assets/images/mobile-fi_box.png'
import dollarMob from '../assets/images/mobile-fi_dollar-sign.png'
import loveMob from '../assets/images/mobile-fi_heart.png'

const Jual = () => {
    return (

        <div className='Container'>

            <div className='kategori'>
                <span className='kategori-title'>Kategori</span>
                <div className='frame-162'>
                    <div className='frame-160'>
                        <img src={box} className='kategori-fi_box1' />
                        <span className='kategori-txt1'>Semua Produk</span>
                        <img src={chevronRight} className='kategori-chevron-right1' />
                    </div>
                    <a href="/seller/daftar-jual/diminati">
                        <div className='frame-160'> 
                            <img src={love} className='kategori-fi_box1' />
                            <a className='kategori-txt1'>Diminati</a>
                            <img src={chevronRight} className='kategori-chevron-right1' />
                        </div>
                    </a>
                    <div className='frame-160'>
                        <img src={dollar} className='kategori-fi_box1' />
                        <span className='kategori-txt1'>Terjual</span>
                        <img src={chevronRight} className='kategori-chevron-right1' />
                    </div>
                </div>
            </div> 

            <div className='kategori-mobile'>
                <div className='kategori-mobile-frame active'>
                    <img src={boxMob} className='kategori-mobile-icon' />
                    <span className='kategori-mobile-text'>Produk</span>
                </div>
                <a href="/seller/daftar-jual/diminati">
                    <div className='kategori-mobile-frame'>
                        <img src={dollarMob} className='kategori-mobile-icon' />
                        <span className='kategori-mobile-text'>Diminati</span>
                    </div>
                </a>
                <div className='kategori-mobile-frame'>
                    <img src={loveMob} className='kategori-mobile-icon' />
                    <span className='kategori-mobile-text'>Terjual</span>
                </div>
            </div>

            <div className='daftar-jual'>
                <div className='frame-165'>
                    {/* <div className='frame-150'>
                        <div className='group3'>
                            <img src={plus} className='fi-plus' />
                            <span className='group3-txt'>Tambah Produk</span>
                        </div>    
                    </div>
                    <div className='card'>
                        <img className='foto-barang' />
                        <div className='frame-149'>
                            <div className='informasi-barang'>
                                <span className='nama-barang'>Jam Tangan Casio</span>
                                <span className='jenis-barang'>Aksesoris</span>
                            </div>
                            <span className='harga-barang'>Rp 250.000</span>
                        </div>    
                    </div> */}
                    
                    {/* <div className='card'>
                        <img className='foto-barang' />
                        <div className='frame-149'>
                            <div className='informasi-barang'>
                                <span className='nama-barang'>Jam Tangan Casio</span>
                                <span className='jenis-barang'>Aksesoris</span>
                            </div>
                            <span className='harga-barang'>Rp 250.000</span>
                        </div>    
                    </div> */}

                    <a href="/info-produk">
                    <div className='col-md-3 col-sm-6 py-3 my-3 card3 border-1'>
                        <div className='group3'>
                            <img src={plus} className='fi-plus' />
                            <span className='group3-txt'>Tambah Produk</span>
                        </div>    
                    </div>
                    </a>
                     
                    <div className="col-md-3 col-sm-6 py-3 my-3 card3 border-1">
                    <img src={barang} className='foto-barang' />
                        <div className='frame-149'>
                            <div className='informasi-barang'>
                                <div className="nama-barang">
                                Jam Tangan Casio
                                </div>
                                <div className="jenis-barang">Aksesoris</div>
                            </div>    
                            <div className="harga-barang">
                                Rp. 250.000
                            </div>
                        </div>         
                    </div>

                </div>
                    
                {/* </div> */}

                
            </div>
        </div>
        
    );
 
};

export default Jual;