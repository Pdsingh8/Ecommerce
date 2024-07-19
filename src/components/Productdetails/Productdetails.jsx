import React, { useContext } from "react";
import "./Productdetails.css";
import { useParams} from "react-router-dom";
import Pro from "../Context/Pro";

const Productdetails = () => {

    const {MenData, handleAddToCart} = useContext(Pro)

  const { id } = useParams();
  const product = MenData.find((p) => p.id === parseInt(id));
  return (
    <div className="product-detail-container" key={id}>
      <div className="product-image">
        <img src={product.imgUrl} alt={product.name} />
      </div>
      <div className="product-info">
        <h1 className="product-name">{product.name}</h1>
        <p className="product-price">{product.price}</p>
        <p className="product-description">{product.company}</p>
        <p className="product-category">{product.title}</p>
        
        <button className="add-to-cart-btn" onClick={() => handleAddToCart(product) }>Add to Cart</button>
      </div>
    </div>
  );
};

export default Productdetails;
