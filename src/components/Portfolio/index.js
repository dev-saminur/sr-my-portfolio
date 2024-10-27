import React from "react";
import Container from "../Container/Container";
import Header from "../Header/Header";
import PortSlider from "./PortSlider";

const Portfolio = () => {
  return (
    <>
      <div className="py-24">
        <div className="px-[100px] ">
          <div className="text-center mb-16">
            <Header title="My portfolio" />
            <div className="mt-8">
              <h4 className="text-3xl  text-transparent bg-clip-text bg-designation-gradient  relative text-sectionColor font-bold capitalize leading-[1.2] before:absolute before:bottom-0 before:right-[6%] before:content-['']  before:w-[35px] before:h-[20px]  before:bg-name-gradient  pb-6 inline-block before:rounded-t-lg  before:rounded-b-2xl before:rounded-l-3xl before:rounded-r-lg mt-6">
                some of my projects
              </h4>
            </div>
          </div>
          <div>
            <PortSlider />
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
