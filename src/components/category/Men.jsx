import React from "react";
import Pro from "../Context/Pro";
import { useContext } from "react";
import "./Men.css"
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";



function Men() {
  const { MenData,handleAddToWishlist } = useContext(Pro);
  


  return (
      
      <div className="men">
        {MenData.map((i) => {
          return (
            
            <div className="box">
            <Link to={`/Productdetails/${i.id}`}><img src={i.imgUrl} alt="" className="img1" /> </Link>
              <div className="info">
                <p className="infos">{i.title}</p>
                <p className="infos">{i.company}</p>
                <p className="infos">{i.price}</p>
              </div>
              <button><FaHeart className="wishlist" onClick={() => handleAddToWishlist(i)} /></button> 
            </div>
          );
        })}
      </div>
    // </div>
  );
}

export default Men;