import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Navbar from "./components/Navbar";
import Protected from "./components/auth/Protected";
import Home from "./pages/home/Home";
import Login from "./pages/Login";
import Products from "./pages/products/Products";
import LoginProtected from "./components/auth/LoginProtected";
import { useState } from "react";

const App = () => {
  const token = localStorage.getItem("token");
  const [navigate, setNavigate] = useState(token != null);

  const loginEventHandler = (loginResult) => setNavigate(loginResult);

  return (
    <BrowserRouter>
      {navigate && <Navbar />}
      <Routes>
        <Route
          path="/"
          element={
            <Protected>
              <Home />
            </Protected>
          }
        />
        <Route
          path="/login"
          element={
            <LoginProtected>
              <Login loginEvent={loginEventHandler} />
            </LoginProtected>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
