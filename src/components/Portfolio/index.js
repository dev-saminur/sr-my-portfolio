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
              <div className="grid col-start-4 col-end-10 mt-12 mb-4">
                <p className="text-[38px] px-10 text-center bg-name-gradient text-transparent  bg-clip-text font-bold tracking-widest">
                  Some of my
                  <span className="bg-designation-gradient text-transparent  bg-clip-text pl-2">
                    Projects
                  </span>
                </p>
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
