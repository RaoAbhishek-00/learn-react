// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDwy0QiY0pC4e2Mfc9BxUzA4tp8Sv2D7Sc",
  authDomain: "react-project-1-6b3be.firebaseapp.com",
  projectId: "react-project-1-6b3be",
  storageBucket: "react-project-1-6b3be.appspot.com",
  messagingSenderId: "401429732798",
  appId: "1:401429732798:web:f21a604e3cf4173fe3edef",
  measurementId: "G-CJRLMHDT3P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);