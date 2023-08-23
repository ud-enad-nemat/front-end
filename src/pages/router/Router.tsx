import React from "react";
import {createBrowserRouter} from "react-router-dom";
import Login from "../Login";
import Home from "../Home";

export default function Router(){
    return createBrowserRouter([
        {
            path: "/login",
            element: <Login/>,
        },
        {
            path: "",
            element: <Home/>,
        },
    ])
}