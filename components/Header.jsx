import React, { useState } from "react";
import Image from "next/image";
import { HiSearch, HiGlobeAlt, HiMenu, HiUserCircle } from "react-icons/hi";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white bg-opacity-50 shadow-md backdrop-filter backdrop-blur-md ">
      <div className="grid grid-cols-3 p-3.5 md:px-10">
        <div className="relative flex items-center h-10 cursor-pointer">
          <Image
            src="https://links.papareact.com/qd3"
            alt=""
            layout="fill"
            objectFit="contain"
            objectPosition="left"
          />
        </div>
        <div className="flex items-center rounded-full md:border md:shadow-sm md:border-gray-400">
          <input
            className="flex-grow pl-5 text-sm text-black placeholder-gray-600 bg-transparent outline-none"
            type="text"
            placeholder="Start your search"
          />
          <HiSearch className="hidden p-1.5 mx-auto text-white bg-red-400 rounded-full cursor-pointer w-7 h-7 md:inline-flex md:mx-2" />
        </div>
        <div className="flex items-center justify-end space-x-4 text-gray-800">
          <p className="hidden cursor-pointer md:inline">Become a host</p>
          <HiGlobeAlt className="hidden w-6 h-6 cursor-pointer md:inline" />
          <div className="flex items-center p-2 space-x-2 border border-gray-800 rounded-full">
            <HiMenu className="w-6 h-6 cursor-pointer" />
            <HiUserCircle className="w-6 h-6 cursor-pointer" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
