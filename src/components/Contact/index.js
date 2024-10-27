import React from "react";
import Container from "../Container/Container";
import Image from "next/image";
import Link from "next/link";
import Flex from "../Flex/Flex";
import Header from "../Header/Header";
import ContimgAni from "../image/global2.png";
const Contact = () => {
  return (
    <>
      <div className=" pt-1 pb-[150px] lg:pb-[250px] relative overflow-hidden">
        <Container>
          <div>
            <div className="text-center">
              <Header title="contact me" />
              <div className="mt-8">
                <p className="relative inline-block text-2xl uppercase text-center bg-name-gradient text-transparent  bg-clip-text font-bold tracking-widest ">
                  LET ME OPPORTUNITY TO HELP YOU!
                </p>
              </div>
            </div>
            <div className="text-center mt-[70px] uppercase">
              <h5 className="relative inline-block text-3xl  text-center bg-designation-gradient text-transparent  bg-clip-text font-bold tracking-widest ">
                (+88) 01742 74 96 93
              </h5>

              <h5 className=" text-2xl font-semibold mt-[50px] mb-[20px] bg-name-gradient text-transparent  bg-clip-text">
                saminur9425@gmail.com
              </h5>
              <h5 className="bg-designation-gradient text-transparent  bg-clip-text text-xl font-semibold mb-[30px]">
                Jamalpur, Mymensingh, Bangladesh
              </h5>
              <Flex className="justify-center gap-x-6">
                <Link
                  href="#"
                  className="text-xs   text-white py-3 px-6 border rounded-full hover:border-[#010049] hover:bg-[#010049] transition-all ease-in after:duration-300 capitalize"
                >
                  Lets Chat
                </Link>
                <Link
                  href="#"
                  className="text-xs   text-white py-3 px-6 border rounded-full hover:border-[#010049] hover:bg-[#010049] transition-all ease-in after:duration-300 capitalize"
                >
                  Request Consultation
                </Link>
              </Flex>
            </div>
          </div>
        </Container>
        <div className="absolute bottom-[-45%] scale-50 lg:scale-100 left-[6%] lg:bottom-[-33%] lg:left-[50%] xl:bottom-[-450px]  xl:left-[60%] lg:translate-x-[-50%] ">
          <Image
            src={ContimgAni}
            alt="contact-img-animation"
            className=" animate-roundSpins "
          />
        </div>
      </div>
    </>
  );
};

export default Contact;
