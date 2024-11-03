import React from "react";
import Container from "../Container/Container";
import Content from "./Content";
import Image from "next/image";
import ProfileImg from "../image/profile.png";

const Hero = () => {
  return (
    <div className="bg-black">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-x-0 lg:gap-x-8 xl:gap-x-0">
          <div>
            <Content />
          </div>
          <div className="mt-14">
            <Image src={ProfileImg} alt="Profile" className="mx-auto" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
