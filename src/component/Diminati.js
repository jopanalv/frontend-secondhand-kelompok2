import React from 'react';
import box from '../assets/images/fi_box.png'
import chevronRight from '../assets/images/fi_chevron-right.png'
import dollar from '../assets/images/fi_dollar-sign.png'
import love from '../assets/images/Vector.png'
import divider from '../assets/images/divider.png'
import DiminatiNot from '../assets/images/Group 33.png'
// mobile icon kategori
import boxMob from '../assets/images/mobile-fi_box.png'
import dollarMob from '../assets/images/mobile-fi_dollar-sign.png'
import loveMob from '../assets/images/mobile-fi_heart.png'

const Diminati = () => {
    return (

        <div className='Container'>

            <div className='kategori'>
                <span className='kategori-title'>Kategori</span>
                <div className='frame-162'>
                    <a href="/seller/daftar-jual">
                        <div className='frame-160'>
                            <img src={box} className='kategori-fi_box1' />
                            <span className='kategori-txt1'>Semua Produk</span>
                            <img src={chevronRight} className='kategori-chevron-right1' />
                        </div>
                    </a>    
                    <div className='frame-160'>
                        <img src={love} className='kategori-fi_box1' />
                        <span className='kategori-txt1'>Diminati</span>
                        <img src={chevronRight} className='kategori-chevron-right1' />
                    </div>
                    <div className='frame-160'>
                        <img src={dollar} className='kategori-fi_box1' />
                        <span className='kategori-txt1'>Terjual</span>
                        <img src={chevronRight} className='kategori-chevron-right1' />
                    </div>
                </div>
            </div> 

            <div className='kategori-mobile'>
                <a href="/seller/daftar-jual">
                    <div className='kategori-mobile-frame'>
                        <img src={boxMob} className='kategori-mobile-icon' />
                        <span className='kategori-mobile-text'>Produk</span>
                    </div>
                </a>
                <div className='kategori-mobile-frame active'>
                    <img src={dollarMob} className='kategori-mobile-icon' />
                    <span className='kategori-mobile-text'>Diminati</span>
                </div>
                <div className='kategori-mobile-frame'>
                    <img src={loveMob} className='kategori-mobile-icon' />
                    <span className='kategori-mobile-text'>Terjual</span>
                </div>
            </div>

            <div className='daftar-jual'>
                
                {/* Tidak ada produkmu yang diminati */}
                <div className='group34'>
                    <img src={DiminatiNot} className='diminati-img' />
                    <span className='diminati-txt'>Belum ada produkmu yang diminati nih, sabar ya rejeki nggak kemana kok</span>
                </div>

                {/* Ada produkmu yang diminati */}
                {/* <div className='diminati'>
                    <div className="list">
                        <div className="notif">
                            <img className='notif-img' />
                            <div className="notif-text">
                                <div className="notif-ket">
                                    <span className='notif-ket-txt1 time'>Penawaran produk</span>
                                    <span className='notif-ket-txt2'>20 Apr, 14:04</span>
                                </div>    
                                <span className='notif-txt1'>Jam Tangan Casio</span>
                                <span className='notif-txt1'>Rp 250.000</span>
                                <span className='notif-txt1'>Ditawar Rp 200.000</span>
                            </div>    
                        </div>
                    </div>
                    <img src={divider} className='divider'/>     
                    <div className="list">
                        <div className="notif">
                            <img className='notif-img' />
                            <div className="notif-text">
                                <div className="notif-ket">
                                    <span className='notif-ket-txt1 time'>Berhasil di terbitkan</span>
                                    <span className='notif-ket-txt2'>19 Apr, 12:00</span>
                                </div>    
                                <span className='notif-txt1'>Jam Tangan Casio</span>
                                <span className='notif-txt1'>Rp 250.000</span>
                                <span className='notif-txt1'>Ditawar Rp 200.000</span>
                            </div>    
                        </div>
                    </div>
                </div> */}
            </div>  
        </div>
        
    );
 
};

export default Diminati;