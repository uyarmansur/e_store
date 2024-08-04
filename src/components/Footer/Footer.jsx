import React from "react";
import Icon from "../Common/Icon";

const titles = [
  {
    title: "Product",
    subTitles: ["Pricing", "Overview", "Browse", "Accessibility", "Five"],
  },
  {
    title: "Solutions",
    subTitles: [
      "Brainstorming",
      "Ideation",
      "Wireframing",
      "Research",
      "Design",
    ],
  },
  {
    title: "Support",
    subTitles: [
      "Contact Us",
      "Developers",
      "Documentation",
      "Integrations",
      "Reports",
    ],
  },
];

const socialMedia = ["Youtube", "Facebook", "Twitter", "Instagram", "Linkedin"];

const footerTerms = ["Terms", "Privcy", "Contact", "En"];

function Footer() {
  return (
    <div className="bg-darkBlue flex flex-col justify-around min-h-[564px] p-10">
      <div className=" container mx-auto flex justify-between text-white items-center h-full max-md:flex-col max-md:gap-8">
        {titles.map((item) => (
          <div>
            <h4 className="font-medium">{item.title}</h4>
            <ul>
              {item.subTitles.map((subTitle) => (
                <li className="mt-2">
                  <a href={subTitle}>{subTitle}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div className="flex flex-col justify-between h-[80%]">
          <div className="flex flex-col gap-5">
            <h4>Get The App</h4>
            <ul className="flex flex-col gap-3">
              <li>
                <a href="#">
                  <img src="/AppStoreFilled.png" alt="#" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="/GooglePlay.png" alt="#" />
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-6 mt-2">
            <h4>Follow Us</h4>
            <ul className="flex">
              {socialMedia.map((item) => (
                <li>
                  <a href="#">
                    <Icon icon={item} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className=" border-b-2 border-grey container mx-auto max-md:m-5"></div>
      <div className="flex justify-between text-white container mx-auto max-md:flex-col max-md:items-center gap-4 mt-2">
        <div>Collers @ 2023. All rights reserved.</div>
        <ul className="flex gap-4">
          {footerTerms.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Footer;
