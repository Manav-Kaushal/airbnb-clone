import React from "react";
import Image from "next/image";
import { HiSearch, HiGlobeAlt, HiMenu, HiUserCircle } from "react-icons/hi";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 p-5 bg-white shadow-md md:px-10">
      <div className="relative flex items-center h-10 cursor-pointer">
        <Image
          src="https://links.papareact.com/qd3"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>
      <div className="flex items-center rounded-full md:border-2 md:shadow-sm">
        <input
          className="flex-grow pl-5 text-sm text-gray-600 placeholder-gray-400 bg-transparent outline-none"
          type="text"
          placeholder="Start your search"
        />
        <HiSearch className="hidden p-1.5 mx-auto text-white bg-red-400 rounded-full cursor-pointer w-7 h-7 md:inline-flex md:mx-2" />
      </div>
      <div className="flex items-center justify-end space-x-4 text-gray-500">
        <p className="hidden cursor-pointer md:inline">Become a host</p>
        <HiGlobeAlt className="hidden w-6 h-6 cursor-pointer md:inline" />
        <div className="flex items-center p-2 space-x-2 border-2 rounded-full">
          <HiMenu className="w-6 h-6 cursor-pointer" />
          <HiUserCircle className="w-6 h-6 cursor-pointer" />
        </div>
      </div>
    </header>
  );
};

export default Header;
