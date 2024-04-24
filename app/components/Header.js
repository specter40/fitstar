"use client";
import React from 'react'
import '../css/Header.css'
import {useRouter} from 'next/navigation'
import UserContext from '../context/UserContext';
import { useContext } from 'react';


const Header = () => {  
    const {userData, setUserData} = useContext(UserContext);
    const router = useRouter()

   const handleLogout = () => {
    setUserData({token: undefined, user: undefined}); // clear user data
    localStorage.removeItem("auth-token"); // clear token
    router.push("/");
    }

    const loginHandler = () => {
        router.push("/createAccount")
    }
   const demoHandler = () => {
       router.push("/demo")
   }

   const homeHandler = () => {
        router.push("/");
   }

   const checkActivityHandler = () => {
        router.push("/loggedIn");
   }

    
    
    return (
        <header>
            <a href="/" className='logo'>
                <img src='/images/logo.png' alt="Logo" />
            </a>
            <a href="/" className='Fit'>FitStar</a>
            <div className='navbuttons'>
                <button on onClick={homeHandler}>Home</button>
                <button onClick={checkActivityHandler}>Check Activity</button>
                <button on onClick={demoHandler}>Demo</button>
                {userData.user ? (<button onClick={handleLogout}>Logout</button> ):( <button onClick={loginHandler}>Login/Create Account</button>)}
                {/* <button onClick={logHandler}>{statusLog}</button> */}
            </div>
       </header>
    );
}

export default Header;