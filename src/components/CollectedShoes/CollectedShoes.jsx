import React from "react";

function CollectedShoes() {
  return (
    <div className="bg-brown h-[717px] pt-10">
      <div
        style={{
          backgroundImage: "url(/chart.png)",
        }}
        className="bg-cover container bg-no-repeat min-h-[633px] max-w-[1049px] flex items-center justify-center relative pb-4 max-lg:flex-col max-lg:overflow-hidden"
      >
        <div className="flex flex-col items-center justify-center">
          <img
            src="/Ellipses.png"
            alt="$"
            className="absolute top-16 right-0 left-52 bottom-0"
          />

          <div className="">
            <p className="text-8xl font-extrabold text-white">11,658,467</p>
            <p className="text-xxl text-white font-extrabold">
              Shoes Collected
            </p>
          </div>
        </div>
        <div className="absolute left-0 -top-10 flex flex-col items-center">
          <img src="/Shoe.png" alt="shoe" className="z-20" />
          <div className="w-[80%]  absolute -bottom-6  p-2 pt-5 bg-lightGrey z-10">
            Emma Simpson collected one pair of <b>Cool Shoes</b>.
            <div class="w-4 overflow-hidden inline-block absolute -bottom-3 left-1/2 -translate-x-1/2">
              <div class=" h-3 w-3 bg-lightGrey  shadow-xsm  -rotate-45 transform origin-top-left"></div>
            </div>
          </div>
          <img src="/Ellipse.png" alt="#" className="-bottom-11 absolute" />
          {/* <img src="/ArrowBottom.png" alt="#" className="absolute -bottom-8 z-20 w-4"/>
           */}
        </div>
      </div>
    </div>
  );
}

export default CollectedShoes;
