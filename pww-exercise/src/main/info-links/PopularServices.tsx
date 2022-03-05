import React from "react";

// Renders a list of links to popular services
const PopularServices: React.FC = () => {
  const links = [
    {
      text: "Overview and History of the South Carolina State Budget",
      url: "/",
    },
    {
      text: "Overview and History of the South Carolina State Budget",
      url: "/",
    },
    {
      text: "Overview and History of the South Carolina State Budget",
      url: "/",
    },
    {
      text: "Employer Contribution Trends - June 4, 2019",
      url: "/",
    },
    {
      text: "Employer Contribution Trends - June 4, 2019",
      url: "/",
    },
    {
      text: "Employer Contribution Trends - June 4, 2019",
      url: "/",
    },
    {
      text: "Appropriation Bills and Acts",
      url: "/",
    },
    {
      text: "Executive Budget Office State Agency Budget Plans(Requests)",
      url: "/",
    },
    {
      text: "Executive Budget Office State Agency Budget Plans(Requests)",
      url: "/",
    },
  ];

  return (
    <section>
      <h2 className="border-b-8 border-b-primary-2 text-primary-2 text-xl pb-4 mb-3 font-bold font-Open-Sans">
        POPULAR SERVICES AND LINKS
      </h2>
      <ul className="flex flex-row flex-wrap">
        {links.map((link, index) => {
          return (
            <li key={`popLink${index}`} className=" w-full md:w-1/2 lg:w-1/3 md:pr-10 pt-5">
              <a href={link.url} className="text-primary-5 inline-block leading-4 font-medium  underline">{link.text}</a>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default PopularServices;
