import React from "react";
import './Nav.css';
import { BsPersonCircle } from "react-icons/bs";
import { FaStumbleupon } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";


import { Link } from "react-router-dom";


function Nav() {
    return (
        <>
            <nav>
                <div className="logo">
                    <i> <FaStumbleupon /></i>
                    <h1 className=" text-[#FF52AF]">STUMBLE</h1>
                </div>
                <ul>

                    <li><Link to={'/Intropage'}>Home</Link></li>
                    <li><Link to={'/Aboutus'}>About us</Link></li>
                    <li><Link to={'/Contactus'}>Contact us</Link></li>
                    <li>
                        <div className="category-dropdown">
                            <li className="category-dropbtn">Category <i className="caret"><FaChevronDown /></i></li>
                            <div className="category-dropdown-content">

                                <Link to={'Men'}>Men</Link>
                                <Link to={'/Women'}>Women</Link>
                            </div>
                        </div>
                    </li>
                    
                    <li><a href="">Products</a></li>
                    <li> <div className="dropdown">
                        <button className="dropbtn"><BsPersonCircle className="profile-icon" /></button>
                        <div className="dropdown-content">
                            <Link to={'/Profile'}>YOUR PROFILE</Link>
                            <Link to={'/Signin'}>Login</Link>
                            <Link to={'/Signup'}>Sign up</Link>
                            <Link to={'/Wishlist'}>Wishlist</Link>
                            <Link to={'/Addcart'}>Add to cart</Link>
                            {/* <Link to={'/Orders'}>YOUR ORDERS</Link> */}


                        </div>
                    </div>
                    </li>
                </ul>

            </nav>
        </>
    )
}

export default Nav;