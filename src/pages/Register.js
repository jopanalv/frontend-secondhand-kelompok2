import "../assets/style.css";

import React, { useState } from "react";
import img from "../assets/images/img.png";
import back from "../assets/images/fi_arrow-left.png";
import eye from "../assets/images/fi_eye.png";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { addRegister } from "../redux/action/registerAction";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    role: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addRegister(user));
    setUser({
      name: "",
      email: "",
      password: "",
      role: "",
    });
    navigate("../login", { replace: true });
  };

  const [passwordShown, setPasswordShown] = useState(false);
  const togglePassword = () => {
    // When the handler is invoked
    // inverse the boolean state of passwordShown
    setPasswordShown(!passwordShown);
  };

  return (
    <>
      <div className="login">
        <img src={img} className="img" />
        <img src={back} className="back" />
        <span className="form-title">Daftar</span>
        <form className="form" onSubmit={handleSubmit}>
          <div className="input1">
            <span className="form-label">Nama</span>
            <input
              className="form-control"
              type="name"
              placeholder="Nama Lengkap"
              value={user.name}
              onChange={(e) => setUser({ ...user, name: e.target.value })}
              required
            />
          </div>

          <div className="input1">
            <span className="form-label">Email</span>
            <input
              className="form-control"
              type="email"
              placeholder="Contoh: johndee@gmail.com"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              required
            />
          </div>

          <div className="input1">
            <span className="form-label">Password</span>
            <div>
      
            </div>
            <input
              type={passwordShown ? "text" : "password"}
              className="form-control"
              placeholder="Masukkan password"
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              required
            />
            <img src={eye} className="toggle-regis" onClick={togglePassword} />
          </div>

          <div className="input1">
            <label className="form-label">Role</label>
            <select
              className="form-select"
              name="role"
              value={user.role}
              onChange={(e) => setUser({ ...user, role: e.target.value })}
              required
            >
              <option value="" disabled selected>
                Pilih Role
              </option>
              <option value="seller">Seller</option>
              <option value="buyer">Buyer</option>
            </select>
          </div>

          <div className="button mt-3">
            <a href="/">
              <button className="button">
                <span className="text">Daftar</span>
              </button>
            </a>
          </div>

          <div className="frame-regis">
            <span className="txt1">Sudah punya akun?</span>
            <a href="/login" className="txt2">
              Masuk di sini
            </a>
          </div>
        </form>
      </div>
    </>
  );
};

export default Register;
