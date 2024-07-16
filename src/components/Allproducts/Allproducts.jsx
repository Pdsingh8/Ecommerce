import React from 'react'
import "./Allproducts.css"

function Allproducts() {
  return (
    <>
   
        <div className="products-container">
            <section className="products-hero">
                <h1 className="products-title">Our Products</h1>
                <p className="products-subtitle">Discover our diverse range of clothing for men and women.</p>
            </section>

            <section className="products-section men-section">
                <h2 className="products-category-title">Men's Clothing</h2>
                <div className="products-grid men-grid">
                    <div className="product-image-container large">
                        <img src="path_to_men_image1.jpg" alt="Men's Clothing 1" />
                    </div>
                    <div className="product-image-container medium">
                        <img src="path_to_men_image2.jpg" alt="Men's Clothing 2" />
                    </div>
                    <div className="product-image-container small">
                        <img src="path_to_men_image3.jpg" alt="Men's Clothing 3" />
                    </div>
                    <div className="product-image-container medium">
                        <img src="path_to_men_image4.jpg" alt="Men's Clothing 4" />
                    </div>
                </div>
            </section>

            <section className="products-section women-section">
                <h2 className="products-category-title">Women's Clothing</h2>
                <div className="products-grid women-grid">
                    <div className="product-image-container small">
                        <img src="path_to_women_image1.jpg" alt="Women's Clothing 1" />
                    </div>
                    <div className="product-image-container large">
                        <img src="path_to_women_image2.jpg" alt="Women's Clothing 2" />
                    </div>
                    <div className="product-image-container medium">
                        <img src="path_to_women_image3.jpg" alt="Women's Clothing 3" />
                    </div>
                    <div className="product-image-container small">
                        <img src="path_to_women_image4.jpg" alt="Women's Clothing 4" />
                    </div>
                </div>
            </section>

            <section className="products-section accessories-section">
                <h2 className="products-category-title">Accessories</h2>
                <div className="products-grid accessories-grid">
                    <div className="product-image-container medium">
                        <img src="path_to_accessories_image1.jpg" alt="Accessory 1" />
                    </div>
                    <div className="product-image-container small">
                        <img src="path_to_accessories_image2.jpg" alt="Accessory 2" />
                    </div>
                    <div className="product-image-container large">
                        <img src="path_to_accessories_image3.jpg" alt="Accessory 3" />
                    </div>
                    <div className="product-image-container medium">
                        <img src="path_to_accessories_image4.jpg" alt="Accessory 4" />
                    </div>
                </div>
            </section>

            <section className="products-section sale-section">
                <h2 className="products-category-title">Sale</h2>
                <div className="products-grid sale-grid">
                    <div className="product-image-container large">
                        <img src="path_to_sale_image1.jpg" alt="Sale Item 1" />
                    </div>
                    <div className="product-image-container small">
                        <img src="path_to_sale_image2.jpg" alt="Sale Item 2" />
                    </div>
                    <div className="product-image-container medium">
                        <img src="path_to_sale_image3.jpg" alt="Sale Item 3" />
                    </div>
                    <div className="product-image-container small">
                        <img src="path_to_sale_image4.jpg" alt="Sale Item 4" />
                    </div>
                </div>
            </section>
        </div>
   

    </>
  )
}

export default Allproducts;