import React, { useRef } from "react";
import { CSSTransition } from "react-transition-group";

import StyledH2 from "../../shared/StyledH2";
import Backdrop from "./Backdrop";

// renders a drop down menu with a main section of links and 4 categories of links
const Menu: React.FC<{ show: boolean; onToggleMenu: () => void }> = (props) => {
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
      {props.show && <Backdrop onClick={props.onToggleMenu} />}
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
          {
            // renders a list of the main links
          }
          <div className="flex justify-center bg-gray-7 p-2">
            <ul>
              {mainLinks.map((item, index) => {
                return (
                  <li
                    data-testid="main-link"
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
          {
            // renders list of 4 lists - one for each category
          }
          <ul className="bg-white w-100 px-14 pb-4 pt-2 flex flex-col sm:grid sm:grid-cols-2 md:grid-cols-3">
            {links.map((item, index) => (
              <li
                data-testid="link-category"
                className="py-2"
                key={`linkSection${index}`}
              >
                <StyledH2>{item.section}</StyledH2>
                {
                  // renders list of links for the category
                }
                <ul className="pt-4 flex flex-col space-y-3">
                  {item.linksList.map((link, linkIndex) => {
                    return (
                      <li data-testid="link" className="leading-5" key={`link${linkIndex}`}>
                        <a className="text-gray-4" href={link.url}>
                          {link.name}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </li>
            ))}
          </ul>
        </nav>
      </CSSTransition>
    </React.Fragment>
  );
};

export default Menu;
