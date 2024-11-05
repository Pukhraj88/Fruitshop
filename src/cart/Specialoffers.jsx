import React from "react";
import { Slider } from "./Slider";
import "./Specialoffer.css";

export const Specialoffer = ({ cart, setCart }) => {
  return (
    <div className="specialofferbanner">
      <div className="sliders-divhere">
        <Slider cart={cart} setCart={setCart} />
      </div>
    </div>
  );
};
