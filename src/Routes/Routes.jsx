import { createBrowserRouter } from "react-router";
import React from "react";
import Header from "../Components/Header";
import HomeLayout from "../Layouts/Homelayouts";
import Home from "../page/Home";
import CategoryNews from "../page/CategoryNews";


const Router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout></HomeLayout>,
        children: [ {
            path: "",
            element: <Home></Home>
        },
        {
            path: "/category/:id",
            element: <CategoryNews></CategoryNews>,
            loader: () => fetch ("/news.json"),
        }

        ]
    },
        {
        path: "/auth",
        element: <h2>This is authentication</h2>
    },
        {
        path: "/news",
        element: <h2>This is news</h2>
    },
        {
        path: "/*",
        element: <h2>Error-404</h2>
    }
])

export default Router;