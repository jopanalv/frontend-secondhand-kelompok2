import "../assets/style.css"
import React, { useEffect, useState } from "react";
import img from "../assets/images/img.png";
import back from "../assets/images/fi_arrow-left.png";
import { addLogin } from "../redux/action/loginAction";
import { useSelector, useDispatch } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isAuthenticated, user, error } = useSelector(
    (state) => state.LoginReducer
  );

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
      navigate("../", { replace: true });
    }
  };

  return (
    <>
      {!isAuthenticated ? (
        <div className="container">
          <img src={img} className="img" />
          <img src={back} className="back" />
          <span className="form-title">Masuk</span>
          <form className="form" onSubmit={handleSubmit}>
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
              <div id="toggle" onclick="showHide();"></div>
            </div>

            <div className="button-wrapper">
              <button className="button" type="submit">
                <span className="text">Masuk</span>
              </button>
            </div>

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
