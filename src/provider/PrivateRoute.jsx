import React from "react";
import { use } from "react";
import Loading from "../page/Loading";
import { Navigate, useLocation } from "react-router";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider"; // Added import



const  PrivateRoute= ({children}) => {
   const {user, loading } = useContext (AuthContext)

   const location = useLocation()
  //  console.log(location)
    if (loading)
   { return <Loading></Loading>}
  if (user && user?.email){
   return children
  }
  return <Navigate state={location.pathname} to= "/auth/login"></Navigate>
}

export default PrivateRoute;