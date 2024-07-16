import React, { useContext, useState } from "react";
import './Addcart.css';
import Pro from "../Context/Pro";

function Addcart() {

  const {cartItems} = useContext(Pro)
  console.log(cartItems);
  return (
    <div className="cart-container">
      <h1>Shopping Cart</h1>
      <div className="cart-items">
        {/* Example cart item - repeat this block for each item */}
        
        {
          cartItems.map((i) => (
            <div key={i.id}>
            <div className="cart-item">
            <img src={i.imgUrl} alt="Product" className="item-image" />
          <div className="item-details">
            <span className="item-name">P{i.name}</span>
            <span className="item-price">{i.price}</span>
            <span className="item-title">{i.title}</span>
            
          </div>
          <div className="item-actions">
            <input type="number" value="1" min="1" className="item-quantity" />
            <button className="remove-button">Remove</button>
          </div>
          </div>
          </div>
          ))
        }
        
        {/* End of cart item block */}
      </div>
      {/* <div className="cart-summary">
        <div className="summary-item">
          <span>Subtotal</span>
          <span>$59.98</span>
        </div>
        <div className="summary-item">
          <span>Taxes</span>
          <span>$4.80</span>
        </div>
        <div className="summary-item total">
          <span>Total</span>
          <span>$64.78</span>
        </div>
      </div> */}
      <button className="checkout-button">Proceed to Checkout</button>
    </div>
  );
}

export default Addcart;
