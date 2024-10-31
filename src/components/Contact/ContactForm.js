import React from "react";
import Container from "../Container/Container";
import Flex from "../Flex/Flex";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import Link from "next/link";
import { ContactDetailsData, ContactIconData } from "./ContactData";
import Buttons from "../Buttons/Button";

const ContactForm = () => {
  return (
    <>
      <div className="pt-10">
        <Container>
          <div className="mt-10">
            <div className="grid grid-cols-2 gap-12 ">
              <div className="mb-10 ">
                {ContactDetailsData.map((item, i) => (
                  <div key={i}>
                    <div className="mb-4">
                      <h6 className="text-base font-normal opacity-80 text-headerColor mb-1 capitalize">
                        {item.subtitle}
                      </h6>
                      <h4 className="text-2xl opacity-80  text-linkColor  font-bold tracking-wider  pb-2.5 border-b border-sectionColor">
                        {item.title}
                      </h4>
                    </div>
                  </div>
                ))}

                <div className="mb-4">
                  <h6 className="text-base font-normal opacity-80 text-headerColor mb-4 capitalize">
                    follow me:
                  </h6>

                  <Flex className="gap-x-6">
                    {ContactIconData.map((item, i) => (
                      <div
                        key={i}
                        className="p-3 group bg-whiteColor rounded-xl"
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

              <div>
                <div className="mt-4 text-left rounded-xl shadow-lg">
                  <form>
                    <div className="w-full flex  justify-between gap-6">
                      <input
                        type="text"
                        placeholder="Enter Your Name"
                        className="border border-gray  rounded-lg px-3 py-3 mb-5 text-base text-sectionColor w-[50%] outline-none bg-gray dark:border-gray-500 dark:bg-gray-900"
                      />
                      <input
                        type="email"
                        placeholder="Enter Your Email"
                        className="border border-gray  rounded-lg px-3 py-3 mb-5 text-base text-sectionColor w-[50%] outline-none bg-gray dark:border-gray-500 dark:bg-gray-900"
                      />
                    </div>
                    <div className="w-full">
                      <input
                        type="text"
                        placeholder="Enter Your Subject"
                        className="border border-gray  rounded-lg px-3 py-3 mb-5 text-base text-sectionColor w-full outline-none bg-gray dark:border-gray-500 dark:bg-gray-900"
                      />
                    </div>
                    <div className="w-full">
                      <textarea
                        name="message"
                        id="submit"
                        placeholder="Enter Your Message"
                        className="border border-gray rounded-lg px-3 py-3 mb-5 text-base text-sectionColor w-full outline-none bg-gray  dark:border-gray-500 dark:bg-gray-900"
                      ></textarea>
                    </div>
                  </form>

                  <div className="mt-2.5">
                    <Buttons href="/" title="send message" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default ContactForm;
