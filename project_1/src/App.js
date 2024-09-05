import { createBrowserRouter, RouterProvider, useNavigate } from "react-router-dom";

import Login from "./components/Login";
import Browse from "./components/Browse";
import Layout from "./components/Layout";
import { Provider, useDispatch } from "react-redux";
import appStore from "./utils/appStore";





function App() {

 
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Login />,
        },
        {
          path: "/browse",
          element: <Browse />,
        },
      ],
    },
  ]);



  return (
    <Provider store={appStore}>
      <div className="App">
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
}

export default App;
