import React from "react";
import { HiArrowSmRight } from "react-icons/hi";

function NextArrow(props) {
  const { style, onClick } = props;
  return (
    <span
      className=" absolute right-[2%]  top-[50%] translate-y-[-50%]   z-10 !flex h-8 w-8 items-center justify-center rounded-full opacity-70 transition-all ease-in-out duration-300 bg-linkColor  md:max-xl:right-0 lg:h-16 lg:w-16"
      style={{
        ...style,
      }}
      onClick={onClick}
    >
      <HiArrowSmRight className="text-2xl text-white" />
    </span>
  );
}
export default NextArrow;
