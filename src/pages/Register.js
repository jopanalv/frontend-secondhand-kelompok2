import React from 'react';
import img from '../assets/images/img.png'
import back from '../assets/images/fi_arrow-left.png'
import "../assets/style.css"

const Register = () => {
    return (
    <>
        <div className='login'>
            <img src={img} className='img' />
            <img src={back} className='back' />
            <span className='form-title'>Daftar</span>
                <div className='form'>

                    <div className='input1'>
                        <span className='label1'>Nama</span>
                        <input className='email' placeholder='Nama Lengkap'/>
                    </div>

                    <div className='input1'>
                        <span className='label1'>Email</span>
                        <input className='email' placeholder='Contoh: johndee@gmail.com'/>
                    </div>

                    <div className='input1'>
                        <span className='label1'>Password</span>
                        <input  className='email' placeholder='Masukkan password'/>
                        <div id="toggle-regis" onclick="showHide();"></div>
                    </div>

                    <div className='button-wrapper'>
                    <a  href="/">
						<button className='button'>
							    <span className='text'>Daftar</span>
						</button>
                    </a>
					</div>

                    <div className='frame-regis'>
                        <span className='txt1'>Sudah punya akun?</span>
                        <a  href="/login" className='txt2'>Masuk di sini</a>
                    </div>

                </div>
                
        </div>
    </>
        
    );
};

export default Register;