import React from "react";
import './Profile.css';
import { MdPerson3, MdEmail } from "react-icons/md";
import { FaPhone, FaLocationDot } from "react-icons/fa6";
import { CiEdit } from "react-icons/ci";

function Profile() {
    return (
        <>
            <div className="profile-container">
                <div className="header">
                    <h1>My Profile</h1>
                </div>
                <div className="profile-pic-container">
                    <img className="profile-pic" src="https://i.pinimg.com/736x/c0/74/9b/c0749b7cc401421662ae901ec8f9f660.jpg" alt="Profile" />
                    <button className="edit-profile"><CiEdit /> Edit Profile</button>
                </div>
                <div className="userinfo">
                    <h2 className="username">Clay Jensen</h2>
                    <p className="address">Northridge, California (CA), 91325, USA</p>
                    <p className="personal-info">Age: 24 | Gender: Male | Status: <span className="status">Active*</span></p>
                </div>
                <div className="main-info">
                    <div className="info-item">
                        <MdPerson3 /> <span>Role:</span> User
                    </div>
                    <div className="info-item">
                        <MdEmail /> <span>Email:</span> clayjemssasa@gmail.com
                    </div>
                    <div className="info-item">
                        <FaPhone /> <span>Contact:</span> (+61) 454545454 / 54551
                    </div>
                    <div className="info-item">
                        <FaLocationDot /> <span>Region:</span> Central US
                    </div>
                </div>
            </div>
        </>
    );
}

export default Profile;
