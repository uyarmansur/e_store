import React from "react";

function CommonCard({ img, title, description }) {
  return (
    <div className="shadow-md shadow-lightWhite bg-darkBlue">
      <img src={img} alt="#" className="w-auto h-auto" />
      <div className="py-6 px-4 h-64 flex flex-col justify-between">
        <h4 className="font-bold text-white text-2xl">{title}</h4>
        <p className="text-lg text-white">{description}</p>
        <a className="flex text-xl items-center border-2 rounded-lg border-white text-white gap-2 py-3 justify-center hover:text-darkBlue hover:bg-white">
          <img src="./Vector.png" alt="#" className="h-5" /> Buy Now
        </a>
      </div>
    </div>
  );
}

export default CommonCard;
