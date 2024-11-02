import React from "react";
import Container from "../Container/Container";
import AboutBg from "../image/aboutbg.jpg";
import Image from "next/image";
import Buttons from "../Buttons/Button";
import Header from "../Header/Header";

const About = () => {
  return (
    <>
      <div className=" pb-0 lg:py-20">
        <Container>
          <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 items-center">
            <div className="left ">
              <Image src={AboutBg} width={550} height={700} alt="about-bg" />
            </div>
            <div className="right text-center lg:text-start lg:mt-0 mt-12">
              <Header title=" About me!" className="mb-6" />
              <p className="text-headerColor opacity-70 text-sm lg:text-[17px] tracking-wider font-normal mb-4 text-justify">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum in
                eos saepe ipsa cupiditate accusantium voluptatibus quidem nam,
                reprehenderit, et necessitatibus adipisci labore sit veritatis
                vero tempore sequi at sed facere dolore. Quae obcaecati eius
                quasi doloribus illum minus fugit.
              </p>
              <p className="text-headerColor opacity-70 text-sm lg:text-[17px] tracking-wider font-normal text-justify">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum in
                eos saepe ipsa cupiditate accusantium voluptatibus quidem nam,
                reprehenderit,
              </p>

              <div className="mt-8 mb-10 lg:mb-0">
                <Buttons
                  href="/cv/cv.pdf"
                  download="cv.pdf"
                  className="tracking-widest"
                  title=" download my cv"
                />
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default About;
