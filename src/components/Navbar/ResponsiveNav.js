"use client";
import React, { useState } from "react";
import { MenuItems } from "./MenuData";
import Logo from "../image/Logo.svg";
import Buttons from "../Buttons/Button";
import Link from "next/link";
import Image from "next/image";
import { FaBarsStaggered } from "react-icons/fa6";
import { RiCloseFill } from "react-icons/ri";

const ResponsiveNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle menu open and close
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed w-full z-50 bg-gray-800 px-3 py-4  lg:hidden bg-gray opacity-80">
      <div className="flex justify-between items-center">
        <div className="w-1/6 ">
          <Link href="/">
            <Image src={Logo} alt="Logo" width={50} height={50} />
          </Link>
        </div>

        {/* Menu icon */}
        <div onClick={toggleMenu}>
          <FaBarsStaggered className="text-linkColor text-xl cursor-pointer" />
        </div>
      </div>

      {/* Overlay and Sidebar Menu */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-60 z-40 ${
          isOpen ? "block" : "hidden"
        }`}
        onClick={toggleMenu}
      />

      <div
        className={`fixed top-0 left-0 w-full h-full bg-gray-900 z-50 transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Close icon */}
        <div className="flex justify-between ">
          <div className="w-[60%] sm:w-[40%]  bg-gray opacity-80 h-screen">
            <nav className="flex flex-col  items-start pl-5  pt-5  space-y-4 ">
              {MenuItems.map((item, i) => (
                <Link key={i} href={item.link} passHref>
                  <span className="text-base font-normal hover:tracking-wider hover:font-medium text-linkColor hover:bg-header-gradient hover:text-transparent hover:bg-clip-text relative after:absolute after:content-[''] after:top-7 after:left-0  after:w-[0] after:h-[2px] hover:after:w-[100%] after:bg-header-gradient   after:transition-all after:ease-in after:duration-300 transition-all ease-linear duration-150 after:rounded-2xl">
                    {item.title}
                  </span>
                </Link>
              ))}
              <div className="mt-6">
                <Buttons href="/" title="Get Started" className="capitalize" />
              </div>
            </nav>
          </div>

          <div onClick={toggleMenu} className="pr-3 pt-5">
            <RiCloseFill className="text-linkColor text-3xl cursor-pointer " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResponsiveNav;
