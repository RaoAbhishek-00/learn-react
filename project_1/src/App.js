
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Header from "./components/Header";
import Login from "./components/Login";
import Browse from "./components/Browse";
import Layout from "./components/Layout";


function App() {

  const appRouter = createBrowserRouter([ 
    {
      path:"/",
      element:<Layout/>,
      children:[{
        path:"/",
        element:<Login/>,
        
      },
      {
        path:"/browse",
        element:<Browse/>
      },]
    },
    
  ])

  return (
    <div className="App">

    <RouterProvider router={appRouter} />

     
    </div>
  );
}

export default App;
