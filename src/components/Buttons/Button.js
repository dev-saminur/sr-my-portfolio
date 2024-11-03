import React from "react";
import Link from "next/link";
import "./style.css";

const Buttons = ({ title, className, href }) => {
  return (
    <>
      <Link
        href={href}
        className={`sr-button relative inline-block cursor-pointer tracking-wides text-headerColor uppercase mx-auto font-normal rounded-full overflow-hidden p-[3px] isolate ${className}`}
      >
        <span className="relative block px-7 lg:px-3 xl:px-7 py-2 text-base xl:text-lg bg-black   rounded-full">
          {title}
        </span>
      </Link>
    </>
  );
};

export default Buttons;
