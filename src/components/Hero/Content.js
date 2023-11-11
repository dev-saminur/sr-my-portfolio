import React from "react";

const Content = () => {
  return (
    <div>
      <h3 className="text-[32px] text-headerColor font-normal">Hi ! I’m </h3>
      <h2 className="text-[64px] text-linkColor font-bold mb-1">Dev_Saminur</h2>
      <h4 className="text-4xl text-headerColor font-normal">
        Front-end Developer
      </h4>
      <button className="bg-gray px-7 py-3 text-lg text-headerColor hover:bg-transparent tracking-widest	 border-2 border-gray hover:border-gray font-normal mt-8 mr-6  rounded-2xl transition-all ease-in duration-150">
        Hire me
      </button>
      <button className="bg-gray px-7 py-3 text-lg text-headerColor hover:bg-transparent tracking-widest	 border-2 border-gray hover:border-gray font-normal rounded-2xl transition-all ease-in duration-150">
        Contact Me
      </button>
    </div>
  );
};

export default Content;
