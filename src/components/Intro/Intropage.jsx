import React from "react";
import "./Intropage.css";
import Product from "../../productsss/Product";
import { Link } from "react-router-dom";

function Intropage() {
    const prodata = [
        {
            id: 1,
            proimg: "https://hips.hearstapps.com/hmg-prod/images/beach-wedding-1654797958.jpg?crop=0.6668891855807744xw:1xh;center,top&resize=1200:*",
            proname: "FORMAL WEAR",
        },

        {
            id: 2,
            proimg: "https://img.faballey.com/images/Product/IPL00834Z/d3.jpg",
            proname: "ETHNIC WEAR"
        },

        {
            id: 3,
            proimg: "https://cottonworld.net/cdn/shop/files/BO3853-Cottonworldmale1533.jpg?v=1703669421&width=1280",
            proname: "CASUAL WEAR",
        },

        {
            id: 4,
            proimg: "https://img.freepik.com/free-photo/women-s-day-still-life-with-makeup-jewelry_23-2149263158.jpg",
            proname: "ACCESSORIES",
        }

    ];

    return (
        <>
            <section>
                <div className="intro">
                    <img
                        src="https://assets-global.website-files.com/635a76dc72a1554a18e33d3d/63f62f2d63501a20978b56de_63c525d81c217825ecd91b15_60-best-fashion-e-commerce-sites.jpeg"
                        alt=""
                        className="introimg"
                    />
                    <h5>WELCOME TO STUMBLE</h5>
                    <h6>CHECK OUT OUR LATEST COLLECTION</h6>
                    <Link to={'/Men'}><button className="mens"> SHOP MEN'S</button></Link> 
                    <Link to={'/Women'}><button className="womens">SHOP WOMEN'S</button></Link>  
                </div>
            </section>

            <div className="procategory" data-aos="fade-up">
                <h1>PRODUCTS</h1>
                <div className="products-cat">
                    {prodata.map((i) => (
                        <Product key={i.id}
                            proimg={i.proimg}
                            proname={i.proname}

                        />
                    ))}
                </div>

            </div>
            
            <div className="notification">
            
            <h1>GET NOTIFICATIONS</h1>
            <p>Subscribe to our Newsletter and get 10% off your first purchase!!</p>

            <input type="email" placeholder="Enter Your Email Address" className="notify" />
            

            </div>





        </>
    );
}

export default Intropage;