"use client";
import React from 'react'
import '../css/Header.css'
import {useRouter} from 'next/navigation'
import UserContext from '../context/UserContext';
import { useContext } from 'react';
import Link from 'next/link';


const Header = () => {  
    const {userData, setUserData} = useContext(UserContext);
    const router = useRouter()

   const handleLogout = () => {
    setUserData({token: undefined, user: undefined}); // clear user data
    localStorage.removeItem("auth-token"); // clear token
    localStorage.removeItem("user"); // clear user
    router.push("/");
    }

    const loginHandler = () => {
        router.push("/signIn")
    }
   const demoHandler = () => {
       router.push("/demo")
   }

   const homeHandler = () => {
        router.push("/");
   }

   const checkActivityHandler = () => {
        if (userData.token) {   
            router.push("/loggedIn");
        } else {
            router.push("/createAccount");
        }   
   }

    
    
    return (
        <header>
            <Link href="/" className='logo'>
                <img src='/images/logo.png' alt="Logo" />
            </Link>
            <Link href="/" className='Fit'>FitStar</Link>
            <div className='navbuttons'>
                <button onClick={homeHandler}>Home</button>
                <button onClick={checkActivityHandler}>Check Activity</button>
                <button onClick={demoHandler}>Demo</button>
                <div>{userData.token ? (<button onClick={handleLogout}>Logout</button> ):( <button onClick={loginHandler}>Login/Create Account</button>)}</div>
                {/* <button onClick={logHandler}>{statusLog}</button> */}
            </div>
       </header>
    );
}

export default Header;