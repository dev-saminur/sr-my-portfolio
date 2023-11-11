import Link from "next/link";
import React from "react";

const Navlinks = ({ className, links, children }) => {
  return (
    <>
      <li className={className}>
        <Link href={links}>{children}</Link>
      </li>
    </>
  );
};

export default Navlinks;
