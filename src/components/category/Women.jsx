import React from "react";
import "./Women.css";
import Pro from "../Context/Pro";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";

function Women() {
    const { WomenData } = useContext(Pro);

    return (
        <div className="Women">
            {WomenData.map((i) => {
                return (
                    <div className="box" key={i.id}>
                    <Link to={`/Details/${i.id}`}><img src={i.imgUrl} alt="" className="img1" /> </Link>
                        <div className="info">
                            <p className="infos">{i.title}</p>
                            <p className="infos">{i.company}</p>
                            <p className="infos">{i.price}</p>
                        </div>
                        <FaHeart className="wishlist" />
                    </div>
                );
            })}
        </div>
    );
}

export default Women;