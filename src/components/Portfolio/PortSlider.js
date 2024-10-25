import Image from "next/image";
import React from "react";
import PortImage from "../image/portfolio.png";
import Flex from "../Flex/Flex";
import Link from "next/link";
import { IoIosLink } from "react-icons/io";
import { IoLogoGithub } from "react-icons/io";
import Header from "../Header/Header";

const PortSlider = () => {
  return (
    <>
      <div className="rounded-md h-[550px] relative group overflow-hidden transition-all duration-500  hover:-translate-y-6  delay-300	ease-in-out">
        <div className="absolute inset-0 opacity-80 bg-black w-full h-full z-10 transform translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></div>
        <Image
          src={PortImage}
          alt="coding"
          width={800}
          height={600}
          className="hover:rotate-[5deg] group-hover:scale-125  rounded-md transition-all duration-300 ease-linear h-full"
        />
        <div className="px-10 absolute text-center  group-hover:bottom-[20%]  w-full group-hover:block z-50 transition-transform duration-500 ease-out">
          <Flex className="justify-center items-center gap-8">
            <Link href="/" className="text-xl font-bold  capitalize ">
              <div className="flex items-center justify-center">
                <div className="relative group">
                  <button className="relative inline-block p-px bg-name-gradient  hover:bg-designation-gradient  font-semibold leading-6 text-black  shadow-2xl cursor-pointer rounded-xl shadow-zinc-900 transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95">
                    <span className="absolute inset-0 rounded-xl hover:bg-name-gradient p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>

                    <span className="relative z-10 block px-6 py-3 rounded-xl bg-gray-950">
                      <div className="relative z-10 flex items-center space-x-2">
                        <span className="transition-all duration-500 group-hover:translate-x-1 ">
                          GitHub
                        </span>
                        <IoLogoGithub />
                      </div>
                    </span>
                  </button>
                </div>
              </div>
            </Link>
            <Link href="/" className="text-xl font-bold text-white  capitalize">
              <div className="flex items-center justify-center">
                <div className="relative group">
                  <button className="relative inline-block bg-designation-gradient  hover:bg-name-gradient p-px font-semibold leading-6 text-black  shadow-2xl cursor-pointer rounded-xl shadow-zinc-900 transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95">
                    <span className="absolute inset-0 rounded-xl hover:bg-name-gradient p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>

                    <span className="relative z-10 block px-6 py-3 rounded-xl bg-gray-950">
                      <div className="relative z-10 flex items-center space-x-2">
                        <IoIosLink />
                        <span className="transition-all duration-500 group-hover:translate-x-1 ">
                          Live Preview
                        </span>
                      </div>
                    </span>
                  </button>
                </div>
              </div>
            </Link>
          </Flex>
          <Header
            title="  React js webpage with html css tailwind css"
            className="text-3xl mt-6   pointer before:w-[40px] before:h-[30px] rounded-full before:bottom-[-10%] before:right-[15%] leading-10 z-[999]"
          />
        </div>
      </div>
    </>
  );
};

export default PortSlider;
