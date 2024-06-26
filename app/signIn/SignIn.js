import {useState, useContext, useEffect} from "react";
import UserContext from "../context/UserContext.js";
import { useRouter } from 'next/navigation';
import '../signIn/css/SignIn.css';
import axios from 'axios';
import Link from "next/link";

const SignIn = () => {
    const router = useRouter();
    const {userData, setUserData} = useContext(UserContext);

    //Redirect if user is already logged in
    useEffect(() => {
        if (userData.token) {
            router.push("/loggedIn");
        }
    }, [userData.token, router]);

    const  [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [error, setError] = useState("");

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    }   

    const createHandler = () => {
        router.push("/createAccount");
    }
    const handleLogin = async (e) => {
        e.preventDefault();
        try {
           //Send login request to server
           const response = await axios.post("http://localhost:8085/api/users/login", formData);
           setUserData({
                token: response.data.token,
                user: response.data.user,
            });
            localStorage.setItem("auth-token", response.data.token);
            localStorage.setItem("user", response.data.user);
            router.push("/loggedIn");
        } catch (error) {
            console.error("Login failed", error);
            setError("Invalid Email or Password");
            //handle login error
        }
    };

    return (
        <div className="page">
            <form onSubmit={handleLogin}>
                <div className="starContainer">
                    <img className="star" src="images/Star.png" alt="Star" />
                    <h1>Welcome</h1>
                </div>
                <div className="bodyContainer">
                    <img className="logo" src="/images/Logo.png" alt="Logo" />
                    <h2>Login</h2>
                    <h3>Email</h3>
                    <input name="email" type="email" value={formData.email} onChange={handleChange} />
                    <h3>Password</h3>
                    <input name="password" type="password" value={formData.password} onChange={handleChange} />
                    <button className="submitBt" type="submit">Login</button>
                    <div><h3 id="error">{error}</h3></div>
                    <h3>Don't have an account? <Link href="/createAccount">Create Account</Link></h3>
                </div>
            </form>
        </div>
    );
};

export default SignIn;

/*"use client";
import '../signIn/css/SignIn.css';
import {useRouter} from 'next/navigation'

const SignIn = (props) => {
    let username = '';
    let password = '';

    const router = useRouter()
    const createHandler = () => {
        router.push("/createAccount");
    }

    // handles login
    const handleLogin = async () => {
        if (username.trim()!== '' && password.trim() !== '') {
            router.push('/demo');
        }
        else{
            alert('Invalid username or password');
        }
    }
    return(
        <div className="page">
            <div className="container">
                <img src="/images/Star.png" id="star"/>
                <h1>Welcome</h1>
                <img className="logo" src='/images/Frame.png' id="titleLogo"alt="Logo" />
                <h2>Login</h2>
                <h3>Username</h3>
                <input id='username' value={username} onChange={(event) => setUsername(event.target.value)} />
                <h3>Password</h3>
                <input id='password' type="password" value={password} onChange= {(event) => setPassword(event.target.value)}/>
                <button onClick={handleLogin}>Login</button>
                <a onClick={createHandler}>Create a new account</a>
            </div>
        </div>
    );
};

export default SignIn;*/