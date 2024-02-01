import React from "react";
import { ReactTyped } from "react-typed";

const Banner = () => {
  return (
    <div className="bg-[#2699fb] w-full py-[150px]">
      <div className="max-width-[1240px] mx-auto text-center font-bold mt-4">
        <div className="text-black text-1xl md:text-2xl mt-4">
          Explore with us!
        </div>
        <h2 className="text-white text-4xl md:text-6xl mt-4">See the world.</h2>
        <div className="text-white text-3xl md:text-4xl mt-4">
          Enjoy
          <ReactTyped
          className="pl-3"
            strings={["Places", "Views"]}
            typeSpeed={200}
            loop={true}
          ></ReactTyped>

        </div>
        <button className="bg-black text-white p-3 rounded mt-8">lets explore</button>
      </div>
    </div>
  );
};

export default Banner;
