import React from "react";
import sliderdata from "../Api/Slider.json";
import { Slidercard } from "./Slidercard";

export const Slider = ({ cart, setCart }) => {
  return (
    <div className="main-slider">
      {sliderdata.map((curr) => (
        <Slidercard key={curr.id} curr={curr} cart={cart} setCart={setCart} />
      ))}
    </div>
  );
};
