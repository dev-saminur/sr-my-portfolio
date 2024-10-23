import React from "react";
import Buttons from "../Buttons/Button";

const Content = () => {
  return (
    <div>
      <h3 className="text-[32px] text-headerColor font-normal">Hi ! I’m </h3>
      <h2 className="text-[64px] text-linkColor font-bold mb-1">Dev_Saminur</h2>
      <h4 className="text-4xl text-headerColor font-normal">
        Front-end Developer
      </h4>
      <div className="mt-10">
        <Buttons className="mr-10" title="Hire me" />
        <Buttons title=" Contact Me" />
      </div>
    </div>
  );
};

export default Content;
