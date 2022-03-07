import React, { useState } from "react";

import HamburgerButton from "./HamburgerButton";
import logo from "../assets/RFA Logo Final.png";
import logoMask from "../assets/Group 262.png";
import SearchButton from "./search/SearchButton";
import Menu from "./menu/Menu";
import SearchBar from "./search/SearchBar";

// renders the main navigation
const MainNavigation = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [logoIsHovered, setLogoIsHovered] = useState(false);
  const [searchIsOpen, setSearchIsOpen] = useState(false);

  const toggleMenuHandler = () => {
    setMenuIsOpen((prevState) => !prevState);
  };

  const toggleLogo = () => {
    setLogoIsHovered((prevState) => !prevState);
  };

  const toggleSearchHandler = () => {
    setSearchIsOpen((prevState) => !prevState);
  };

  return (
    <React.Fragment>
      <header
        id="header"
        className="w-full h-28 z-40"
        style={{
          borderBottom: menuIsOpen ? "4px solid #F3F6F9" : "8px solid #1B3A61",
        }}
      >
        {
          // render hamburger button
        }
        <nav role='navigation' aria-labelledby="primary-navigation" className="h-full w-full flex bg-white justify-between">
          <HamburgerButton
            onClick={toggleMenuHandler}
            menuIsOpen={menuIsOpen}
          />
          {
            // render logo as a link (presumably to home), add mask if image is hovered
          }
          <div className="flex h-full">
            <a
              href="/"
              className="hidden sm:block"
              onMouseEnter={toggleLogo}
              onMouseLeave={toggleLogo}
            >
              {logoIsHovered && (
                <img
                  data-testid="mask"
                  src={logoMask}
                  alt=""
                  className="absolute my-2.5 sm:ml-6 z-10 h-93.33px"
                />
              )}
              <img
                data-testid="logo"
                src={logo}
                alt="South Carolina Revenue and Fiscal Affairs Logo"
                className="h-5/6 my-2.5 ml-3"
              />
            </a>
            {
              // render heading and slogan
            }
            <div className="ml-5 h-full flex flex-col justify-center w-fit">
              <h1 className="font-Roboto-Slab font-bold text-primary-2 leading-6 hidden sm:block sm:text-sm xl:text-lg xl:leading-6">
                <span>SOUTH CAROLINA</span> <br />
                <span>REVENUE AND FISCAL AFFAIRS OFFICE</span>
              </h1>
              <h1 className="font-Roboto-Slab text-primary-2 text-center text-sm font-bold ml-4 sm:hidden">
                South Carolina <br />
                RFA <br />
                OFFICE
              </h1>
              <p data-testid="slogan">
                <em className="font-Roboto-Condensed hidden sm:block sm:text-xs md:text-sm text-primary-6">
                  Transforming data into solutions for South Carolina
                </em>
              </p>
            </div>
          </div>
          {
            // render nav links
          }
          <div className=" hidden lg:flex w-[48%] items-center justify-end">
            <ul className="flex">
              {["ABOUT US", "EVENTS", "BOARDS & COMMITTEES"].map(
                (item, index) => {
                  return (
                    <li
                      className="mx-4 text-primary-3 font-medium"
                      key={`mainLink-${index}`}
                    >
                      <a href="/">{item}</a>
                    </li>
                  );
                }
              )}
            </ul>
          </div>
          {
            // render search button and search bar
          }
          <SearchButton
            searchIsOpen={searchIsOpen}
            onToggleSearch={toggleSearchHandler}
          />
          <SearchBar show={searchIsOpen} />
        </nav>
      </header>
      {
        // render menu if open
      }
      <Menu show={menuIsOpen} onToggleMenu={toggleMenuHandler} />
    </React.Fragment>
  );
};

export default MainNavigation;
