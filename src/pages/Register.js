import React, { useState } from "react";
import img from "../assets/images/img.png";
import back from "../assets/images/fi_arrow-left.png";
import { useDispatch } from "react-redux";
import { addRegister } from "../redux/action/registerAction";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(
      addRegister({ name: name, email: email, role: role, password: password })
    );
  };

  return (
    <div className="login">
      <img src={img} className="img" />
      <img src={back} className="back" />
      <span className="form-title">Daftar</span>
      <form className="form" onSubmit={(event) => handleSubmit(event)}>
        <div className="input1">
          <span className="label1">Nama</span>
          <input
            className="email"
            placeholder="Nama Lengkap"
            name="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>

        <div className="input1">
          <span className="label1">Email</span>
          <input
            className="email"
            placeholder="Contoh: johndee@gmail.com"
            name="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>

        <div className="input1">
          <span className="label1">Password</span>
          <input
            className="email"
            placeholder="Masukkan password"
            name="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <div id="toggle-regis" onClick="showHide();"></div>
        </div>

        <div className="input1">
          <label className="form-label">Role</label>
          <select
            className="form-select"
            name="role"
            value={role}
            onChange={(event) => setRole(event.target.value)}
          >
            <option value="" disabled selected>
              Pilih Role
            </option>
            <option value="seller">Seller</option>
            <option value="buyer">Buyer</option>
          </select>
        </div>

        <div className="button-wrapper">
          <button className="button" type="submit">
            <span className="text">Daftar</span>
          </button>
        </div>

        <div className="frame-regis">
          <span className="txt1 mt-5">Sudah punya akun?</span>
          <a href="/login" className="txt2">
            Masuk di sini
          </a>
        </div>
      </form>
    </div>
  );
};

export default Register;
