import React from "react";
import FooterLinks from "../utils/FooterData";

const Footer = () => {
  return (
    <div className="grid grid-cols-1 px-32 text-gray-600 bg-gray-100 gap-y-10 items-top md:grid-cols-4 py-14">
      {FooterLinks.map((data) => (
        <>
          <div key={data.title} className="space-y-2 text-gray-800">
            <h5 className="text-lg font-bold uppercase select-none">
              {data.title}
            </h5>
            {data.links.map((item, index) => {
              return (
                <p
                  className="text-sm transition ease-out cursor-pointer hover:text-red-400 duration-400"
                  key={index}
                >
                  {item.link}
                </p>
              );
            })}
          </div>
        </>
      ))}
    </div>
  );
};

export default Footer;
