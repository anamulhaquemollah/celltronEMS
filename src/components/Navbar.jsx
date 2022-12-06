
import {React, useState} from "react"
import {Link} from 'react-router-dom'; 
import {AiOutlineMenu} from "react-icons/ai"; 

import "./navbar.css"; 
import reactimg from "../assets/React5.png"; 
import menu from "../assets/menu.png"; 
import close from "../assets/close.png"; 

const Navbar = () => {

  const[showMenu, setShowMenu] = useState(false); 

  const menuHandler = ()=>{
    setShowMenu(!showMenu); 
  }
  return (
    <nav className='navbar'>
      <div>
        <Link><img className='navbar__img' src={reactimg} alt="navbar logo" /></Link>
      </div>
      <div className='navlinks'>
        <Link>Home</Link>
        <Link>Products</Link>
        <Link>About</Link>
      </div>
      <div className="navbar__signout">
        <Link className='navbar__signout-btn'><button>Signout</button></Link>
      </div>

        <div className="navbar__showmenu-btn">
          {
            showMenu ? <img src={close} alt="close menu" onClick={menuHandler}/> :
                      <img src={menu} alt="show menu" onClick={menuHandler}/>
          }
            {
              showMenu && (
                <div className="navbar__showmenu-container">
                  <div className="navbar__showmenu-links">
                    <p><Link>Home</Link></p>
                    <p><Link>Products</Link></p>
                    <p><Link>About</Link></p>
                  </div>
                  <Link className='showmenu__signout-btn'><button>Signout</button></Link>
                </div>
              )
            }
        </div>
    </nav>
  )
}

export default Navbar