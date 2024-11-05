import React from "react";
import FoodCard from "./FoodCard";
import FoodData from "./data/FoodData";
import { useSelector } from "react-redux";
import toast, { Toaster } from "react-hot-toast";

const FoodItems = ({ cart, setCart }) => {
  const category = useSelector((state) => state.category.category);
  const search = useSelector((state) => state.search.search); // Adjust if you have a search slice
  const handleToast = (name) => toast.success(`Added ${name} `);

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="flex flex-wrap gap-10 justify-center lg:justify-start mx-6 my-10">
        {FoodData.filter((food) => {
          const matchesCategory =
            category === "All" || food.category === category;
          const matchesSearch = food.name
            .toLowerCase()
            .includes(search.toLowerCase());
          return matchesCategory && matchesSearch;
        }).map((food) => (
          <FoodCard
            cart={cart}
            setCart={setCart}
            key={food.id}
            {...food}
            handleToast={handleToast}
          />
        ))}
      </div>
    </>
  );
};

export default FoodItems;
