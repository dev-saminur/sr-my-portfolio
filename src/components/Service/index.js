import React from "react";
import Container from "../Container/Container";
import Header from "../Header/Header";
import Image from "next/image";
import Coding from "../image/icon/design(5).png";

const Service = () => {
  return (
    <>
      <div className="py-5">
        <Container>
          <div className="text-center mb-10">
            <Header title="My services" />
          </div>
          <div className="grid grid-cols-3 gap-8">
            <div className="group bg-gradient-to-tr  from-teal-400 via-blue-500 to-purple-500 rounded-xl p-[2px] hover:transition-all hover:duration-500 hover:ease-linear  hover:bg-gradient-to-r hover:from-blue-400 hover:via-purple-500 hover:to-teal-500 hover:animate-gradientAnimate delay-300	ease-linear">
              <div className="py-14 px-10 text-center bg-[#000807]  rounded-xl ">
                <div className="mb-5 w-[76px] h-[76px] flex justify-center items-center bg-[#1F303E] group-hover:bg-gradient-to-tr group-hover:bg-opacity-5  from-teal-600 via-[#3b83f65d] to-[#a855f763 ] rounded-full mx-auto group-hover:transition-all group-hover:duration-300 group-hover:ease-linear">
                  <Image src={Coding} width={32} height={32} alt="coding" />
                </div>
                <h4 className=" text-[28px] font-semibold text-linkColor mb-5 text-center group-hover:bg-name-gradient group-hover:text-transparent  group-hover:bg-clip-text group-hover:transition-all group-hover:duration-300 group-hover:ease-linear">
                  Mern Stack Development
                </h4>
                <p className="text-base font-normal leading-tight text-headerColor mb-5 text-center group-hover:bg-pera-gradient group-hover:text-transparent  group-hover:bg-clip-text group-hover:font-semibold group-hover:transition-all group-hover:duration-300 group-hover:ease-linear	">
                  Create a platform with the best and coolest quality from us.
                </p>
              </div>
            </div>

            <div className="bg-slate-700">two</div>
            <div className="bg-blue-300">three</div>
          </div>

          {/* <div className="rounded-lg bg-gradient-to-tr from-pink-300 to-blue-300 p-1 shadow-lg">
            <div className="bg-[#000807]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Obcaecati ea nostrum dolore tenetur distinctio laboriosam
              cupiditate ut beatae! Laboriosam ipsam quasi sed minima rem ut
              deleniti earum impedit odio exercitationem.
            </div>
          </div> */}
        </Container>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque officia
          explicabo laboriosam. Eligendi, architecto. Aut totam ducimus eius
          expedita consequuntur aperiam rem quibusdam quidem, impedit sit iure
          esse odio velit.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque officia
          explicabo laboriosam. Eligendi, architecto. Aut totam ducimus eius
          expedita consequuntur aperiam rem quibusdam quidem, impedit sit iure
          esse odio velit.
        </p>
      </div>
    </>
  );
};

export default Service;
