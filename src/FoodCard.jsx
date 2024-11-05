import React from "react";
import { AiFillStar } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import "./FoodCard.css";

const FoodCard = ({
  id,
  name,
  price,
  desc,
  img,
  rating,
  handleToast,
  cart,
  setCart,
}) => {
  const dispatch = useDispatch();

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
    <div className="maindivfoodcart font-bold  bg-white p-5 flex flex-col rounded-lg gap-2 shadow-md hover:shadow-lg transition-shadow duration-300">
      <img
        src={img}
        alt={name}
        className="imgfoodcart h-[130px] object-cover rounded-t-lg transition-transform duration-500 ease-in-out hover:scale-110"
      />
      <div className="text-sm flex justify-between mt-2">
        <h2 className="text-lg font-semibold">{name}</h2>
        <span className="text-green-500">₹{price}</span>
      </div>
      <p className="text-sm font-normal text-gray-600">
        {desc.slice(0, 50)}...
      </p>
      <div className="flex justify-between items-center mt-auto">
        <span className="flex justify-center items-center text-yellow-500">
          <AiFillStar className="mr-1" /> {rating}
        </span>
        <button
          onClick={addToCart}
          className="p-2 text-white bg-green-500 hover:bg-green-600 rounded-lg text-sm transition-colors duration-300"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default FoodCard;
