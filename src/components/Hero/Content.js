"use client";
import React from "react";
import Buttons from "../Buttons/Button";
import { Typewriter } from "react-simple-typewriter";

const Content = () => {
  return (
    <div>
      <h3 className="text-2xl sm:text-[28px] lg:text-3xl font-semibold text-transparent  bg-clip-text bg-pera-gradient ">
        Hi ! I&apos;m
      </h3>
      <h2 className="text-[30px] sm:text-5xl 2xl:text-[64px]  font-bold my-3 text-transparent  bg-clip-text bg-name-gradient ">
        Md. Saminur Islam
      </h2>
      <h4 className="text-2xl sm:text-[32px] xl:text-4xl font-semibold  bg-pera-gradient inline-block px-4 py-4 lg:px-10 capitalize">
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

      <div className="mt-10 ">
        <Buttons
          href="/"
          className="mr-[9px] sm:mr-6  lg:mr-10"
          title="Hire me"
        />
        <Buttons href="/" title=" Contact Me" />
      </div>
    </div>
  );
};

export default Content;
