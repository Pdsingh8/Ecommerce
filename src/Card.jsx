import React from "react";
import './App.css'
import { HiOutlineShoppingBag } from "react-icons/hi";
import { CiHeart } from "react-icons/ci";



function Card({imgUrl,title,company,price}) {
    return (
        <>
        
                <div className="box">
                    <img
                        src={imgUrl}
                        alt=""
                        className="img1"
                    />
                    <div className="info">
                        <p className="infos" >{title}</p>
                        <p className="infos">{company}</p>
                        <p className="infos">{price}</p>
                    </div>
                    <div className="add-button">
                        <button className="add-to-cart text-[#FF52AF]" ><HiOutlineShoppingBag/> Add to Cart</button>
                    </div>
                </div>
        </>
    );
}

export default Card;
