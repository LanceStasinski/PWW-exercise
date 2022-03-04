import React, { useRef } from "react";
import { CSSTransition } from "react-transition-group";

import StyledH2 from "../../shared/StyledH2";
import Backdrop from "./Backdrop";

const Menu: React.FC<{ show: boolean; toggleMenu: () => void }> = (props) => {
  const nodeRef = useRef(null);
  const mainLinks = [
    {
      name: "Home",
      url: "/",
    },
    {
      name: "News & Events",
      url: "/",
    },
    {
      name: "About Us",
      url: "/",
    },
    {
      name: "Contact Us",
      url: "/",
    },
    {
      name: "Boards & Committees",
      url: "/",
    },
  ];
  const links = [
    {
      section: "DATA & RESEARCH",
      linksList: [
        {
          name: "Economy",
          url: "/",
        },
        {
          name: "State Finances",
          url: "/",
        },
        {
          name: "Education",
          url: "/",
        },
        {
          name: "Healthcare",
          url: "/",
        },
        {
          name: "Local Government",
          url: "/",
        },
        {
          name: "Population and Demographics",
          url: "/",
        },
        {
          name: "State Register Calculations",
          url: "/",
        },
        {
          name: "Presentations",
          url: "/",
        },
      ],
    },
    {
      section: "GEOGRAPHY & MAPPING",
      linksList: [
        {
          name: "Transportation Carrier Network (Uber)",
          url: "/",
        },
        {
          name: "SC Real Time Network",
          url: "/",
        },
        {
          name: "SC State GIS",
          url: "/",
        },
        {
          name: "Maps",
          url: "/",
        },
        {
          name: "Interactive Mapping",
          url: "/",
        },
        {
          name: "Statewide Aerial Imagery",
          url: "/",
        },
      ],
    },
    {
      section: "PROGRAMS & SERVICES",
      linksList: [
        {
          name: "Precinct Demographics and Redistricting",
          url: "/",
        },
        {
          name: "State 911 Program",
          url: "/",
        },
        {
          name: "Data Services and Online Solutions",
          url: "/",
        },
        {
          name: "Geodetic Survey",
          url: "/",
        },
        {
          name: "Fiscal Analysis",
          url: "/",
        },
        {
          name: "2020 Census",
          url: "/",
        },
      ],
    },
    {
      section: "LEGISLATIVE FISCAL IMPACTS",
      linksList: [
        {
          name: "Current General Assembly Session",
          url: "/",
        },
        {
          name: "Previous General Assembly Session",
          url: "/",
        },
        {
          name: "Forms",
          url: "/",
        },
      ],
    },
  ];
  const mainEnd = mainLinks.length - 1;
  return (
    <React.Fragment>
    {props.show && <Backdrop onClick={props.toggleMenu} />}
    <CSSTransition
      in={props.show}
      mountOnEnter
      unmountOnExit
      timeout={300}
      classNames="slide-in-down"
      nodeRef={nodeRef}
    >
      <nav
        ref={nodeRef}
        className="absolute max-w-[1400px] w-[100vw] top-28 z-50 border-b-primary-2 border-b-8 flex flex-col sm:grid sm:grid-cols-[20%_1fr]"
      >
        <div className="flex justify-center bg-gray-7 p-2">
          <ul>
            {mainLinks.map((item, index) => {
              return (
                <li
                  key={`mainMenuLink${index}`}
                  className="gray-3 font-medium text-center p-2"
                  style={{
                    borderBottom:
                      index !== mainEnd ? "1pt solid #CCCCCC" : "none",
                  }}
                >
                  <a href={item.url}>{item.name}</a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="bg-white w-100 px-14 pb-4 pt-2 flex flex-col sm:grid sm:grid-cols-2 md:grid-cols-3">
          {links.map((item, index) => (
            <div className="py-2" key={`linkSection${index}`}>
              <StyledH2>{item.section}</StyledH2>
              <ul className="pt-4">
                {item.linksList.map((link, linkIndex) => {
                  return (
                    <li key={`link${linkIndex}`}>
                      <a className="text-gray-4" href={link.url}>
                        {link.name}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </nav>
    </CSSTransition></React.Fragment>
  );
};

export default Menu;
