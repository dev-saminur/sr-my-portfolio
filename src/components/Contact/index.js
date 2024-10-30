import React from "react";
import Container from "../Container/Container";
import Image from "next/image";
import Header from "../Header/Header";
import ContimgAni from "../image/global2.png";
import ContactForm from "./ContactForm";
const Contact = () => {
  return (
    <>
      <div className=" pt-1 pb-[150px] lg:pb-[250px] relative overflow-hidden">
        <Container>
          <div>
            <div className="text-center">
              <Header title="contact me" />
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
