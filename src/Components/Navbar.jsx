import React, { use } from "react";
import { Link, NavLink } from "react-router";
import userIcon from "../assets/user.png"
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {

  const {user, logOut} = use (AuthContext)

  const handleLogOut = ()=>
  {console.log("out")
    logOut().then (()=> {
   alert("Logged out successfully")
    }).catch((error)=> {})
  }
    return (
        <div className="flex justify-between items-center">
      <div> {user && user.email}</div>
      <div className="nav flex gap-5 text-accent">
        <NavLink to='/'>Home</NavLink>
         <NavLink to='/about'> About   </NavLink>
          <NavLink to='/career'>Career</NavLink>
      </div>
      <div className="login-btn flex gap-5">
        <img src={userIcon} alt="" />
        {
          user? ( <button onClick={handleLogOut} to="" className="btn btn-primary px-10">Logout</button>
):( <Link to="/auth/login" className="btn btn-primary px-10">Login</Link>
)
        }
      </div>
        </div>
    )
}

export default Navbar;