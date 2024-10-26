import React from "react";
import { HiArrowSmLeft } from "react-icons/hi";

function PrevArrow(props) {
  const { style, onClick } = props;
  return (
    <span
      className="absolute left-[2%] top-[50%] translate-y-[-50%] z-10 !flex h-8 w-8 items-center justify-center rounded-full transition-all ease-in-out duration-300  bg-linkColor  opacity-70  lg:h-16 lg:w-16"
      style={{
        ...style,
      }}
      onClick={onClick}
    >
      <HiArrowSmLeft className="text-2xl text-white" />
    </span>
  );
}
export default PrevArrow;
