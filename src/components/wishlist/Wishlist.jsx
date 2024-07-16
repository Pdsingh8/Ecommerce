import React from 'react'
import './Wishlist.css'
import { FaHeart } from "react-icons/fa";
function Wishlist() {
    return (
    <>
    <div className="wishbox">
        <h1 className='wishlist-h1'>YOUR WISHLIST <div className="heart"><FaHeart /></div></h1>
        {/* <div className="heart"><FaHeart /></div> */}
        <div className="your-wishlist">
            <h2>No items in your wishlist</h2>
            <p>Your heart is full of dreams, but your wishlist is empty. Keep adding products to make your heart truly yours.</p>
            <button className="add-to-cart">Add to Cart</button>
        </div>
        <div className="wishproducts">
        </div>
    </div>
    </>
    
    )
}

export default Wishlist