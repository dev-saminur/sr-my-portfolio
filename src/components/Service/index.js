import React from "react";
import Container from "../Container/Container";
import Header from "../Header/Header";
import Image from "next/image";
import Coding from "../image/icon/design(5).png";
import { serviceData } from "./serviceData";

const Service = () => {
  return (
    <>
      <div className="py-5">
        <Container>
          <div className="text-center mb-10">
            <Header title="My services" />
          </div>
          <div className="grid grid-cols-3 gap-8">
            {serviceData.map((item, i) => (
              <div
                key={i}
                className="group bg-gradient-to-tr  from-teal-400 via-blue-500 to-purple-500 rounded-xl p-[2px] hover:transition-all hover:duration-500 hover:ease-linear  hover:bg-gradient-to-r hover:from-blue-400 hover:via-purple-500 hover:to-teal-500 hover:animate-gradientAnimate delay-300	ease-linear"
              >
                <div className="py-14 px-10 text-center bg-[#000807]  rounded-xl ">
                  <div className="mb-5 w-[76px] h-[76px] flex justify-center items-center bg-[#1F303E] group-hover:bg-gradient-to-tr group-hover:bg-opacity-5  from-teal-600 via-[#3b83f65d] to-[#a855f763 ] rounded-full mx-auto group-hover:transition-all group-hover:duration-300 group-hover:ease-linear">
                    <Image
                      src={item.image}
                      width={32}
                      height={32}
                      alt="coding"
                    />
                  </div>
                  <h4 className=" text-[28px] font-semibold text-linkColor capitalize mb-5 text-center group-hover:bg-name-gradient group-hover:text-transparent  group-hover:bg-clip-text group-hover:transition-all group-hover:duration-300 group-hover:ease-linear">
                    {item.title}
                  </h4>
                  <p className="text-base font-normal leading-tight text-headerColor mb-5 text-center group-hover:bg-pera-gradient group-hover:text-transparent  group-hover:bg-clip-text group-hover:font-semibold group-hover:transition-all group-hover:duration-300 group-hover:ease-linear	">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </div>
    </>
  );
};

export default Service;
