import { useState } from "react";
import axios from "../api/axios";
import { Navigate } from "react-router-dom";

import "./login.css";

const Login = ({ loginEvent }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [navigate, setNavigate] = useState(false);

  const usernameHandler = (e) => {
    setUsername(e.target.value);
  };
  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };

  const loginHandler = async (e) => {
    e.preventDefault();

    const response = await axios.post(
      "http://199.192.16.173:5000/api/v1/auth/jwt/",
      {
        username,
        password,
      },
      { withCredentials: true }
    );
    let token = response.data.data["token"];
    localStorage.setItem("token", token);

    axios.defaults.headers.common["Authorization"] = `JWT ${token}`;
    setNavigate(true);
    loginEvent(true);
  };

  if (navigate) {
    return <Navigate to="/" />;
  }

  return (
    <div className="celltronems__login">
      <div className="celltronems__login-container">
        <span>Login</span>

        <form className="celltronems__login-form" onSubmit={loginHandler}>
          <div className="celltronems__login-email">
            <label htmlFor="email">Email</label>
            <input
              className="loginInput"
              type="text"
              name="username"
              onChange={usernameHandler}
            />
          </div>
          <div className="celltronems__login-password">
            <label htmlFor="password">Password</label>
            <input
              className="loginInput"
              type="password"
              id="password"
              name="password"
              onChange={passwordHandler}
            />
          </div>
          <button className="loginbtn" type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
