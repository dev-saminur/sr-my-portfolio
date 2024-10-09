import React from "react";
import Container from "../Container/Container";
import AboutBg from "../image/aboutbg.jpg";
import AboutBgimg from "../image/photosize.png";
import Image from "next/image";

const About = () => {
  return (
    <>
      <div className="py-20">
        <Container>
          <div className="grid grid-cols-2 items-center">
            <div className="left ">
              <div className="w-[550px] h-[700px] bg-red-400 relative ">
                <Image
                  src={AboutBg}
                  width={550}
                  height={700}
                  alt="about-bg"
                  className="absolute top-0 left-0 h-full"
                />
              </div>
            </div>
            <div className="left">
              <h1 className="text-[60px] text-sectionColor font-bold capitalize leading-[1.2] mb-6">
                About me!
              </h1>
              <p className="text-whiteColor text-base font-normal mb-4 text-justify">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum in
                eos saepe ipsa cupiditate accusantium voluptatibus quidem nam,
                reprehenderit, et necessitatibus adipisci labore sit veritatis
                vero tempore sequi at sed facere dolore. Quae obcaecati eius
                quasi doloribus illum minus fugit.
              </p>
              <p className="text-whiteColor text-base font-normal text-justify">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum in
                eos saepe ipsa cupiditate accusantium voluptatibus quidem nam,
                reprehenderit,
              </p>
              <button class="bg-gray px-7 py-3 text-lg text-headerColor hover:bg-transparent tracking-widest border-2 border-gray hover:border-gray font-normal mt-8 mr-6  rounded-2xl transition-all ease-in duration-150 uppercase">
                download my cv
              </button>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default About;
