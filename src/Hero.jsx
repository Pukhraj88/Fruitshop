import React from "react";
import HeroImg from "../public/1.png";
import "./Hero.css";

const Hero = () => {
  return (
    <div>
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-8 min-h-[600px] ">
        {/* text section */}
        <div className="flex flex-col justify-center gap-8 text-center md:text-left pt-24 md:p-0 pb-10">
          <h1 className="pt-0 text-4xl lg:text-6xl font-semibold lg:pl-8">
            Delicious Food Is Waiting For You
          </h1>
          <p className="text-justify pl-8 pr-8 lg:pl-8 lg:pr-4" id="decs">
            Our delicious dishes are crafted with fresh ingredients, ensuring
            that each bite is a delightful experience. Whether you're craving a
            hearty dinner or a quick snack, we’ve got you covered.{" "}
          </p>
          <div className="flex gap-4 items-center  justify-center">
            <button
              id="herobtn"
              className=" primary-btn hover:scale-105 duration-200"
            >
              Food Menu
            </button>
            <button
              id="herobtn"
              className=" secondary-btn text-black hover:scale-105 duration-200"
            >
              Book Table
            </button>
          </div>
        </div>

        {/* image section */}
        <div className="herodiv1 flex flex-col justify-center">
          <img
            src={HeroImg}
            alt="Delicious food"
            className="img-rotate w-[400px] mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
