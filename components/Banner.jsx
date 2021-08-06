import React from "react";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] xxl:h-[700px]">
      <Image
        src="https://links.papareact.com/0fm"
        layout="fill"
        alt=""
        objectFit="cover"
        objectPosition="bottom"
      />
      <div className="absolute w-full text-center top-1/2">
        <p className="text-sm sm:text-lg">Not sure where to go? Perfect!</p>
        <button className="px-10 py-4 my-3 text-red-600 transition duration-150 bg-white rounded-full shadow-md hover:shadow-lg active:scale-90">
          I&apos;m flexible
        </button>
      </div>
    </div>
  );
};

export default Banner;
