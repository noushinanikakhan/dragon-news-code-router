import React from "react";
import { Outlet } from "react-router";
import { format } from "date-fns"; // Import the format function

import logo from "../assets/logo.png"

const Header = () => {
    return (
        <div className="flex justify-center items-center flex-col gap-3">
       <img src={logo} alt="" />
       <p className="text-accent">Journalism Without Fear or Favour</p>
       <p className="text-accent font-semibold">{format (new Date (), "EEEE, MMMM MM, yyyy" ) } </p>
        </div>
    )
}

export default Header;