import React from "react";

const Navitems = ({ children, className }) => {
  return (
    <>
      <ul className={className}> {children}</ul>
    </>
  );
};

export default Navitems;
