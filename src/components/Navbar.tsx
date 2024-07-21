"use client";

import { RiListUnordered } from "@remixicon/react";
import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`fixed top-0 inset-x-0 px-6 sm:px-10  bg-c_black z-10 ${
        isOpen ? "py-4 pb-0" : "py-4"
      }`}
    >
      <div className="flex flex-row items-center text-2xl text-c_white">
        <a href="#hero" className="cursor-pointer">
          <span>Nasi Tim Ayam Hong Lie Khuan</span>
        </a>

        {/* For Large Device */}
        <div className="ml-auto">
          <div
            className={`hidden sm:flex flex-row gap-5 text-xl ${
              isOpen ? "block" : "hidden"
            }`}
          >
            <a
              href="#menu"
              className="transition-all duration-300 cursor-pointer hover:text-c_primary"
            >
              Menu
            </a>
            <a
              href="#review"
              className="transition-all duration-300 cursor-pointer hover:text-c_primary"
            >
              Review
            </a>
            <a
              href="#about"
              className="transition-all duration-300 cursor-pointer hover:text-c_primary"
            >
              About Us
            </a>
          </div>
        </div>
        <span
          onClick={() => setIsOpen(!isOpen)}
          className="block sm:hidden transition-all duration-300 cursor-pointer hover:text-c_primary"
        >
          <RiListUnordered size={28} />
        </span>
      </div>

      {/* For Small Device */}
      {isOpen && (
        <div className="w-full h-auto flex flex-col text-c_white">
          <a
            href="#menu"
            className="py-4 text-center transition-all duration-300 cursor-pointer hover:text-c_white hover:bg-c_primary"
          >
            Menu
          </a>
          <a
            href="#review"
            className="py-4 text-center transition-all duration-300 cursor-pointer hover:text-c_white hover:bg-c_primary"
          >
            Review
          </a>
          <a
            href="#about"
            className="py-4 text-center transition-all duration-300 cursor-pointer hover:text-c_white hover:bg-c_primary"
          >
            About Us
          </a>
        </div>
      )}
    </div>
  );
};

export default Navbar;
