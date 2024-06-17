import React, { useState, useContext, useEffect } from "react";
import "./Navbar";
import "../App.css";
//import { userLogin } from '../Context/State';
import { useNavigate } from "react-router-dom";
import Context from "../Context/Context";
import ClipLoader from "react-spinners/ClipLoader";

const Login = () => {
  const { userLogin, User } = useContext(Context);
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [flag, setFlag] = useState(false);
  const { email, password } = user;
  const navigate = useNavigate();

  // useEffect(() => {
  //   window.location.reload();
  //   }, [User])

  const onChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const onLogin = async (e) => {
    e.preventDefault();
    setFlag(true);
    const data = {
      Email: email,
      Password: password,
    };

    const response = await userLogin(data);

    if (response && response.status) {
      console.log(User);
      setTimeout(() => {
        window.location.href = "/";
      }, 100);
      window.location.reload();
    }
    setFlag(false);
  };

  return (
    <div className="whole">
      {flag === true && (
        <div
          style={{
            position: "absolute",
            height: "100%",
            width: "100%",
            top: 0,
            left:0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            opacity:1,
            background: "rgba(255,255,255,0.5)",
            zIndex: 200,
          }}
        >
          <ClipLoader
            color="blue"
            loading={flag}
            size={50}
            cssOverride={{
              borderWidth: 5,
            }}
            width="30px"
            aria-label="Loading Spinner"
            data-testid="loader"
            borderWidth="20px"
          />
          <h3 style={{ marginLeft: "20px" }}>Please wait....</h3>
        </div>
      )}
      <div className="auth_container">
        <h1 className="head">Welcome to Tourism Guide!</h1>
        <h2 className="topic">Enter your Credentials</h2>
        <span className="auth_cont1">
          New to Tourism Guide?{" "}
          <span className="auth_cont2" onClick={() => navigate("/signup")}>
            Register Here!
          </span>
        </span>
        <form noValidate onSubmit={onLogin} className="form">
          <input
            className="name"
            type="email"
            placeholder="Enter email"
            name="email"
            value={email}
            onChange={onChange}
            required
          />
          <input
            className="name"
            type="password"
            placeholder="Enter password"
            name="password"
            value={password}
            onChange={onChange}
            required
          />
          <br />
          <input
            className="button btn-outline-primary"
            type="submit"
            value="Login"
          />
        </form>
      </div>
    </div>
  );
};

export default Login;
