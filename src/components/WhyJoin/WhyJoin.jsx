import React from "react";
import Button from "../Common/Button";

function WhyJoin() {
  return (
    <div className="container mx-auto min-h-[816px] flex items-center relative">
      <div className="bg-white gap-20 p-10 px-4 md:px-10 rounded-4xl shadow-xxsm shadow-black w-full flex flex-col md:flex-row md:py-20">
        <div className="flex flex-col items-start gap-5 my-auto">
          <h2 className="text-xxl font-extrabold">Why Join Us</h2>
          <div className="flex flex-col gap-5">
            <p className="flex gap-3 text-xl">
              <img src="/check.png" alt="#" />
              Est et in pharetra magna adipiscing ornare aliquam.
            </p>
            <p className="flex gap-3 text-xl">
              <img src="/check.png" alt="#" />
              Tellus arcu sed consequat ac velit ut eu blandit.
            </p>
            <p className="flex  text-xl gap-3">
              <img src="/check.png" alt="#" />
              Ullamcorper ornare in et egestas dolor orci.
            </p>
          </div>
          <Button
            title="Sign Up Now"
            className="text-brown border-brown hover:text-white hover:bg-brown px-10 py-3"
          />
        </div>
        <div className="w-full md:w-[600px] h-[290px] relative md:absolute right-0">
          <img
            className="absolute -right-4 top-1/2 -translate-y-1/2 "
            src="/Deco-video.png"
          />
          <div className="absolute top-0 bottom-0 flex items-center w-[600px]">
            <img className="absolute" src="/Desktop.png" alt="#" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyJoin;
