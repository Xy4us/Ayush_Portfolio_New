import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="w-full fixed flex top-0 justify-center items-center z-[50] shadow-lg shadow-[#2A0E61]/50 backdrop-blur-sm">
      <div className="w-full rounded-lg p-2 md:w-[75%] flex justify-between ">
        <div className="w-[50%] flex items-center justify-start ">
          <Link
            to="/"
            className="hidden sm:block drop-shadow-2xl text-3xl custom-text-color font-custom2 font-bold cursor-pointer"
          >
            Ayush Kumar
          </Link>

          <Link
            to="/"
            className="sm:hidden block drop-shadow-2xl text-3xl custom-text-color font-custom2 font-bold cursor-pointer"
          >
            AK
          </Link>
        </div>
        <ul className="hidden w-[50%] md:flex items-center justify-between p-1">
          <li className="cursor-pointer hover:text-tertiary duration-150 ease-in-out text-xl">
            Home
          </li>
          <li className="cursor-pointer text-lg">About</li>
          <li className="cursor-pointer text-lg">Skiils</li>
          <li className="cursor-pointer text-lg">Projects</li>
          <li className="cursor-pointer text-lg">Contact Me</li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
