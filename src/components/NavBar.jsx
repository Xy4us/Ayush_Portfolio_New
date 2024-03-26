import React from "react";
import { Link } from "react-scroll";

const NavBar = () => {
  return (
    <div className="w-full fixed flex top-0 justify-center items-center z-[50] shadow-lg shadow-[#815ac0]/40  backdrop-blur-sm">
      <div className="w-full rounded-lg p-2 md:w-[75%] flex justify-between ">
        <div className="w-[50%] flex items-center justify-start ">
          <Link
            to="home"
            smooth={true}
            className="hidden sm:block text-4xl text-fifth font-custom1 font-bold cursor-pointer"
          >
            Ayush
          </Link>

          <Link
            to="/"
            className="sm:hidden block drop-shadow-2xl text-3xl custom-text-color font-custom2 font-bold cursor-pointer"
          >
            AK
          </Link>
        </div>
        <ul className="hidden w-[50%] md:flex items-center justify-between p-1">
          <Link
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            duration={750}
            className="cursor-pointer hover:text-tertiary duration-200 ease-in-out text-lg"
          >
            Home
          </Link>
          <Link
            activeClass="active"
            className="cursor-pointer hover:text-tertiary duration-200 ease-in-out text-lg"
            to="about"
            spy={true}
            smooth={true}
            duration={750}
            offset={-150}
          >
            About
          </Link>
          <Link
            activeClass="active"
            to="skills"
            spy={true}
            smooth={true}
            duration={750}
            offset={-150}
            className="cursor-pointer hover:text-tertiary duration-200 ease-in-out text-lg"
          >
            Skills
          </Link>
          <Link
            activeClass="active"
            to="qualification"
            spy={true}
            smooth={true}
            duration={750}
            offset={-150}
            className="cursor-pointer hover:text-tertiary duration-200 ease-in-out text-lg"
          >
            Qualification
          </Link>
          <Link
            activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
            duration={750}
            offset={-150}
            className="cursor-pointer hover:text-tertiary duration-200 ease-in-out text-lg"
          >
            Projects
          </Link>
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            duration={750}
            className="cursor-pointer hover:text-tertiary duration-200 ease-in-out text-lg"
          >
            Contact Me
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
