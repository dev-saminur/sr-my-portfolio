import React from "react";
import Link from "next/link";
import "./style.css";

const Buttons = ({ title, className }) => {
  return (
    <>
      <Link
        href="/"
        className={`sr-button relative inline-block cursor-pointer tracking-wides text-headerColor uppercase mx-auto font-normal rounded-2xl overflow-hidden p-1 isolate ${className}`}
      >
        <span className="relative block px-7 py-3 text-lg bg-black rounded-md">
          {title}
        </span>
      </Link>
    </>
  );
};

export default Buttons;
