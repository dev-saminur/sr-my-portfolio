import React from "react";
import Container from "../Container/Container";
import Header from "../Header/Header";
import Flex from "../Flex/Flex";
import Image from "next/image";
import Html from "../image/icon/html-5.png";
import Css from "../image/icon/css-3.png";
import JavaScript from "../image/icon/js.png";
import Sass from "../image/icon/sass.png";
import Bootstrap from "../image/icon/bootstrap.png";
import TailwindCss from "../image/icon/tailwindcss.png";
import Reacts from "../image/icon/react.png";
import Nextjs from "../image/icon/nnext.png";
import Redux from "../image/icon/redux.png";
import Mui from "../image/icon/materialui.png";
import ChakraUi from "../image/icon/chakraui.png";
import Pshop from "../image/icon/ps.png";
import Figma from "../image/icon/figma.png";
import Xd from "../image/icon/XD.png";
import vsCode from "../image/icon/vscode.png";
import gitHub from "../image/icon/gitHub.png";
import Git from "../image/icon/git.png";

const Skills = () => {
  return (
    <>
      <div className="py-20 group hover:transition-all hover:ease-linear hover:duration-300">
        <Container>
          <div className="text-center">
            <Header title="my skills" />
            <div className="mt-12 mb-4 text-center">
              <p className="relative inline-block text-3xl capitalize text-center bg-name-gradient text-transparent  bg-clip-text font-bold tracking-widest pb-6 after:absolute after:bottom-0 after:left-0 after:content-[' '] after:w-full after:h-[8px] after:bg-designation-gradient before:absolute before:bottom-[-10px] before:z-10 before:right-[50%] before:left-[50%] before:content-[' '] before:w-[30px] before:h-[30px] before:bg-name-gradient before:rounded-full before:overflow-hidden">
                Some of my Front-end Skills
              </p>
            </div>
          </div>
          <div className=" text-center transition-all ease-linear duration-300">
            <Flex className="justify-center items-center gap-x-[24px] my-10 group-hover:animate-moveAround transition-all ease-in-out duration-300 delay-300">
              <Image
                width={50}
                height={50}
                src={Html}
                alt="skill_1"
                className="hover:z-10 hover:scale-110  hover:rotate-6 transition-all ease-linear duration-300 "
              />
              <Image
                width={50}
                height={50}
                src={Css}
                alt="skill_1"
                className="hover:z-10 hover:scale-110  hover:rotate-6 transition-all ease-linear duration-300 "
              />
              <Image
                width={50}
                height={50}
                src={JavaScript}
                alt="skill_1"
                className="hover:z-10 hover:scale-110  hover:rotate-6 transition-all ease-linear duration-300 "
              />
              <Image
                width={67}
                height={50}
                src={Sass}
                alt="skill_1"
                className="hover:z-10 hover:scale-110  hover:rotate-6 transition-all ease-linear duration-300 "
              />
              <Image
                width={67}
                height={50}
                src={Bootstrap}
                alt="skill_1"
                className="hover:z-10 hover:scale-110  hover:rotate-6 transition-all ease-linear duration-300 "
              />
              <Image
                width={67}
                height={50}
                src={TailwindCss}
                alt="skill_1"
                className="hover:z-10 hover:scale-110  hover:rotate-6 transition-all ease-linear duration-300 "
              />
            </Flex>
            <Flex className="justify-center items-center gap-x-[26px] ">
              <Image
                width={50}
                height={50}
                src={Reacts}
                alt="skill_1"
                className="animate-roundSpin hover:z-10 hover:scale-110  hover:rotate-6 transition-all ease-linear duration-300 "
              />
              <Image
                width={50}
                height={50}
                src={Nextjs}
                alt="skill_1"
                className="animate-moveAround infinite reverse hover:z-10 hover:scale-110  hover:rotate-6 transition-all ease-linear duration-300 "
              />
              <Image
                width={50}
                height={50}
                src={Redux}
                alt="skill_1"
                className="animate-roundSpin  hover:z-10 hover:scale-110  hover:rotate-6 transition-all ease-linear duration-300 "
              />
              <Image
                width={50}
                height={50}
                src={Mui}
                alt="skill_1"
                className="animate-moveAround  hover:z-10 hover:scale-110  hover:rotate-6 transition-all ease-linear duration-300 "
              />
              <Image
                width={50}
                height={50}
                src={ChakraUi}
                alt="skill_1"
                className="animate-roundSpinReverse hover:z-10 hover:scale-110  hover:rotate-6 transition-all ease-linear duration-300 "
              />
            </Flex>
            <Flex className="justify-center items-center gap-x-[21px] my-10 group-hover:animate-moverightAround">
              <Image
                width={50}
                height={50}
                src={Pshop}
                alt="skill_1"
                className="hover:z-10 hover:scale-110  hover:rotate-6 transition-all ease-linear duration-300 "
              />
              <Image
                width={50}
                height={50}
                src={Figma}
                alt="skill_1"
                className="hover:z-10 hover:scale-110  hover:rotate-6 transition-all ease-linear duration-300 "
              />
              <Image
                width={50}
                height={50}
                src={Xd}
                alt="skill_1"
                className="hover:z-10 hover:scale-110  hover:rotate-6 transition-all ease-linear duration-300 "
              />
              <Image
                width={50}
                height={50}
                src={vsCode}
                alt="skill_1"
                className="hover:z-10 hover:scale-110  hover:rotate-6 transition-all ease-linear duration-300 "
              />
            </Flex>
            <Flex className="justify-center items-center gap-x-[50px] ">
              <Image
                width={50}
                height={50}
                src={gitHub}
                alt="skill_1"
                className="animate-roundSpin hover:z-10 hover:scale-110  hover:rotate-6 transition-all ease-linear duration-300 "
              />
              <Image
                width={50}
                height={50}
                src={Git}
                alt="skill_1"
                className="animate-roundSpinReverse group-hover:z-10 hover:scale-110  hover:rotate-6 transition-all ease-linear duration-300 "
              />
            </Flex>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Skills;
