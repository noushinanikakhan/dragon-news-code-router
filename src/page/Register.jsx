import React from "react";
import { Form, Link, useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import { use } from "react";
import { useState } from "react";


const Register = () => {
  const {createUser, setUser, updateUser} = use (AuthContext)
  const [nameError, setNameError] = useState("")
  const navigate = useNavigate() 



  const handleRegister =(e) =>{
    e.preventDefault()
    console.log(e.target) 
    const form = (e.target )
    const name= form.name.value
    if (name.length<5){
      setNameError("Name should be more than 5 characters")
      return;
    } else {
      setNameError("")
    }
    const photo= form.photo.value
    const email= form.email.value
    const password= form.password.value
    console.log(name, email, password)
    createUser(email, password)
    .then((result)=> {
      const user =result.user
      // console.log(user)
      updateUser({displayName: name, photoURL: photo}).then(()=>  {
        setUser({...user, displayName : name, photoURL: photo })
        navigate("/")
      })
      .catch((error)=>{
         console.log(error)
         setUser(user)
      }
     )
    
    })
    .catch((error)=> {
      const errorCode = error.code
      const errorMessage = error.message
      alert (errorMessage)
    })

  }
    return (
        <div className="">
      
         <div className="flex justify-center items-center min-h-screen">  
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">

       <h2 className="font-semibold text-2xl text-center">Register your account</h2>
      <form onSubmit={handleRegister} className="card-body">
        <fieldset className="fieldset">
               
          <label className="label">Name</label>
          <input name="name" type="text" className="input" placeholder="Name"
          required />

          {nameError && <p className="text-red-900 font-bold text-xs">{nameError}</p>}

          <label className="label">Photo URL</label>
          <input name="photo" type="password" className="input" placeholder="Password" required />

          <label className="label">Email</label>
          <input name="email" type="email" className="input" placeholder="Email" />

          <label className="label">Password</label>
          <input name="password" type="password" className="input" placeholder="Password" required />


          <button className="btn btn-neutral mt-4">Register</button>
          <p className="font-semibold text-center">Already Have An Account ? {" "}
        <Link className="text-secondary pt-5" to='/auth/login'>Login </Link>


          </p>
        </fieldset>
      </form>
    </div>

        </div>

        </div>
    )
}

export default Register;