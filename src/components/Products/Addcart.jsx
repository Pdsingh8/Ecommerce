import React, { useContext } from "react";
import './Addcart.css';
import Pro from "../Context/Pro";

function Addcart() {
  const { cartItems, handleRemoveFromCart, handleIncreaseQuantity, handleDecreaseQuantity } = useContext(Pro);

  return (
    <div className="cart-container">
      <h1>Shopping Cart</h1>
      <div className="cart-items">
        {cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.imgUrl} alt="Product" className="item-image" />
            <div className="item-details">
              <span className="item-name">{item.title}</span>
              <span className="item-price">{item.price}</span>
              <span className="item-title">{item.company}</span>
            </div>
            <div className="item-actions">
              <button onClick={() => handleDecreaseQuantity(item.id)}>-</button>
              <span className="item-quantity">{item.quantity}</span>
              <button onClick={() => handleIncreaseQuantity(item.id)}>+</button>
              <button onClick={() => handleRemoveFromCart(item.id)} className="remove-button">Remove</button>
            </div>
          </div>
        ))}
      </div>
      <button className="checkout-button">Proceed to Checkout</button>
    </div>
  );
}

export default Addcart;
