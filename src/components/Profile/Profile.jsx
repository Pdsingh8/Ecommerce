import React from "react";
import './Profile.css';
import { MdPerson3 } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { CiEdit } from "react-icons/ci";







function Profile(){
    return(
        <>
        <div className="header">

        </div>
        <div className="profilepic">
        <img src="https://i.pinimg.com/736x/c0/74/9b/c0749b7cc401421662ae901ec8f9f660.jpg"  />
        </div>
        <button className="edit-profile"><CiEdit /> edit profile</button>

        <div className="userinfo">
            <p className="use">clay jensen</p>
            <p className="addres">Northridge,california(CA),91325,USA</p>
            <p className="personal-info">AGE : 24 | Gender : Male |Status : <span >Active*</span> </p>
        </div>

        <div className="main-info">
            <div className="role">
                <p className="roles"><MdPerson3 /> Role:</p>
                <p className="admins">Administrator</p>
            </div>

            <div className="email-info">
                <p className="em"><MdEmail /> Email:</p>
                <p className="clayemail">clayjemssasa@gmail.com</p>
            </div>

            <div className="contact-info">
                <p className="contact-num"><FaPhone />Contact</p>
                <p className="cont">(+61) (454545454) (54551)</p>
            </div>
            <div className="region">
                <p className="reg"><FaLocationDot /> Region:</p>
                <p className="reg-info">Central Us</p>
            </div>
        </div>
        </>
    )
}

export default Profile;