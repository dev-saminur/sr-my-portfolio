"use client";
import React from "react";
import Buttons from "../Buttons/Button";
import { Typewriter } from "react-simple-typewriter";

const Content = () => {
  return (
    <div>
      <h3 className="text-[32px] font-semibold text-transparent bg-clip-text bg-gradient-to-t to-[rgb(250,72,205)] via-[#78fe12] from-[#44ce7b]">
        Hi ! I’m{" "}
      </h3>
      <h2 className=" text-[64px]  font-bold mb-1 text-transparent  bg-clip-text bg-designation-gradient ">
        Md. Saminur Islam
      </h2>
      <h4 className="text-4xl font-semibold  bg-name-gradient inline-block py-4 px-10 capitalize">
        <Typewriter
          words={[
            "Front-end developer",
            "React js developer",
            "web designer",
            "figma to html expert",
          ]}
          loop={true}
          cursor
          cursorStyle=".!"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </h4>

      <div className="mt-10">
        <Buttons href="/" className="mr-10" title="Hire me" />
        <Buttons href="/" title=" Contact Me" />
      </div>
    </div>
  );
};

export default Content;
