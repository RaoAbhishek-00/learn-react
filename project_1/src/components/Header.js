import { signOut } from "firebase/auth";
import React from "react";
import { useDispatch } from "react-redux";
import { auth } from "../utils/firebase";
import { removeuser } from "../utils/userSlice";
import { LOGO } from "../utils/constants";

const Header = () => {
  const dispatch = useDispatch();
  
  const handleLogout= ()=>{
    signOut(auth).then(() => {
      // Sign-out successful.
      dispatch(removeuser())
    }).catch((error) => {
      // An error happened.
    });
    
  }
  return (
    
    <div className="flex justify-between absolute w-full h-32 bg-gradient-to-b from-black ">
      <div className="   ">
         
        <img
          className="w-32"
          src={LOGO}
          alt="logo"
        />

        
      </div>
      <div>
        <button onClick={handleLogout} className=" text-red-600 font-bold cursor-pointer ">
          LogOut
        </button>
      </div>
    </div>
  );
};

export default Header;
