import React, { useState } from "react";

import HamburgerButton from "./HamburgerButton";
import logo from "../assets/RFA Logo Final.png";
import logoMask from "../assets/Group 262.png";
import SearchButton from "./SearchButton";

const MainNavigation = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [logoIsHovered, setLogoIsHovered] = useState(false);

  const toggleMenuHandler = () => {
    setMenuIsOpen((prevState) => !prevState);
  };

  const toggleLogo = () => {
    setLogoIsHovered((prevState) => !prevState);
  };

  return (
    <header className="w-full h-28">
      <nav className="h-full w-full flex bg-white justify-between">
        <HamburgerButton onClick={toggleMenuHandler} menuIsOpen={menuIsOpen} />
        <div className="flex h-full">
          <a
            href="/"
            className="hidden sm:block"
            onMouseEnter={toggleLogo}
            onMouseLeave={toggleLogo}
          >
            {logoIsHovered && (
              <img
                src={logoMask}
                alt=""
                className="absolute my-2.5 ml-2 sm:ml-6 z-10 h-93.33px"
              />
            )}
            <img
              src={logo}
              alt="South Carolina Revenue and Fiscal Affairs Logo"
              className="h-5/6 my-2.5 ml-6"
            />
          </a>

          <div className="ml-4 h-full flex flex-col justify-center w-fit">
            <h1 className="font-Roboto-Slab text-primary-3 hidden sm:block sm:text-sm xl:text-lg">
              SOUTH CAROLINA <br />
              REVENUE AND FISCAL AFFAIRS OFFICE
            </h1>
            <h1 className="font-Roboto-Slab text-primary-3 text-sm ml-4 sm:hidden">
              South Carolina <br />
              RFA <br />
              OFFICE
            </h1>
            <p>
              <em className="font-Roboto-Condensed hidden sm:block sm:text-xs md:text-sm text-primary-6">
                Transforming data into solutions for South Carolina
              </em>
            </p>
          </div>
        </div>
        <div className=" hidden lg:flex w-[48%] items-center justify-end">
          <ul className="flex">
            {["ABOUT US", "EVENTS", "Boards & Committees"].map(
              (item, index) => {
                return (
                  <li className="mx-4 text-primary-3" key={`mainLink-${index}`}>
                    <a href="/">{item}</a>
                  </li>
                );
              }
            )}
          </ul>
        </div>

        <SearchButton />
      </nav>
      <div className="h-2 bg-primary-3"></div>
    </header>
  );
};

export default MainNavigation;
