import Image from "next/image";
import React from "react";
import Flex from "../Flex/Flex";
import Link from "next/link";
import { IoIosLink } from "react-icons/io";
import { IoLogoGithub } from "react-icons/io";
import Header from "../Header/Header";
import { portfolioData } from "./portfolioData";

const PortSlider = () => {
  return (
    <>
      {portfolioData.map((item, i) => (
        <div
          key={i}
          className="rounded-xl  hover:border-linkColor hover:border-2 relative group overflow-hidden transition-all duration-500  hover:-translate-y-6  delay-300	ease-in-out box-border"
        >
          <div className="absolute inset-0 opacity-80 bg-[#000807] w-full h-full z-10 transform translate-y-full group-hover:translate-y-[58%] transition-transform duration-500 ease-out"></div>
          <Image
            src={item.image}
            alt="coding"
            width={800}
            height={600}
            className="hover:rotate-[5deg] group-hover:scale-125  rounded-md transition-all duration-300 ease-linear h-full"
          />
          <div className="px-10 absolute text-center  group-hover:bottom-[5%]  w-full group-hover:block z-50 transition-transform duration-500 ease-out">
            <Flex className="justify-center items-center gap-8">
              <Link
                target="_blank"
                href={item.githublink}
                className="text-xl font-bold  capitalize "
              >
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
              <Link
                target="_blank"
                href={item.livelink}
                className="text-xl font-bold text-white  capitalize"
              >
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
            <h4 className="text-3xl text-transparent bg-clip-text bg-designation-gradient  relative text-sectionColor font-bold capitalize leading-[1.2] before:absolute before:bottom-0 before:right-[8%] before:content-['']  before:w-[35px] before:h-[20px]  before:bg-name-gradient  pb-4 inline-block before:rounded-t-lg  before:rounded-b-2xl before:rounded-l-3xl before:rounded-r-lg mt-6">
              Natto personal portfolio with Next.js and sass
            </h4>
          </div>
        </div>
      ))}
    </>
  );
};

export default PortSlider;
