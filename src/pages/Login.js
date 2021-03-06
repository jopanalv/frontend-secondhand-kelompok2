import "../assets/style.css";
import React, { useEffect, useState } from "react";
import img from "../assets/images/img.png";
import back from "../assets/images/fi_arrow-left.png";
import eye from "../assets/images/fi_eye.png";
import { addLogin } from "../redux/action/loginAction";
import { useSelector, useDispatch } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import toast from "react-simple-toasts";

const Login = () => {
  const dispatch = useDispatch();

  const { isAuthenticated, user, error } = useSelector((state) => state.login);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email === "") {
      toast("Email cannot be empty", 3000);
    }
    if (password === "") {
      toast("Password cannot be empty", 3000);
    }
    if (email !== "" && password !== "") {
      dispatch(addLogin({ email, password }));
    }
  };

  const [passwordShown, setPasswordShown] = useState(false);
  const togglePassword = () => {
    // When the handler is invoked
    // inverse the boolean state of passwordShown
    setPasswordShown(!passwordShown);
  };

  const handleEmailChange = evt => {
    const newEmail = evt.target.value.replace(
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/g,
      ""
    );
    setEmail(newEmail);
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
                placeholder="Masukkan password"
                type={passwordShown ? "text" : "password"}
                id="pass"
                name="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
              <img src={eye} className="toggle" onClick={togglePassword} />
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
