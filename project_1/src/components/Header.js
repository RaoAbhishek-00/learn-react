import { signOut } from "firebase/auth";
import React from "react";
import { useDispatch } from "react-redux";
import { auth } from "../utils/firebase";
import { removeuser } from "../utils/userSlice";

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
          src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
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
