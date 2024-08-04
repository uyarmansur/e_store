import React from "react";

function BannerCard({ icon, bgImg, title, content }) {
  return (
    <div className="min-h-52 flex flex-col justify-between max-md:items-center">
      <span className="relative w-16">
        <img src={icon} alt="icon" />
        <img src={bgImg} alt="bgImg" className="absolute top-0 -right-5" />
      </span>
      <h4 className="font-medium text-xl">{title}</h4>
      <p className="text-lg">{content}</p>
    </div>
  );
}

export default BannerCard;
