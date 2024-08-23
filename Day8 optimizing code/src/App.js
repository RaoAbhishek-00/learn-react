import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Error from "./components/Error";
// import Contact from "./components/Contact";
import RestaurantInfo from "./components/RestaurantInfo";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom" ;

const Contact = lazy(()=> import("./components/Contact"))

const AppLayout = () => {

  return (
    <div className="app">
      <Header />
      <Outlet />
      //footer
    </div>
  );
};



const Router = createBrowserRouter([
  {path:"/",
    element : <AppLayout /> ,
    errorElement:<Error />,
    children: [
      {
        path : "/",
        element : <Body />
      },
      {path : "/about",
        element : <About />
      },
      {
        path: "/contact",
        element:<Suspense fallbacl={<h1>loading......</h1>}><Contact /></Suspense>
      },
      {
        path: "/restaurant/:resId",
        element:<RestaurantInfo />
      }
    ]
  },

])



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router = {Router} />);
