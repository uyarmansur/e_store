import React from "react";
import SignInButton from "../Common/Button";

function Banner() {
  return (
    <div className="py-[80px] container flex justify-between items-center max-md:flex-col max-md:text-center">
      <div className="flex flex-col gap-10 max-w-[44.6rem]">
        <h1 className="text-7xl font-extrabold">Collectible Sneakers</h1>
        <p className="text-lg">
          Sit elit feugiat turpis sed integer integer accumsan turpis. Sed
          suspendisse nec lorem mauris. Pharetra, eu imperdiet ipsum ultrices
          amet.
        </p>
        <div className="flex gap-4 max-md:mx-auto">
          <SignInButton
            title={"Sign Up Now"}
            className="text-brown border-brown hover:text-white hover:bg-brown px-10 py-3"
          />
          <span className="flex items-center text-center">
            <img className="w-6 h-6" src="/WatchDemo.png" alt="watchDemo" />
            <p className="text-brown font-medium">Watch demo</p>
          </span>
        </div>
      </div>
      <div>
        <img className="w-auto" src="/Col.png" alt="image" />
      </div>
    </div>
  );
}

export default Banner;
