import React from "react";
import Container from "../Container/Container";
import Flex from "../Flex/Flex";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import Link from "next/link";
import { ContactDetailsData, ContactIconData } from "./ContactData";

const ContactForm = () => {
  return (
    <>
      <div className="py-10">
        <Container>
          <div className="mt-10">
            <div className="grid grid-cols-2 gap-10">
              <div className="mb-10">
                <h4 className="text-5xl text-linkColor font-bold tracking-widest mb-10">
                  Let&apos;s Work Together
                </h4>
                {ContactDetailsData.map((item, i) => (
                  <div key={i}>
                    <div className="mb-4">
                      <h6 className="text-base font-normal text-linkColor mb-1 capitalize">
                        {item.subtitle}
                      </h6>
                      <h4 className="text-[28px] opacity-80 capitalize text-linkColor  font-bold tracking-widest  pb-2.5 border-b border-sectionColor">
                        {item.title}
                      </h4>
                    </div>
                  </div>
                ))}

                <div className="mb-4">
                  <h6 className="text-base font-normal text-linkColor mb-4 capitalize">
                    follow me:
                  </h6>

                  <Flex className="gap-x-8">
                    {ContactIconData.map((item, i) => (
                      <div
                        key={i}
                        className="p-4 group bg-whiteColor rounded-xl"
                      >
                        <Link
                          href="/"
                          className="text-2xl text-gray group-hover:text-[#4d95f4] transition-all ease-in-out duration-200"
                        >
                          {item.icon}
                        </Link>
                      </div>
                    ))}
                  </Flex>
                </div>
              </div>
              <div className="bg-yellow-400">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam,
                magnam molestiae. Enim necessitatibus similique neque, nobis
                fugiat ipsum odio numquam suscipit, cumque nam distinctio
                voluptates iusto ad repellat odit libero?
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default ContactForm;
