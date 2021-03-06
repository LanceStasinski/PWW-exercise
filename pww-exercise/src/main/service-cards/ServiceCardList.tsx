import React from "react";

import dataResearchImg from "../../assets/Data-Research-Icon.svg";
import geogImg from "../../assets/Geography-Icon.svg";
import programsImg from "../../assets/Programs-Icon.svg";
import lfiImag from "../../assets/Legislative-Icon.svg";
import ServiceCard from "./ServiceCard";

// renders a section with a list of service cards
const ServiceCardList: React.FC = () => {
  const services = [
    { image: dataResearchImg, title: "DATA & RESEARCH", url: '/' },
    { image: geogImg, title: "GEOGRAPHY & MAPPING", url: '/' },
    { image: programsImg, title: "PROGRAMS & SERVICES", url: '/' },
    { image: lfiImag, title: "LEGISLATIVE FISCAL IMPACTS", url: '/' },
  ];
  return (
    <section className=" w-full bg-gray-7 py-5 flex justify-center" >
      <ul className="flex flex-row flex-wrap w-5/6 justify-center">
        {services.map((item, index) => (
          <ServiceCard
            title={item.title}
            image={item.image}
            key={`serviceCard${index}`}
            url={item.url}
          />
        ))}
      </ul>
    </section>
  );
};

export default ServiceCardList;
