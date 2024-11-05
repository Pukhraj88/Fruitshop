import React from "react";
import { toast } from "react-toastify";

export const Slidercard = ({ curr, cart, setCart }) => {
  const { id, img, name, price } = curr;

  const addToCart = () => {
    const obj = { id, name, price, img };

    // Check for duplicates
    if (!cart.some((item) => item.id === id)) {
      setCart((prev) => [...prev, obj]);
      toast.success("Item added to cart", {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } else {
      toast.info("Item is already in the cart", {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };

  return (
    <div className="slider-inside">
      <div className="universalimg">
        <img src={img} alt={name} className="slider-img" />
      </div>
      <div className="universal">
        <span className="span-name">
          <h1>{name}</h1>
        </span>
      </div>
      <div className="universal">
        <button className="sliderbtn" onClick={addToCart}>
          Buy Now!
        </button>
      </div>
    </div>
  );
};
