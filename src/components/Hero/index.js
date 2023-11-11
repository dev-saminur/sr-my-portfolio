import React from "react";
import Container from "../Container/Container";
import Content from "./Content";
import Image from "next/image";
import ProfileImg from "../image/profile.png";

const Hero = () => {
  return (
    <div className="bg-black">
      <Container>
        <div className="grid grid-cols-2 items-center">
          <div>
            <Content />
          </div>
          <div>
            <Image src={ProfileImg} alt="Profile" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
