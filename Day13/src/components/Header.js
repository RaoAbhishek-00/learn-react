import { LOGO_URL } from "../utils/constants";
import { useState,  } from "react";
import { useSelector } from "react-redux";
import  {Link}  from "react-router-dom";

const Header = () => {
  const [btn, setBtn] = useState("Login");
  const cartItems = useSelector((store) => store.cart.items);
  

  return (
    <div className="flex justify-between  bg-gray-300 ">
      <div className="logo-container">
        <Link to="/"><img src={LOGO_URL} alt="logo" className="w-24 rounded-full" /></Link>
      </div>

      <h1 className="content-center">Website Name</h1>

      <div className="content-center"> 
        <ul className="flex">
          <li className="p-3"><Link to="/">Home</Link></li>
          <li className="p-3"><Link to="/about">About</Link></li>
          <li className="p-3"><Link to="/contact">Contact</Link></li>
          <li className="p-3"><Link to="/cart">CART - {cartItems.length}</Link></li>
          
          <li>
            <button
              className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false"
              onClick={() => {
                btn === "Login" ? setBtn("Logout"): setBtn("Login") ;
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
