import React from "react";
import hunza from "../assets/images/hunza1.jpeg";
const Places = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className="w-[500px] mx-auto my-4" src={hunza} alt="/" />
        <div className="flex flex-col justify-center">
          <p className="text-[#00df9a] font-bold">True Beauty of Karakoram Highway</p>
          <p>
          Karakoram Highway is one of the most beautiful roads in the world.
            It is also known as N-35 in Pakistan and sometimes it is also
            referred to as China-Pakistan Friendship Highway.he total length of
            Karakoram highway is 1300 Kilometers.
          </p>
          <button className="bg-black text-white w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Places;
