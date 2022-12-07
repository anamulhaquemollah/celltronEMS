import { React, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";

import "./navbar.css";
import reactimg from "../assets/React5.png";
import menu from "../assets/menu.png";
import close from "../assets/close.png";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const menuHandler = () => {
    setShowMenu(!showMenu);
  };

  const signoutHandler = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  return (
    <nav className="navbar">
      <div>
        <Link>
          <img className="navbar__img" src={reactimg} alt="navbar logo" />
        </Link>
      </div>
      <div className="navlinks">
        <Link to="/">Home</Link>
        <Link to="">Products</Link>
        <Link to="">About</Link>
      </div>
      <div className="navbar__signout">
        <Link className="navbar__signout-btn" onClick={signoutHandler}>
          <button>Signout</button>
        </Link>
      </div>

      <div className="navbar__showmenu-btn">
        {showMenu ? (
          <img src={close} alt="close menu" onClick={menuHandler} />
        ) : (
          <img src={menu} alt="show menu" onClick={menuHandler} />
        )}
        {showMenu && (
          <div className="navbar__showmenu-container">
            <div className="navbar__showmenu-links">
              <p>
                <Link>Home</Link>
              </p>
              <p>
                <Link>Products</Link>
              </p>
              <p>
                <Link>About</Link>
              </p>
            </div>
            <Link className="showmenu__signout-btn" onClick={signoutHandler}>
              <button>Signout</button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
