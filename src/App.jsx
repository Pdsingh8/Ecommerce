// import viteLogo from '/vite.svg'
import React, { useState } from "react";
// import Card  from "./Card";
import Nav from "./components/navbar/Nav";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/homepage/Home";
import Footer from "./components/Footer/Footer";
import Men from "./components/category/Men";
import Women from "./components/category/Women";
// import Addcart from "./components/Products/Addcart";
import Addcart from "./components/Products/Addcart";
import Wishlist from "./components/wishlist/Wishlist";
import Signin from "./components/registration/Signin";
import Signup from "./components/createaccount/Signup";
// import Orders from "./components/orders/Orders";
import Checkout from "./components/checkout/Checkout";
import Profile from "./components/Profile/Profile";
import Intropage from "./components/Intro/Intropage";
import Aboutus from "./components/Aboutus/Aboutus";
import Productdetails from "./components/Productdetails/Productdetails";
import WomenDetails from "./components/Productdetails/WomenDetails";
import Contactus from "./components/Contactus/Contactus";
import Allproducts from "./components/Allproducts/Allproducts";


function App() {
 
  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Intropage />} />
          <Route path="/Men" element={<Men />} />
          <Route path="/Women" element={<Women />} />
          <Route path="/Addcart" element={<Addcart />} />
          <Route path="/Wishlist" element={<Wishlist />} />
          <Route path="/Signin" element={<Signin />} />
          <Route path="/Signup" element={<Signup />} />
          {/* <Route  path="/Orders" element={<Orders/>}/> */}
          <Route path="/Checkout" element={<Checkout />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Intropage" element={<Intropage />} />
          <Route path="/Aboutus" element={<Aboutus />} />
          <Route path="/Productdetails/:id" element={<Productdetails />} /> 
          <Route path="/Details/:id" element={<WomenDetails/>} /> 
          <Route path="/Contactus" element={<Contactus />} />
          <Route path="/Allproducts" element={<Allproducts/>} />
          
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
