import React, { useState } from "react";
import SignInButton from "../Common/Button";
import Icon from "../Common/Icon";

const sections = ["Product", "Solutions", "Pricing", "Resources", "Log in"];

function Header() {
  const [menu, setMenu] = useState(false);

  return (
    <header className="relative">
      <div
        className={`absolute right-0 ${menu ? "flex" : "md:hidden"} md:hidden`}
      >
        <button
          type="button"
          onClick={() => setMenu(!menu)}
          className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
        >
          <span className="sr-only">Open main menu</span>
          <Icon
            icon="Search"
            aria-hidden="true"
            className="h-6 w-6 absolute inset-0 -z-30 object-cover"
          />
        </button>
      </div>
      <nav className={`container justify-between  flex`}>
        <h1 className="text-brown font-bold text-[2rem]">Collers</h1>
        <ul
          className={`flex gap-2 items-center max-md:flex-col ${
            menu ? "hidden" : "flex"
          }`}
        >
          {sections.map((item) => (
            <li className=" px-2 py-3 font-medium">
              <a href="#" className="text-brown">
                {item}
              </a>
            </li>
          ))}
          <li>
            <button className="px-4 py-3 text-brown font-medium border-2 border-brown rounded-lg hover:bg-brown hover:text-white transition-all">
              Sign Up Now
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
