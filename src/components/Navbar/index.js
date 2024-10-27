import React from "react";
import Flex from "../Flex/Flex";
import Container from "../Container/Container";
import Image from "next/image";
import Logo from "../image/Logo.svg";
import Navitems from "../LIsts/Navitems";
import Navlinks from "../LIsts/Navlinks";
import { MenuItems } from "./MenuData";

import Link from "next/link";
import Search from "./Search";
import Buttons from "../Buttons/Button";

const Navbar = () => {
  return (
    <>
      <div className="fixed top-0 left-0 right-0  bg-[#000] z-50">
        <div className="bg-gray py-3">
          <Container>
            <Flex className="items-center justify-between">
              <div className="w-1/6">
                <Link href="./">
                  <Image src={Logo} alt="Logo" />
                </Link>
              </div>
              <div className="w-[70%]">
                <Navitems>
                  <Flex className="justify-end gap-10 items-center">
                    {MenuItems.map((item, i) => (
                      <Navlinks
                        key={i}
                        links={item.link}
                        className="text-base  text-whiteColor hover:text-linkColor relative after:absolute after:content-[''] after:top-7 after:left-0  after:w-[0] after:h-[2px] hover:after:w-[100%] after:bg-linkColor   after:transition-all after:ease-in after:duration-300 transition-all ease-in duration-150 after:rounded-2xl

                      "
                      >
                        {item.title}
                      </Navlinks>
                    ))}
                    <div className="ml-4">
                      <Buttons title="Contact me" />
                    </div>
                  </Flex>
                </Navitems>
              </div>
              {/* <Search /> */}
            </Flex>
          </Container>
        </div>
      </div>
    </>
  );
};

export default Navbar;
