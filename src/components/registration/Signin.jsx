import React from 'react'
import './Signin.css'
import { FcGoogle } from "react-icons/fc";
import { Link } from 'react-router-dom';



function Signin() {
    return (
    <>
    
    <div className="form-container">
        <form className='logform'>
            <h2 className='wc-in'>WELCOME BACK</h2>
            <h4 className="wc-ds">Welcome back! Please enter your details.</h4>
            <div className="username">
            <label htmlFor="email" className='em-label'>Email</label> <br/>
            <input type="email" placeholder='enter your username'  className='email-signin'/><br/>
            </div>
            
            <div className="password">
            <label htmlFor="password" className='pass-label'>Password</label> <br/>
            <input type="password" placeholder='enter your password ' className='pass-input' />
            </div> 
            <button className="log">Login</button><br></br><br/>
            <button className="google-in"><FcGoogle className='gg-icon'/> Sign in with Google </button>
            <p className="dont-exist">Don’t have an account?<Link to={'/Signup'}><a href="#"  className="sign-link">Sign up for free!</a></Link></p>
            
        </form>
        
            <img src="/src/assets/run.png" alt="" className="run-img" />
        
        
        
    </div>
    </>
    )
}

export default Signin;