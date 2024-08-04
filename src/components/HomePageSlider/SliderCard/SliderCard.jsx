import React from "react";
import Icon from "../../Common/Icon";

function SliderCard({ item, index }) {
  return (
    <div className="bg-white rounded-lg w-96 flex-shrink-0 h-[26.875rem]  border-2 border-white flex flex-col justify-evenly px-8 py-4 shadow-xs">
      <div className="flex align-center">
        <Icon icon={item.icon} />
        <span className="text-2xl font-bold text-darkGrey ml-4">
          {item.companyName}
        </span>
      </div>
      <p className="text-2xl">{item.description}</p>
      <div className="flex gap-2 items-center">
        <img src={item.img} alt="#" />
        <span>
          <h4 className="text-lg">{item.userName}</h4>
          <p className="text-darkGrey">{item.userTitle}</p>
        </span>
      </div>
    </div>
  );
}

export default SliderCard;
