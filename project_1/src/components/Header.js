import { signOut } from "firebase/auth";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../utils/firebase";
import { removeuser } from "../utils/userSlice";
import { LOGO } from "../utils/constants";
import { toggleGptSearch } from "../utils/gptSearchToggleSlice";
import { changeLanguage } from "../utils/configlanguageSlice";

const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const gptSearchToggle = useSelector(
    (store) => store.gptSearchToggle.gptSearchView
  );

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        dispatch(removeuser());
      })
      .catch((error) => {
        // An error happened.
      });
  };

  const handleGptToggle = () => {
    dispatch(toggleGptSearch());
  };

  const handlelangugeChange =(e)=>{
    dispatch(changeLanguage(e.target.value));
  }

  return (
    <div className="flex justify-between absolute w-full h-32 bg-gradient-to-b from-black z-10 ">
      <div className="   ">
        <img className="w-32" src={LOGO} alt="logo" />
      </div>

      {user && (
        <div>
          {gptSearchToggle && (
            <select className="mr-4" onChange={handlelangugeChange}>
              <option value="en">English</option>
              <option value="hindi">Hindi</option>
            </select>
          )}
          <button
            className="bg-red-600 text-black h-10 mr-4 px-2"
            onClick={handleGptToggle}
          >
            {gptSearchToggle ? "HomePage" : " GptSearch"}
          </button>
          <button
            onClick={handleLogout}
            className=" text-red-600 font-bold cursor-pointer "
          >
            LogOut
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
