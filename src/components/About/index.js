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
          <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-x-0 lg:gap-x-10 xl:gap-x-0 items-center">
            <div className="left ">
              <Image src={AboutBg} width={550} height={700} alt="about-bg" />
            </div>
            <div className="right text-center lg:text-start lg:mt-0 mt-12">
              <Header title=" About me!" className="mb-6" />
              <p className="text-headerColor opacity-70 text-sm lg:text-[17px] pr-0 lg:pr-8 xl:pr-0 tracking-wider leading-6 font-normal  text-justify">
              Hi, I&apos;m Saminur, a passionate Front-end Developer skilled in React.js, Next.js, Tailwind CSS, and Bootstrap. I specialize in creating responsive, user-friendly websites with seamless user experiences. By leveraging Next.js, I build fast and SEO-friendly applications using SSR and SSG techniques.
              </p>
              <p className="text-headerColor opacity-70 text-sm lg:text-[17px] pr-0 lg:pr-8 xl:pr-0 tracking-wider my-4 leading-6 font-normal text-justify">
              Along with front-end development, I am also experienced in the MERN Stack, including MongoDB, Express.js, Node.js, and React.js, enabling me to deliver complete web solutions.
              </p>
              <p className="text-headerColor opacity-70 text-sm lg:text-[17px] pr-0 lg:pr-8 xl:pr-0 tracking-wider leading-6 font-normal text-justify">
              I am always learning and evolving with the latest web technologies, striving to create clean, scalable, and performance-driven applications.
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
