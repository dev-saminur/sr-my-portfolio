import React from "react";
import Container from "../Container/Container";
import Header from "../Header/Header";
import PortSlider from "./PortSlider";

const Portfolio = () => {
  return (
    <>
      <div className="py-24">
        <div className="px-[100px]">
          <div className="text-center mb-10">
            <Header title="My portfolio" />
            <div className="grid grid-cols-12">
              <div className="grid col-start-4 col-end-10 mt-12 mb-7">
                <Header
                  title="  Some of my projects"
                  className="text-3xl mt-6   pointer before:w-[40px] before:h-[30px] rounded-full before:bottom-[-30%] before:right-[46%] leading-10 z-[999]"
                />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-8">
            <PortSlider />
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
