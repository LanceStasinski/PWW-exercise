import React from "react";

import fadedLogo from "../assets/Group 262.png";

const Footer: React.FC = () => {
  const links = [
    {
      label: "Privacy Statement",
      url: "/",
    },
    {
      label: "FOIA",
      url: "/",
    },
    {
      label: "Disclosures and Reporting",
      url: "/",
    },
    {
      label: "Report Fraud",
      url: "/",
    },
    {
      label: "Accessibility",
      url: "/",
    },
    {
      label: "Contact Us",
      url: "/",
    },
  ];
  const addresses = [
    {
      building: "MAIN OFFICE",
      address: "1000 Assembly St., Rembert Dennis Building, Suite 421",
      city: "Columbia, SC 29201",
    },
    {
      building: "GEODETIC SURVERY SECTION",
      address: "5 Geology Rd",
      city: "Columbia, SC 29212",
    },
    {
      building: "HEALTH AND DEMOGRAPHICS DIVISION",
      address: "1000 Assembly St., Rembert Dennis Building, Suite 240",
      city: "Columbia, SC 29201",
    },
  ];
  return (
    <footer className="p-10 text-gray-7 bg-primary-2 sm:pb-0 sm:grid sm:grid-cols-2 sm:gap-2 md:grid md:grid-cols-[35%_30%_35%] md:px-20">
      <div className="flex flex-col mb-10">
        <h2 className="text-gray-8 font-Open-Sans font-bold mb-6">
          South Carolina <br />
          Revenue and Fiscal Affairs Office
        </h2>
        <img className="w-36" src={fadedLogo} alt="South Carolina RFA Logo" />
      </div>

      <ul className="flex flex-col space-y-3 mb-10">
        {links.map((item, index) => (
          <li key={`siteLinks${index}`}><a href={item.url}>{item.label}</a></li>
        ))}
      </ul>

      <ul className="flex flex-col space-y-5 mb-10">
        {addresses.map((item, index) => {
          return (
            <li key={`address${index}`}>
              <h3 className="text-gray-5 tracking-wider font-medium">{item.building}</h3>
              <p className="leading-5">
                <span>{item.address}</span>
                <br />
                <span>{item.city}</span>
              </p>
            </li>
          );
        })}
      </ul>
    </footer>
  );
};

export default Footer;
