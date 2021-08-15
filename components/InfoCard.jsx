import React from "react";
import Image from "next/image";
import { HiOutlineHeart, HiStar, HiCheckCircle } from "react-icons/hi";
import ReactTooltip from "react-tooltip";
import { toast } from "react-toastify";

const notificationMessages = [
  "YAY! you've liked a room.",
  "We've added that for you!",
  "Nothing better than that room!",
  "Your list has been updated!",
];

const InfoCard = ({
  img,
  location,
  title,
  description,
  star,
  price,
  total,
}) => {
  const notifyRed = () => {
    let randomMessage =
      notificationMessages[
        Math.floor(Math.random() * notificationMessages.length)
      ];
    toast.error(`${randomMessage}`);
  };

  return (
    <div className="flex px-2 pr-4 my-5 transition ease-out border-b cursor-pointer group duration-400 py-7 hover:shadow-lg first:border-t">
      <div className="relative flex-shrink-0 w-40 h-24 md:h-52 md:w-80">
        <Image
          src={img}
          alt=""
          layout="fill"
          objectFit="cover"
          className="transition ease-linear transform rounded-2xl duration-400"
        />
      </div>
      <div className="flex flex-col flex-grow pl-5">
        <div className="flex justify-between">
          <p>{location}</p>
          <HiOutlineHeart
            data-tip="Add to favorites"
            onClick={notifyRed}
            className="w-6 h-6 transition transform outline-none cursor-pointer heart-icon hover:scale-125 duration-400 active:scale-95"
          />
          <ReactTooltip
            data-for="heart-icon"
            place="left"
            effect="solid"
            backgroundColor="#F05B61"
            className="mr-2"
          />
        </div>
        <h4 className="text-2xl">{title}</h4>
        <div className="w-10 pt-2 border-b" />
        <p className="flex-grow pt-2 text-sm text-gray-500">{description}</p>
        <div className="flex items-end justify-between pt-5">
          <p className="flex items-center">
            <HiStar className="w-5 h-5 text-red-400" />
            {star}
          </p>
          <div>
            <p className="pb-2 text-lg font-semibold lg:text-2xl">{price}</p>
            <p className="text-right font-extralight">{total}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
