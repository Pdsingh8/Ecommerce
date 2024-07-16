import React from "react";
import "./Checkout.css";

function Checkout() {
    return (
    <>
    <h4>Checkout</h4>

    <div className="main-check">
        <div className="billing">
        <label htmlFor="f-name">Full Name </label>
        <input type="text" placeholder="Enter full name" /> <br />
        <label htmlFor="email">Email Address </label>
        <input
            type="email"
            className="email"
            placeholder="example@gmail.com"
            />
            <br />
            <label htmlFor="address">Address</label>
            <input type="text" placeholder="542. w street" /> <br />
            <label htmlFor="city">City</label>
            <input type="text" placeholder="New York City" /> <br />
            <div className="state">
            <label htmlFor="stete">State</label>
            <input type="text" placeholder="NY" />

            <label htmlFor="zip">Zip</label>
            <input type="text" placeholder="10121121" />
        </div>
        </div>

        <div className="payment">
            <h5 className="payment-h5">Payment</h5>
            <h6 className="Accepted-h6">Accepted Cards</h6>
            <img
            src="https://images.ctfassets.net/214q1nptnllb/4E1cO96NIimXWGAD1CSJ1f/7276bd346b00bc2ddcef8b3218a5f065/Accepted_cards_-_SumUp_Tap.svg"
            className="mode"
            />

            <div className="form1">
            <label htmlFor="cardname" className="cardname">Name On Card</label>
        <input type="text" id="cardNAME" required/><br />

        <label htmlFor="card">Credit card Number</label>
        <input type="text" className="ccnum" />

        <label htmlFor="exp">Expiry Month</label>
        <input type="text" className="exp" />

        <div className="cvv">
            <label htmlFor="expyear">Exp year</label>
            <input type="text" className="exyear" />
            <label htmlFor="cvv">CVV</label>
            <input type="text" placeholder="3144" />
            </div>
            
            </div>
            
            

        </div>

        
        </div>
        <button className="checkout1">
            Continue to Checkout
        </button>

        
    </>
  );
}

export default Checkout;
