import React, { useState } from "react";
import img from "../assets/images/img.png";
import back from "../assets/images/fi_arrow-left.png";
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router';
import { addRegister } from "../redux/action/registerAction";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    role: ""
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(addRegister(user))
    setUser({
      name: "",
      email: "",
      password: "",
      role: ""
    })
    navigate('../login', { replace: true })
  }

  return (
    <>
      <div className='login'>
        <img src={img} className='img' />
        <img src={back} className='back' />
        <span className='form-title'>Daftar</span>
        <form className='form' onSubmit={handleSubmit}>

          <div className='input1'>
            <span className='label1'>Nama</span>
            <input className='email' placeholder='Nama Lengkap' value={user.name} onChange={(e) => setUser({ ...user, name: e.target.value })} />
          </div>

          <div className='input1'>
            <span className='label1'>Email</span>
            <input className='email' placeholder='Contoh: johndee@gmail.com' value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })} />
          </div>

          <div className='input1'>
            <span className='label1'>Password</span>
            <input type="password" className='email' placeholder='Masukkan password' value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })} />
            <div id="toggle-regis" onclick="showHide();"></div>
          </div>

          <div className="input1">
            <label className="form-label">Role</label>
            <select
              className="form-select"
              name="role"
              value={user.role} onChange={(e) => setUser({ ...user, role: e.target.value })}
            >
              <option value="" disabled selected>
                Pilih Role
              </option>
              <option value="seller">Seller</option>
              <option value="buyer">Buyer</option>
            </select>
          </div>

          <div className='button-wrapper'>
            <a href="/">
              <button className='button'>
                <span className='text'>Daftar</span>
              </button>
            </a>
          </div>

          <div className='frame-regis'>
            <span className='txt1'>Sudah punya akun?</span>
            <a href="/login" className='txt2'>Masuk di sini</a>
          </div>

        </form>

      </div>
    </>
  );
};

export default Register;
