import React from "react";
// import Card from "../../Card";
import Pro from "../Context/Pro";
import { useContext } from "react";
import { Link } from "react-router-dom";


function Home() {
   
     const {HomeData} = useContext(Pro)

  return (
    <>
     
      {/* <div className="mainbox">
        {data.map((i) => (
          <Card
            imgUrl={i.imgUrl}
            title={i.title}
            company={i.company}
            price={i.price}
          />
          
        ))}
        
      </div> */}

      
     
              {
                HomeData.map((i) => {
                 <Link to={`/Productdetails/${i.id}`}>
                 <div className="box">
                  <img
                        src={i.imgUrl}
                        alt=""
                        className="img1"
                    />
                    <div className="info">
                        <p className="infos" >{i.title}</p>
                        <p className="infos">{i.company}</p>
                        <p className="infos">{i.price}</p>
                    </div>
                    </div>
                 </Link>
                })
              }
    </>
  );
}

export default Home;

{
  
}
