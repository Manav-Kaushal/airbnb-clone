import React, { useState } from "react";
import Image from "next/image";
import {
  HiSearch,
  HiGlobeAlt,
  HiMenu,
  HiUserCircle,
  HiUsers,
} from "react-icons/hi";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";

const Header = () => {
  const [searchInput, setSearchInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [guests, setGuests] = useState(1);

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  const resetInput = () => {
    setSearchInput("");
  };

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
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
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
        {searchInput && (
          <div className="flex flex-col col-span-3 mx-auto mt-5">
            <DateRangePicker
              className="mb-5"
              ranges={[selectionRange]}
              minDate={new Date()}
              rangeColors={["#F05B61"]}
              onChange={handleSelect}
            />
            <div className="flex items-center justify-center mb-4 border-b">
              <h2 className="flex-grow text-xl font-semibold">
                Number of Guests{" "}
                <span className="text-xs">(Max. allowed: 6)</span>
              </h2>
              <HiUsers className="h-5 mr-2" />
              <input
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                min={1}
                max={6}
                type="number"
                className="w-12 pl-3 text-red-400 bg-gray-100 py-0.5  rounded-full outline-none mb-1 text-normal"
              />
            </div>
            <div className="flex">
              <div className="items-center flex-grow text-center">
                <button
                  className="w-64 p-3 text-gray-500 bg-gray-100 rounded-full"
                  onClick={resetInput}
                >
                  Cancel
                </button>
              </div>
              <div className="items-center flex-grow text-center">
                <button className="w-64 p-3 text-white bg-red-400 rounded-full">
                  Search
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
