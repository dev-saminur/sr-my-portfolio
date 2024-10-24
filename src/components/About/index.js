import React from "react";
import Container from "../Container/Container";
import AboutBg from "../image/aboutbg.jpg";
import Image from "next/image";
import Buttons from "../Buttons/Button";
import Header from "../Header/Header";

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
              <Header title=" About me!" className="mb-6" />
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

              <div className="mt-8">
                <Buttons className="tracking-widest" title=" download my cv" />
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default About;
