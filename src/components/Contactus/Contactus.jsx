import React from 'react';
import "./Contactus.css";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

function Contactus() {
    return (
        <div className="contactus-container">
            <section className="contactus-hero">
                <h1 className="contactus-title">Contact Us</h1>
                <p className="contactus-subtitle">We'd love to hear from you! Reach out to us with any questions or feedback.</p>
            </section>

            <section className="contactus-section contactus-details">
                <div className="contactus-info">
                    <FaPhoneAlt className="contactus-icon"/>
                    <h2 className="contactus-heading">Phone</h2>
                    <p className="contactus-text">+1 234 567 890</p>
                </div>
                <div className="contactus-info">
                    <FaEnvelope className="contactus-icon"/>
                    <h2 className="contactus-heading">Email</h2>
                    <p className="contactus-text">support@stumble.com</p>
                </div>
                <div className="contactus-info">
                    <FaMapMarkerAlt className="contactus-icon"/>
                    <h2 className="contactus-heading">Address</h2>
                    <p className="contactus-text">123 Fashion St, New York, NY 10001</p>
                </div>
            </section>

            <section className="contactus-section contactus-form">
                <h2 className="contactus-heading">Send Us a Message</h2>
                <form className="contactus-form">
                    <div className="contactus-form-group">
                        <label htmlFor="name" className="contactus-form-label">Name</label>
                        <input type="text" id="name" className="contactus-form-input" required />
                    </div>
                    <div className="contactus-form-group">
                        <label htmlFor="email" className="contactus-form-label">Email</label>
                        <input type="email" id="email" className="contactus-form-input" required />
                    </div>
                    <div className="contactus-form-group">
                        <label htmlFor="message" className="contactus-form-label">Message</label>
                        <textarea id="message" className="contactus-form-textarea" required></textarea>
                    </div>
                    <button type="submit" className="contactus-form-button">Submit</button>
                </form>
            </section>
        </div>
    );
}

export default Contactus;
