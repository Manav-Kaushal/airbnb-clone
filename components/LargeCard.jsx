import React from "react";
import Image from "next/image";
import { HiArrowNarrowRight } from "react-icons/hi";

const LargeCard = ({ img, title, desc, btnText }) => {

  return (
    <section className="relative py-16 cursor-pointer">
      <div className="relative h-96 min-w-[300px] ">
        <Image
          src={img}
          layout="fill"
          objectFit="cover"
          className="rounded-2xl"
        />
      </div>
      <div className="absolute top-32 left-12">
        <h3 className="w-64 mb-3 text-4xl">{title}</h3>
        <p>{desc}</p>
        <button
          className="flex items-center px-4 py-2 mt-5 text-lg text-white bg-gray-900 rounded-lg btn"
        >
          <p>{btnText}</p>
          <span className="icon">
            <HiArrowNarrowRight />
          </span>
        </button>
      </div>
    </section>
  );
};

export default LargeCard;
