import React from 'react';
import "./Aboutus.css";
import { HiOutlineRocketLaunch } from "react-icons/hi2";
import { GiLightBulb, GiTeamIdea, GiClothes } from "react-icons/gi";

function Aboutus() {
    return (
        <div className="aboutus-container">
            <section className="aboutus-hero">
                <h1 className="aboutus-title">About Stumble</h1>
                <p className="aboutus-subtitle">Your one-stop shop for trendy and comfortable clothing.</p>
            </section>

            <section className="aboutus-section aboutus-mission">
                <HiOutlineRocketLaunch className="aboutus-icon"/>
                <h2 className="aboutus-heading">Our Mission</h2>
                <p className="aboutus-text">
                    At Stumble, we aim to provide the best in fashion for both men and women. Our mission is to bring you the latest trends with an emphasis on quality and affordability.
                </p>
            </section>

            <section className="aboutus-section aboutus-vision">
                <GiLightBulb className="aboutus-icon"/>
                <h2 className="aboutus-heading">Our Vision</h2>
                <p className="aboutus-text">
                    We envision a world where everyone can express their unique style through our diverse range of clothing. Our vision is to inspire confidence and self-expression through fashion.
                </p>
            </section>

            <section className="aboutus-section aboutus-history">
                <GiTeamIdea className="aboutus-icon"/>
                <h2 className="aboutus-heading">Our History</h2>
                <p className="aboutus-text">
                    Founded in 2010, Stumble started as a small boutique with a passion for fashion. Over the years, we have grown into a renowned clothing store known for our stylish and comfortable apparel.
                </p>
            </section>

            <section className="aboutus-section aboutus-values">
                <GiClothes className="aboutus-icon"/>
                <h2 className="aboutus-heading">Our Core Values</h2>
                <ul className="aboutus-values-list">
                    <li className="aboutus-value">Quality</li>
                    <li className="aboutus-value">Affordability</li>
                    <li className="aboutus-value">Customer Satisfaction</li>
                    <li className="aboutus-value">Innovation</li>
                </ul>
            </section>

            <section className="aboutus-section aboutus-team">
                <h2 className="aboutus-heading">Meet the Team</h2>
                <p className="aboutus-text">
                    Our team is passionate about fashion and dedicated to providing excellent customer service. We are a group of creative individuals who work together to bring you the best shopping experience.
                </p>
            </section>

            <section className="aboutus-section aboutus-testimonials">
                <h2 className="aboutus-heading">Customer Testimonials</h2>
                <div className="aboutus-testimonial">
                    <p className="aboutus-testimonial-text">"Stumble has the best clothing selection! Their customer service is top-notch."</p>
                    <p className="aboutus-testimonial-author">- Alex P.</p>
                </div>
                <div className="aboutus-testimonial">
                    <p className="aboutus-testimonial-text">"I always find something I love at Stumble. Their styles are unique and affordable."</p>
                    <p className="aboutus-testimonial-author">- Jamie L.</p>
                </div>
            </section>
        </div>
    );
}

export default Aboutus;
