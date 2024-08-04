import React from "react";
import Icon from "../../Common/Icon";

function CommonCard({ img, title, description }) {
  return (
    <div className="shadow-md shadow-lightWhite bg-darkBlue max-w-[395px]">
      <img src={img} alt="#" className="w-auto h-auto" />
      <div className="py-6 px-4 h-64 flex flex-col justify-between">
        <h4 className="font-bold text-white text-2xl">{title}</h4>
        <p className="text-lg text-white">{description}</p>
        <a className="flex text-xl items-center border-2 rounded-lg border-white text-white gap-2 py-3 justify-center hover:text-darkBlue hover:bg-white">
          <Icon icon="ShoppingCart" className="hover:text-darkBlue" /> Buy Now
        </a>
      </div>
    </div>
  );
}

export default CommonCard;
