import React from "react";
import Image from "next/image";

const MediumCard = ({ img, title }) => {
  return (
    <div className="cursor-pointer group">
      <div className="relative transition-all duration-500 ease-in-out transform group h-80 w-80">
        <Image
          src={img}
          alt=""
          layout="fill"
          className="transition-all duration-500 ease-in-out transform md:filter lg:grayscale group-hover:scale-110 group-hover:grayscale-0"
        />
      </div>
      <div className="md-card-title">
        <h3 className="mt-3 text-2xl">{title}</h3>
      </div>
    </div>
  );
};

export default MediumCard;
