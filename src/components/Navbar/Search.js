import React from "react";
import { TbGridDots } from "react-icons/tb";
import { FiSearch } from "react-icons/fi";
const Search = () => {
  return (
    <>
      <div className="flex items-center ">
        <div className="mr-4  relative">
          <input
            type="text"
            placeholder="Search"
            className="outline-none border-0 py-[5px] pl-4 pr-10 text-gray rounded-[14px]
                    "
          />
          <div className="absolute top-[50%] translate-y-[-50%] right-0 rounded-r-[14px] bg-btnColor p-2 rounded-sm cursor-pointer">
            <FiSearch className="text-lg text-gray" />
          </div>
        </div>
        <div className="cursor-pointer">
          <TbGridDots className="text-[35px] text-btnColor" />
        </div>
      </div>
    </>
  );
};

export default Search;
