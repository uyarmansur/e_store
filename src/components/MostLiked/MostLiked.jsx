import React from "react";
import Button from "../Common/Button";
import CommonCard from "./CommonCard/CommonCard";

const cardContents = [
  {
    img: "/Nike.png",
    title: "Nike",
    description:
      "Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.",
  },
  {
    img: "/Shoes.png",
    title: "Shoes",
    description:
      "Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.",
  },
  {
    img: "/Converse.png",
    title: "Converse",
    description:
      "Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.",
  },
];

function MostLiked() {
  return (
    <div className="bg-darkBlue min-h-[776px] flex items-center">
      <div className="mx-auto  p-4 flex flex-col gap-10">
        <div className="flex container justify-between  max-md:flex-col max-md:items-center max-md:gap-5">
          <h1 className="font-extrabold text-xxl h-[62px] text-white">
            The Best of The Best
          </h1>
          <Button
            title="Sign up now"
            className=" border-white text-white h-auto hover:bg-white hover:text-darkBlue max-md:h-[64px] max-md:w-[233px]"
          />
        </div>
        <div
          style={{
            backgroundImage: "url(/Backlights.png)",
          }}
          className="bg-contain bg-no-repeat p-2 md:p-10 py-6"
        >
          <div className="container  flex justify-between gap-9 flex-col md:flex-row max-md:items-center">
            {cardContents.map((item) => (
              <CommonCard
                img={item.img}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MostLiked;
