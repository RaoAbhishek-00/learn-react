import React, { useRef } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import validateUser from "../utils/validate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import {auth} from "../utils/firebase"



const Login = () => {
  
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const emailref = useRef();
  const passwordref = useRef();

  const handleForm = () => {

    setIsSignIn(!isSignIn);
  };

  const handleValidation = ()=>{
    const email=emailref.current.value;
    const password = passwordref.current.value;
    const isValid = validateUser(email,password);
    setErrorMessage(isValid)
    if (isValid) return;
    console.log(email + password);

    if (!isSignIn) {
      //   //Sign up
        createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            // Signed up
            const user = userCredential.user;
            console.log(user);
            console.log("sign upp");
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessage(errorCode + " " + errorMessage);
            // ..
          });
      }else {
        signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log(user);
            console.log("sign in");
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessage(errorCode + " " + errorMessage);
          });
      }
    
  }

  return (
    <div className="  ">
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/dae1f45f-c2c5-4a62-8d58-6e1b0c6b2d8e/6d1fb8a4-5844-42a4-9b01-1c6c128acf19/IN-en-20240827-TRIFECTA-perspective_WEB_c292a608-cdc6-4686-8dc8-405bfcf753af_large.jpg"
          alt="background"
        />
      </div>
      
      <div className="absolute my-36 mx-auto right-0 left-0 w-2/5   bg-black   ">
        <form onSubmit={(e) => e.preventDefault()}>
          <h1 className="text-white font-bold my-4 text-center text-xl">Sign In</h1>
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
          <input ref={passwordref} className=" my-4 w-3/4 ml-[4rem] p-2   text-center " type="password" placeholder="password" />
          <div>
            <button onClick={handleValidation} className="my-4 w-3/4 ml-[4rem] p-2   bg-red-600">
              {isSignIn ? "Sign In" : "Sign Up"}
            </button>
          </div>
          <p className="text-red-600 my-4 w-3/4 ml-[4rem] px-2 ">{errorMessage}</p>
          <div  className="text-white  my-4 w-3/4 ml-[4rem] px-2   ">
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