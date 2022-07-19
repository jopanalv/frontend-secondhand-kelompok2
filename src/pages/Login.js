import "../assets/style.css";
import React, { useEffect, useState } from "react";
import img from "../assets/images/img.png";
import back from "../assets/images/fi_arrow-left.png";
import { addLogin } from "../redux/action/loginAction";
import { useSelector, useDispatch } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isAuthenticated, user, error } = useSelector((state) => state.login);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email === "") {
      alert("Please enter your email");
    }
    if (password === "") {
      alert("Password cannot be empty");
    }
    if (email !== "" && password !== "") {
      dispatch(addLogin({ email, password }));
      // navigate("../", { replace: true });
    }
  };

  return (
    <>
      {!isAuthenticated ? (
        <div className="container">
          <img src={img} className="img" />
          <img src={back} className="back" />
          <span className="form-title fw-bold">Masuk</span>
          <form className="form" onSubmit={handleSubmit}>
            <div className="input1">
              <span className="form-label">Email</span>
              <input
                className="form-control"
                type="email"
                placeholder="Contoh: johndee@gmail.com"
                name="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>

            <div className="input1">
              <span className="form-label">Password</span>
              <input
                className="form-control"
                type="password"
                placeholder="Masukkan password"
                name="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
              <div id="toggle" onclick="showHide();"></div>
            </div>

            <button className="button" type="submit">
              <span className="text">Masuk</span>
            </button>

            <div className="frame">
              <span className="txt1">Belum punya akun?</span>
              <a href="/register" className="txt2">
                Daftar di sini
              </a>
            </div>
          </form>
        </div>
      ) : (
        <Navigate to={"/"} replace={true} />
      )}
    </>
  );
};

export default Login;
