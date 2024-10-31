import React from "react";
import Container from "../Container/Container";
import Image from "next/image";
import Header from "../Header/Header";
import ContimgAni from "../image/global2.png";
import ContactForm from "./ContactForm";
const Contact = () => {
  return (
    <>
      <div className=" pt-1 pb-[122px]  relative overflow-hidden">
        <Container>
          <div>
            <div className="text-center">
              <Header title="contact me" className="text-center" />
            </div>
            <div className="my-10 text-center">
              <p className="relative inline-block text-[38px] capitalize text-center bg-name-gradient text-transparent  bg-clip-text font-bold tracking-widest pb-6 after:absolute after:bottom-0 after:left-0 after:content-[' '] after:w-full after:h-[6px] after:bg-designation-gradient before:absolute before:bottom-[-10px] before:z-10 before:right-[50%] before:left-[50%] before:content-[' '] before:w-[30px] before:h-[30px] before:bg-name-gradient before:rounded-full before:overflow-hidden">
                Let&apos;s Work Together!
              </p>
            </div>
          </div>
          <div className="absolute bottom-[-45%] scale-50 lg:scale-100 left-[6%] lg:bottom-[-33%] lg:left-[50%] xl:bottom-[-450px]  xl:left-[60%] lg:translate-x-[-50%] ">
            <Image
              src={ContimgAni}
              alt="contact-img-animation"
              // className=" animate-roundSpins "
            />
          </div>
        </Container>
        <ContactForm />
      </div>
    </>
  );
};

export default Contact;
