



// Author: Pukhraj Nemiwal
// Date: 2024-10-31
// Description: BCA Final Year Project.
// Contact: pukhrajnemiwal9@gmail.com

import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Footer from "./Footer";
import { Specialoffer } from "./cart/Specialoffers";
import Cart from "./Cart";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./cart/Specialoffer.css";
import "./cart/Slider.css";
import "./index.css";
import FoodItems from "./FoodItems";
import CategoryMenu from "./CategoryMenu";

export const App = () => {
  const [cart, setCart] = useState([]);
  const [data, setData] = useState([]); // Replace with actual initial data

  return (
    <>
      <Router>
        <Navbar cart={cart} setData={setData} />
        <Hero />
        <Specialoffer cart={cart} setCart={setCart} />
        <Routes>
          <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
        </Routes>
        <CategoryMenu/>
      <FoodItems cart={cart} setCart={setCart} />

        <Footer />
      </Router>
      <ToastContainer />
    </>
  );
};

