import React from "react";

const Header = ({ title, className }) => {
  return (
    <>
      <h1
        className={`text-5xl lg:text-[60px] text-transparent bg-clip-text bg-designation-gradient opacity-50  relative font-bold capitalize leading-[1.2] before:absolute before:bottom-0 before:right-0 before:content-['']  before:w-[90%] before:h-[6px]  before:bg-name-gradient  pb-4 inline-block before:rounded-t-lg  before:rounded-b-2xl before:rounded-l-3xl before:rounded-r-lg  ${className}`}
      >
        {title}
      </h1>
    </>
  );
};

export default Header;
