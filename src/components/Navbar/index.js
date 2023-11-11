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

const Navbar = () => {
  return (
    <>
      <div>
        <div className="bg-gray py-3">
          <Container>
            <Flex className="items-center justify-between">
              <div className="w-1/6">
                <Link href="./">
                  <Image src={Logo} alt="Logo" />
                </Link>
              </div>
              <div className="w-[80%]">
                <Navitems>
                  <Flex className="justify-center gap-10">
                    {MenuItems.map((item, i) => (
                      <Navlinks
                        key={i}
                        links={item.link}
                        className="text-base  text-headerColor hover:text-linkColor relative after:absolute after:content-[''] after:top-7 after:left-0  after:w-[0] after:h-[2px] hover:after:w-[100%] after:bg-linkColor   after:transition-all after:ease-in after:duration-300 transition-all ease-in duration-150 after:rounded-2xl

                      "
                      >
                        {item.title}
                      </Navlinks>
                    ))}
                  </Flex>
                </Navitems>
              </div>
              <Search />
            </Flex>
          </Container>
        </div>
      </div>
    </>
  );
};

export default Navbar;
