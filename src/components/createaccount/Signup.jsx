import React from 'react'
import './Signup.css';
import { FaStumbleupon } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";





function Signup() {


    return (
    <>

    {/* grey=BEBCBC  button=1F485B* background=#1A4A60/}
    {/* backdiv */}
    <div className="back-div">
    
    {/* maindivs */}
    <div className='main-div' >
        <div className="started-div">
        <i> <FaStumbleupon className='fm-logo' /></i>
        <h1 className="started">Getting Started With Stumble</h1>
        <img src="src\assets\Abstraction.png" alt="" className="overlay-image" />
        </div>

        {/* formdiv */}
        <div className="form">
        <h1 className="create-account">Create Account</h1>
        <div className="gf">
            <button className="go"> <FcGoogle />Signup with Google</button>
            <button className="fb"> <FaFacebook className='fb-button' />Signup with Facebook</button>
        </div>
        <p className="or">OR</p>
        <div className="signup-form">
            <input type="text" placeholder='Full Name' className='full-name' />
            <input type="email" placeholder='Email' className='Email' />
            <input type="password" placeholder='Password' className='Password'/>
            <button className='ca-button'>Create Account</button>
            <p className="acc-exist">Already have an account? <a href="#"  className="acc-link">Login</a></p>

        </div>
        </div>
    </div>

    </div>
    </>
    )
}

export default Signup;
