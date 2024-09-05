import React, { useRef } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import validateUser from "../utils/validate";

import authentication from "../utils/signin-signoutAuthentication";
import { BACKGROUND_IMG } from "../utils/constants";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const emailref = useRef();
  const passwordref = useRef();

  const handleForm = () => {
    setIsSignIn(!isSignIn);
  };

  const handleValidation = () => {
    const email = emailref.current.value;
    const password = passwordref.current.value;
    const isValid = validateUser(email, password);
    setErrorMessage(isValid);
    authentication(isValid, isSignIn, email, password, setErrorMessage);
  };

  return (
    <div className="  ">
      <div className="absolute">
        <img src={BACKGROUND_IMG} alt="background" />
      </div>

      <div className="absolute my-36 mx-auto right-0 left-0 w-2/5   bg-black   ">
        <form onSubmit={(e) => e.preventDefault()}>
          <h1 className="text-white font-bold my-4 text-center text-xl">
            Sign In
          </h1>
          {!isSignIn && (
            <input
              className="  my-4 w-3/4 ml-[4rem] p-2   text-center"
              type="text"
              placeholder="name"
            />
          )}
          <input
            className=" my-4 w-3/4 ml-[4rem] p-2   text-center "
            type="email"
            placeholder="email"
            ref={emailref}
          />
          <input
            ref={passwordref}
            className=" my-4 w-3/4 ml-[4rem] p-2   text-center "
            type="password"
            placeholder="password"
          />
          <div>
            <button
              onClick={handleValidation}
              className="my-4 w-3/4 ml-[4rem] p-2   bg-red-600"
            >
              {isSignIn ? "Sign In" : "Sign Up"}
            </button>
          </div>
          <p className="text-red-600 my-4 w-3/4 ml-[4rem] px-2 ">
            {errorMessage}
          </p>
          <div className="text-white  my-4 w-3/4 ml-[4rem] px-2   ">
            How to Netflix?
            <Link
              className="text-blue-400 hover:underline cursor-pointer"
              onClick={handleForm}
            >
              Sign up now.
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
