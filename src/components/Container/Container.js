import React from "react";

const Container = ({ children, className }) => {
  return <div className={`container px-3  ${className}`}>{children}</div>;
};

export default Container;
