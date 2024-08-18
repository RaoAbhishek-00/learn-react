import { LOGO_URL } from "../utils/constants";
import { useState,  } from "react";
import  {Link}  from "react-router-dom";

const Header = () => {
  const [btn, setBtn] = useState("Login");
  

  return (
    <div className="header">
      <div className="logo-container">
        <Link to="/"><img src={LOGO_URL} alt="logo" className="logo" /></Link>
      </div>

      <h1 className="site-name">Website Name</h1>

      <div className="nav-items">
        <ul>
          <li ><Link to="/">Home</Link></li>
          <li ><Link to="/about">About</Link></li>
          <li ><Link to="/contact">Contact</Link></li>
          <li>CART</li>
          
          <li>
            <button
              className="login-btn"
              onClick={() => {
                btn === "login" ? setBtn("Logout"): setBtn("login") ;
              }}
            >
              {btn}
            </button>
          </li>
          
          
        </ul>
      </div>
    </div>
  );
};

export default Header;
