// src/components/Layout.js
import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Header from './Header';
import { useDispatch } from 'react-redux';
import {auth} from "../utils/firebase"
import { onAuthStateChanged } from 'firebase/auth';
import { addUser, removeuser } from "../utils/userSlice";


const Layout = () => {
   const dispatch = useDispatch()
   const navigate = useNavigate()
   
  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
       
        const {email, uid, displayName} = user;
        
        dispatch(addUser({email:email,displayName:displayName,uid:uid}))
        navigate("/browse")
        // ...
      } else {
        // User is signed out
        dispatch(removeuser())
        navigate("/")
      }
    });
    
  },[])

  return (
    <div>
      <main>
      <Header />
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
