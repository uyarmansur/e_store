import React, { useRef, useState } from "react";
import SliderCard from "./SliderCard/SliderCard";

import { PiArrowCircleRightThin, PiArrowCircleLeftThin } from "react-icons/pi";

const mockData = [
  {
    companyName: "Zoomer",
    userTitle: "Team Lead",
    description:
      "Non risus viverra enim, quis. Eget vitae arcu vivamus sit tellus, viverra turpis lorem. Varius a turpis urna id porttitor.",
    img: "./UserThumb.png",
    userName: "Hellen Johanson",
    icon: "Search",
  },

  {
    companyName: "Zoomer",
    userTitle: "Team Lead",
    description:
      "Non risus viverra enim, quis. Eget vitae arcu vivamus sit tellus, viverra turpis lorem. Varius a turpis urna id porttitor.",
    img: "./UserThumb.png",
    userName: "Hellen Johanson",
  },

  {
    companyName: "Zoomer",
    userTitle: "Team Lead",
    description:
      "Non risus viverra enim, quis. Eget vitae arcu vivamus sit tellus, viverra turpis lorem. Varius a turpis urna id porttitor.",
    img: "./UserThumb.png",
    userName: "Hellen Johanson",
  },

  {
    companyName: "Zoomer",
    userTitle: "Team Lead",
    description:
      "Non risus viverra enim, quis. Eget vitae arcu vivamus sit tellus, viverra turpis lorem. Varius a turpis urna id porttitor.",
    img: "./UserThumb.png",
    userName: "Hellen Johanson",
  },

  {
    companyName: "Zoomer",
    userTitle: "Team Lead",
    description:
      "Non risus viverra enim, quis. Eget vitae arcu vivamus sit tellus, viverra turpis lorem. Varius a turpis urna id porttitor.",
    img: "./UserThumb.png",
    userName: "Hellen Johanson",
  },

  {
    companyName: "Zoomer",
    userTitle: "Team Lead",
    description:
      "Non risus viverra enim, quis. Eget vitae arcu vivamus sit tellus, viverra turpis lorem. Varius a turpis urna id porttitor.",
    img: "./UserThumb.png",
    userName: "Hellen Johanson",
  },

  {
    companyName: "Zoomer",
    userTitle: "Team Lead",
    description:
      "Non risus viverra enim, quis. Eget vitae arcu vivamus sit tellus, viverra turpis lorem. Varius a turpis urna id porttitor.",
    img: "./UserThumb.png",
    userName: "Hellen Johanson",
  },

  {
    companyName: "Zoomer",
    userTitle: "Team Lead",
    description:
      "Non risus viverra enim, quis. Eget vitae arcu vivamus sit tellus, viverra turpis lorem. Varius a turpis urna id porttitor.",
    img: "./UserThumb.png",
    userName: "Hellen Johanson",
  },

  {
    companyName: "Zoomer",
    userTitle: "Team Lead",
    description:
      "Non risus viverra enim, quis. Eget vitae arcu vivamus sit tellus, viverra turpis lorem. Varius a turpis urna id porttitor.",
    img: "./UserThumb.png",
    userName: "Hellen Johanson",
  },

  {
    companyName: "Zoomer",
    userTitle: "Team Lead",
    description:
      "Non risus viverra enim, quis. Eget vitae arcu vivamus sit tellus, viverra turpis lorem. Varius a turpis urna id porttitor.",
    img: "./UserThumb.png",
    userName: "Hellen Johanson",
  },
];

const gap = 5;

function HomePageSlider() {
  const [slideWidth, setSlideWidth] = useState(300 + gap * 3);

  const handleRight = () => {
    const item = document.querySelector("#carousel");
    item.scrollLeft += slideWidth;
  };

  const handleLeft = () => {
    const item = document.querySelector("#carousel");
    item.scrollLeft -= slideWidth;
  };

  return (
    <div className="mx-auto">
      <div className="flex justify-between items-center container ">
        <h1 className="font-extrabold text-xxl">Because They Love Us</h1>
        <div className="flex gap-4 max-lg:hidden">
          <PiArrowCircleLeftThin
            className="text-xxl text-brown"
            onClick={handleLeft}
          />
          <PiArrowCircleRightThin
            className="text-xxl text-brown"
            onClick={handleRight}
          />
        </div>
      </div>
      <div className="relative py-10">
        <div className="bg-coldYellow h-[400px] absolute top-0 bottom-0 left-[40px] right-[40px]"></div>
        <div
          id="carousel"
          className={`overflow-x-scroll transition-all no-scrollbar relative`}
          style={{ scrollBehavior: "smooth" }}
        >
          <div className={`flex duration-75 gap-${gap} z-10 py-2`}>
            {mockData.map((item, index) => (
              <SliderCard index={index} item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePageSlider;
