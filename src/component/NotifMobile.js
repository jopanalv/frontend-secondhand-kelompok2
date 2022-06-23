import React from 'react';
import ellipse from '../assets/images/Ellipse 1.png'
import divider from '../assets/images/divider.png'

const NotifMobile = () => {
    return (

        <div className='Container'>
        <span className='notif-txt'>Notifikasi</span>
            <div className="list-notifikasi"> 
            <div className="list">
                    <div className="notif">
                        <img className='notif-img' />
                        <div className="notif-text">
                            <div className="notif-ket">
                                <span className='notif-ket-txt1'>Penawaran produk</span>
                                <span className='notif-ket-txt2'>20 Apr, 14:04</span>
                                <img src={ellipse} className='notif-ket-ellipse' />
                            </div>    
                            <span className='notif-txt1'>Jam Tangan Casio</span>
                            <span className='notif-txt1'>Rp 250.000</span>
                            <span className='notif-txt1'>Ditawar Rp 200.000</span>
                        </div>    
                    </div>
                </div>    
                <div className="list">
                    <img src={divider} className="divider" /> 
                    <div className="notif">
                        <img className='notif-img' />
                        <div className="notif-text">
                            <div className="notif-ket">
                                <span className='notif-ket-txt1'>Berhasil di terbitkan</span>
                                <span className='notif-ket-txt2'>19 Apr, 12:00</span>
                                <img src={ellipse} className='notif-ket-ellipse' />
                            </div>    
                            <span className='notif-txt1'>Jam Tangan Casio</span>
                            <span className='notif-txt1'>Rp 250.000</span>
                        </div>    
                    </div>
                </div>
            </div> 
        </div>
        
    );
 
};

export default NotifMobile;