import React from 'react';
import img from '../assets/images/img.png'
import back from '../assets/images/fi_arrow-left.png'

const Login = () => {
    return (
        <div className='container'>
            <img src={img} className='img' />
            <img src={back} className='back' />
            <span className='form-title'>Masuk</span>
                <div className='form'>
                    <div className='input1'>
                        <span className='label1'>Email</span>
                        <input className='email' placeholder='Contoh: johndee@gmail.com'/>
                    </div>

                    <div className='input1'>
                        <span className='label1'>Password</span>
                        <input  className='email' placeholder='Masukkan password'/>
                        <div id="toggle" onclick="showHide();"></div>
                    </div>

                    <div className='button-wrapper'>
						<button className='button'>
                            <a  href="/">
                                <span className='text'>Masuk</span>
                            </a>
						</button>
					</div>

                    <div className='frame'>
                        <span className='txt1'>Belum punya akun?</span>
                        <a  href="/register" className='txt2'>Daftar di sini</a>
                    </div>
                </div>
                
        </div>
    );
};

export default Login;