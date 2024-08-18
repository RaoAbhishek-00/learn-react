import { LOGO_URL } from "../utils/constants";
import { useState } from "react";

const Header = () => {
  const [btn, setBtn] = useState("Login");
  

  return (
    <div className="header">
      <div className="logo-container">
        <img src={LOGO_URL} alt="logo" className="logo" />
      </div>

      <h1 className="site-name">Website Name</h1>

      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>about us</li>
          <li>Cart</li>
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
