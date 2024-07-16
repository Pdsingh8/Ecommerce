import React from 'react'
import "./Product.css";
import { CiHeart } from "react-icons/ci";


function Product({proimg,proname}) {
  return (
    <>
    
        <div className="ethnic">
         
            <img src={proimg} className='ethnicgirl'/>
            <h4> <button className='ethnic-wear'>{proname}</button></h4>
        </div>
    

    </>
    
  );
}

export default Product;