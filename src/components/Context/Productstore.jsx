import { useState } from 'react';
import React from 'react'
import Pro from './Pro';


function Productstore({children}) {

    const MenData=[{
        id:1,
        imgUrl:
        "https://cdn.shopify.com/s/files/1/0347/3225/files/Mens_SmartCasual_16_600x600.jpg?v=1696430939",
        title: "Beige Trousers",
        company: "Stumble",
        price: "$199",
    },
    
    {
        id:2,
        imgUrl:
        "https://cdn.shopify.com/s/files/1/0266/6276/4597/files/formal_shirts_for_men_n.jpg?v=1677133017",
        title: "Formal Shirt",
        company: "Stumble",
        price: "$133",
    },
    {
                id:3,
        imgUrl:
        "https://cdn.shopify.com/s/files/1/0266/6276/4597/files/formal_shirts_for_men_fd416529-4692-4c64-810a-eb1d156088fc.jpg?v=1677785242",
        title: "Nike 5",
        company: "Stumble",
        price: "$1,23",
    },
    {
        id:4,
        imgUrl:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/a8317dc5-7ce1-42ff-b1da-71f08ff93ad4/court-vision-low-next-nature-shoes-N2fFHb.png",
        title: "Nike 5",
        company: "Stumble",
        price: "$1,23",
    },
    {
                id:5,
        imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU5T4d9a5k6qTn1cy5RDyvdL8qTWBqM0EQFg&usqp=CAU",
        title: "Nike 5",
        company: "Stumble",
        price: "$1,23",
    },
    {
        id:6,
        imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvj3QyhC7vxbCJnANbxfkbzCBNR4yqLTUGmQ&usqp=CAU",
        title: "Nike 5",
        company: "Stumble",
        price: "$1,23",
    },
    {
        id:7,
        imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrO8_e2R6S8SWnDGwRwlxRYYIZXR77gfGgNA&usqp=CAU",
        title: "Nike 5",
        company: "Stumble",
        price: "$1,23",
    },

    {
                id:8,
        imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOQW90EPyfn_8MXQFHeVmeGEVRomZy2nANjU_oLJdjqU1MmkZoSKvMSvWCBzFeICpJcDM&usqp=CAU",
        title: "Nike 5",
        company: "Stumble",
        price: "$1,23",
    },
    ]

    const WomenData = [
        {
          id: 1,
          imgUrl:
            "https://assets.ajio.com/medias/sys_master/root/20230928/NSZz/651502ceafa4cf41f514b5a0/-473Wx593H-469547075-black-MODEL.jpg",
          title: "Nike 5",
          company: "Air Max 2",
          price: "$1,23",
        },
    
        {
          id: 2,
          imgUrl:
            "https://assets.ajio.com/medias/sys_master/root/20230302/d0f3/6400bbf0f997dde6f4da9787/-473Wx593H-469434735-blackgrey-MODEL.jpg",
          title: "Nike 5",
          company: "Air Max 2",
          price: "$1,23",
        },
    
        {
          id: 3,
          imgUrl:
            "https://assets.ajio.com/medias/sys_master/root/20230302/d0f3/6400bbf0f997dde6f4da9787/-473Wx593H-469434735-blackgrey-MODEL.jpg",
          title: "Nike 5",
          company: "Air Max 2",
          price: "$1,23",
        },
        {
          id: 4,
          imgUrl:
            "https://assets.ajio.com/medias/sys_master/root/20230302/d0f3/6400bbf0f997dde6f4da9787/-473Wx593H-469434735-blackgrey-MODEL.jpg",
          title: "Nike 5",
          company: "Air Max 2",
          price: "$1,23",
        },
        {
          id: 5,
          imgUrl:
            "https://assets.ajio.com/medias/sys_master/root/20230302/d0f3/6400bbf0f997dde6f4da9787/-473Wx593H-469434735-blackgrey-MODEL.jpg",
          title: "Nike 5",
          company: "Air Max 2",
          price: "$1,23",
        },
        {
          id: 6,
          imgUrl:
            "https://assets.ajio.com/medias/sys_master/root/20230302/d0f3/6400bbf0f997dde6f4da9787/-473Wx593H-469434735-blackgrey-MODEL.jpg",
          title: "Nike 5",
          company: "Air Max 2",
          price: "$1,23",
        },
        {
          id: 7,
          imgUrl:
            "https://assets.ajio.com/medias/sys_master/root/20230302/d0f3/6400bbf0f997dde6f4da9787/-473Wx593H-469434735-blackgrey-MODEL.jpg",
          title: "Nike 5",
          company: "Air Max 2",
          price: "$1,23",
        },
        {
          id: 8,
          imgUrl:
            "https://assets.ajio.com/medias/sys_master/root/20230302/d0f3/6400bbf0f997dde6f4da9787/-473Wx593H-469434735-blackgrey-MODEL.jpg",
          title: "Nike 5",
          company: "Air Max 2",
          price: "$1,23",
        },
      ];

      const HomeData = [
        {
          id:1,
          imgUrl:
            "https://www.fashionbeans.com/wp-content/uploads/2018/09/formal-attire-img-2.jpg",
          title: "TUXEDO SUIT",
          company: "STUMBLE",
          price: "$1111",
        },
    
        {
          id:2,
          imgUrl:
            "https://media-api.xogrp.com/images/497df058-81bf-4adc-86d5-dfb75035af14~rs_768.h-cr_0.71.1690.2324",
          title: "WHITE SHIRT MEN'S",
          company: "STUMBLE",
          price: "$1111",
        },
    
        {
          id:3,
          imgUrl:
            "https://images.bestsellerclothing.in/data/selected/31-jan-2024/139024203_1.png?width=415&height=550&mode=fill&fill=blur&format=auto",
          title: "KHAKI SHIRT",
          company: "STUMBLE",
          price: "$1111",
        },
    
        {
              id:4,
          imgUrl:
            "https://us.images.westend61.de/0001431356i/side-view-of-serious-ethnic-male-entrepreneur-in-formal-wear-looking-away-while-standing-in-front-of-modern-business-center-ADSF08257.jpg",
          title: "BLUE MEN'S BLAZER",
          company: "STUMBLE",
          price: "$1111",
        },
    
        {
          id:5,
          imgUrl:
            "https://media-api.xogrp.com/images/d4c141f7-c302-4232-a91a-566ee94a80ba~rs_768.h-cr_0.0.1500.2000",
          title: "BROWN FORMAL SUIT",
          company: "STUMBLE",
          price: "$1111",
        },
    
        {
          id:6,
          imgUrl:
            "https://www.tasva.com/cdn/shop/products/TT29-Oct24237_1024x1024.jpg?v\u003d1641287552",
          title: "KURTA",
          company: "STUMBLE",
          price: "$1111",
        },
    
        {
          id:7,
          imgUrl:
            "https://manyavar.scene7.com/is/image/manyavar/JAST329-%20326-FEROZE_04-10-2023-10-15:283x395",
          title: "SPECIAL ETHNIC",
          company: "STUMBLE",
          price: "$1111",
        },
    
        {
          id:8,
          imgUrl:
            "https://www.praveenbhat.net/wp-content/uploads//2022/04/menswear-photoshoot-in-hotel0.jpgo",
          title: "ETHNIC",
          company: "STUMBLE",
          price: "$1111",
        },
      ];

      const [cartItems, setCartItems] = useState([]);
  const [wishlistItems, setWishlistItems] = useState([]);

  const handleAddToCart = (product) => {
    const updatedCart = [...cartItems, product];
    setCartItems(updatedCart);
  };

  const handleAddToWishlist = (product) => {
    const updatedWishlist = [...wishlistItems, product];
    setWishlistItems(updatedWishlist);
  };





    
    
    return(
        <>
        
        <Pro.Provider value={{MenData, HomeData, WomenData, handleAddToCart, handleAddToWishlist, cartItems}}>
        {children}
        </Pro.Provider>


        </>
    )

 
}

export default Productstore;