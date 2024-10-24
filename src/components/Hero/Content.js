import React from "react";
import Buttons from "../Buttons/Button";

const Content = () => {
  return (
    <div>
      <h3 className="text-[32px] font-normal text-transparent bg-clip-text bg-gradient-to-b from-yellow-400  to-linkColor">
        Hi ! I’m{" "}
      </h3>
      <h2 className=" text-[64px]  font-bold mb-1 text-transparent  bg-clip-text bg-name-gradient ">
        Md. Saminur Islam
      </h2>
      <h4 className="text-4xl font-semibold  bg-designation-gradient inline-block py-4 px-10">
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
