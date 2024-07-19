import React, { useContext } from 'react';
import Pro from "../Context/Pro";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import './Wishlist.css';

function Wishlist() {
  const { wishlistItems, handleAddToCart } = useContext(Pro);

  return (
    <div className="wishlist-container">
      <h1 className='wishlist-title'>
        YOUR WISHLIST <div className="wishlist-heart-icon"><FaHeart /></div>
      </h1>
      {wishlistItems.length === 0 ? (
        <div className="wishlist-empty-message">
          <h2>No items in your wishlist</h2>
          <p>Your heart is full of dreams, but your wishlist is empty. Keep adding products to make your heart truly yours.</p>
        </div>
      ) : (
        <div className="wishlist-items-container">
          {wishlistItems.map((item) => (
            <div key={item.id} className="wishlist-item-box">
              <Link to={`/Productdetails/${item.id}`}>
                <img src={item.imgUrl} alt="" className="wishlist-item-image" />
              </Link>
              <div className="wishlist-item-info">
                <p className="wishlist-item-title">{item.title}</p>
                <p className="wishlist-item-company">{item.company}</p>
                <p className="wishlist-item-price">{item.price}</p>
              </div>
              <button className="wishlist-add-to-cart-button" onClick={() => handleAddToCart(item)}>Add to Cart</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Wishlist;
