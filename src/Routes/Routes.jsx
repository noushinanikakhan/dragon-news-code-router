import { createBrowserRouter } from "react-router";
import React from "react";
import Header from "../Components/Header";
import HomeLayout from "../Layouts/Homelayouts";
import Home from "../page/Home";
import CategoryNews from "../page/CategoryNews";
import Login from "../page/Login";
import Register from "../page/Register";
import AuthLayout from "../Layouts/AuthLayout";
import NewsDetails from "../page/NewsDetails";
import PrivateRoute from "../provider/PrivateRoute";




const Router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout></HomeLayout>,
        children: [ {
            path: "",
            element: <Home></Home>
        },
        {
            path: "category/:id",
            element: <CategoryNews></CategoryNews>,
            loader: () => fetch ("/news.json"),
        }

        ]
    },
        {
        path: "/auth",
        element: <AuthLayout></AuthLayout>,
        children: [
            {
                path:"/auth/login",
                element: <Login></Login>
            },
                 {
                path:"/auth/register",
                element: <Register></Register>,
            },
        ]
    },
        {
        path: "/news-details/:id",
        element: <PrivateRoute><NewsDetails></NewsDetails></PrivateRoute>,
        loader: ()=> fetch("/news.json")
    },
        {
        path: "/*",
        element: <h2>Error-404</h2>
    }
])

export default Router;