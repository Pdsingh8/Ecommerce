import React from 'react'
import "./Allproducts.css"
import { Link } from 'react-router-dom';

function Allproducts() {
  return (
    <>
    
        <div className="products-container">
            <section className="products-hero">
                <h1 className="products-title">Our Products</h1>
                <p className="products-subtitle">Discover our diverse range of clothing for men and women.</p>
            </section>

            <section className="products-section">
                <h2 className="products-category-title">Men's Clothing</h2>
                <div className="products-grid">
                    
                    <Link to={'/Men'}> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlpXBFTlQJm3kfMC1y53Ppl583XVIW0nr64w&s" alt="" className="mens-products" /></Link>
                    <Link to={'/Men'}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyJDx7jOOFh7-2mkrryGoCmMYRC0DjARE7_A&s" alt="" className="mens-products" /></Link>
                    <Link to={'/Men'}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlruHrST8AXVSIXR1buFB9pB1Ea84PdQ8kPg&s" alt="" className="mens-products" /></Link>
                    <Link to={'/Men'}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbkloM91IhbaSRDP1DExwyQfEb_YcXiCEKbQ&s" alt="" className="mens-products" /></Link>
                    
                </div>
            </section>

            <section className="products-section">
                <h2 className="products-category-title">Women's Clothing</h2>
                <div className="products-grid">
                    
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtmnODuthhMdX40nfbopHRVgyJxxYm8fNMUQ&s" alt="" className="womens-products" />
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfze9h3YfYWEcCVHltd3ZBejpqy6HsLfqgVQ&s" alt="" className="womens-products" />
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMQdEsLhEeHkyBksgMJkkeRdDO5-N4tBfTYA&s" alt="" className="womens-products" />
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvcGQvYIBbbhz6oHXMnpZnCFMqa1ProskCkQ&s" alt="" className="womens-products" />



                </div>
            </section>

            <section className="products-section">
                <h2 className="products-category-title">Accessories</h2>
                <div className="products-grid">
                    
                    <img src="https://img.faballey.com/images/Product/IBG00254/d3.jpg" alt="" className="acc-products" />
                    <img src="https://i.pinimg.com/736x/37/cf/6c/37cf6c7f6b41fc544c4bf20fd9b99ea8.jpg" alt="" className="acc-products" />
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjduz6achEOGvFZlpTcP1AOFdS8LDT6KWkmg&s" alt="" className="acc-products" />
                    <img src="https://euromodapr.com/cdn/shop/collections/2M3A0275_1.jpg?v=1676298921&width=1100" alt="" className="acc-products" />
                </div>
            </section>

            <section className="products-section">
                <h2 className="products-category-title">Sale</h2>
                <div className="products-grid">
                    
                </div>
            </section>
        </div>
    




    </>
  )
}

export default Allproducts;