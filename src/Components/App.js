import React from "react";
import ReactDOM from "react-dom" ;
import "../Styles/Login.css"
import { createBrowserRouter , RouterProvider } from "react-router-dom";
import HomeDiv from "./Home.js";
import Discuss from "./Details.js";
import Login from "./Login.js"; 
const App = () =>(
    <HomeDiv />
)
const router =  createBrowserRouter([
    {
        path:"/" , 
        element:<Login />
    } ,
    {
        path:"/questions",
        element:<App />
    }, {
        path:"/questions/:id/details" ,
        element:<Discuss />
    }

])
const root = ReactDOM.createRoot(document.getElementById("root")) ;
root.render(<RouterProvider router={router} />)