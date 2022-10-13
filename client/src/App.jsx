import React from "react";


import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import Home from "./pages/Home";
import {
  createBrowserRouter,
  RouterProvider,
  
} from "react-router-dom";
import Form from "./pages/Form";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/form",
    element: <Form />,
  },
  
]);


function App() {
  return (
    
      <div className="App">
        <ToastContainer position="top-center" />
        <RouterProvider router={router}/>
      </div>
    
  );
}

export default App;
