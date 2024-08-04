import React from "react";
import BannerCard from "./BannerCard";
// import BlueTriangle from "/BlueTriangle.png";
// import GreenTriangle from "/GreenTriangle.png";
// import Cartoon from "/Cartoon.png";
// import Circle from "/Circle.png";
// import TV from "/TV.png";
// import Cup from "/Cup.png";

const cardValues = [
  {
    icon: "/Cup.png",
    bgImg: "/BlueTriangle.png",
    title: "Nibh viverra",
    content:
      "Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa. ",
  },
  {
    icon: "/Cartoon.png",
    bgImg: "/GreenTriangle.png",
    title: "Cursus amet",
    content:
      "Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa. ",
  },
  {
    icon: "/TV.png",
    bgImg: "/Circle.png",
    title: "Ipsum fermentum",
    content:
      "Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa. ",
  },
];

function BannerBottom() {
  return (
    <div className="container mx-auto flex justify-between gap-20 max-md:flex-col">
      {cardValues.map((item, index) => (
        <BannerCard
          icon={item.icon}
          bgImg={item.bgImg}
          title={item.title}
          content={item.content}
        />
      ))}
    </div>
  );
}

export default BannerBottom;
