import app from "../firebase/firebase.config"
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";

import React, { createContext, useEffect, useState } from "react";
import Navbar from "../Components/Navbar";

export const AuthContext = createContext ();

const auth = getAuth(app);

const AuthProvider = ({children}) => {

const [user, setUser] = useState( null);
const [loading, setLoading]= useState(true)

// console.log(loading, user)

const createUser = (email, password) => {
  setLoading(true)
  return createUserWithEmailAndPassword(auth, email, password)
}

const signIn = (email, password) => {
  setLoading(true)


return signInWithEmailAndPassword(auth, email, password )}

const updateUser = (updateData )=> {
  return updateProfile (auth.currentUser, updateData)
}
const logOut =()=> {
  return signOut (auth)
}

useEffect (() => {
  const unsubscribe = onAuthStateChanged(auth, (currentUser)=>
 {
   setUser(currentUser);
    setLoading(false)
 }
)
  return ()=> {
    unsubscribe();
  }
}, [])

const authData = {
  user, 
  setUser,
  createUser,
  logOut,
  signIn,
  updateUser,
  updateProfile,
} 


   return (
    <AuthContext.Provider value={authData}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;