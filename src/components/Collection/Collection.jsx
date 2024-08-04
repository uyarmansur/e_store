import React from "react";
import Icon from "../Common/Icon";

const listItems = [
  {
    icon: "Search",
    title: "BibendumTelnus",
  },
  {
    icon: "ShieldCheck",
    title: "Cras eget",
  },
  {
    icon: "Rocket",
    title: "Dolor pharete",
  },
  {
    icon: "Screen",
    title: "Amet, frigila",
  },
  {
    icon: "Podcast",
    title: "Amet, Nibh",
  },
  {
    icon: "Settings",
    title: "Sed velit",
  },
];

function Collection() {
  return (
    <div
      className="min-h-[996px] flex items-center bg-contain bg-bottom bg-no-repeat"
      style={{
        backgroundImage: "url(/Waves.png)",
      }}
    >
      <div className="container mx-auto gap-8 flex flex-col justify-around">
        <div>
          <h1 className="text-xxl font-extrabold">Grow your collection</h1>
          <p className="text-lg">
            Enim neque massa porta adipiscing elit. Sem libero id faucibus nibh
            amet dictum pellentesque sed. Eu non turpis risus odio sapien, fames
            sit rhoncus. Nec magna sed interdum sit purus tellus. Et volutpat
            proin neque placerat at bibendum quam tellus. heyyy   
          </p>
        </div>
        <div className="flex justify-between flex-col lg:flex-row max-md:overflow-hidden">
          <ul className="max-lg:flex max-lg:overflow-x-scroll max-lg:transition-all  no-scrollbar">
            {listItems.map((item) => (
              <li className="flex gap-2 text-xl font-medium items-center text-darkBlue p-4 group/item hover:bg-white rounded-lg hover:cursor-pointer">
                <Icon icon={item.icon} />
                <p>{item.title}</p>
                <span className="invisible group-hover/item:visible">
                  <Icon icon="ArrowRight" />
                </span>
              </li>
            ))}
          </ul>
          <img src="/CollectionImages.png" alt="desktop" />
        </div>
      </div>
    </div>
  );
}

export default Collection;
