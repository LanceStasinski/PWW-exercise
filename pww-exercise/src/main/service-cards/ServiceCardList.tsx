import React from "react";

import dataResearchImg from "../../assets/Data-Research-Icon.svg";
import geogImg from "../../assets/Geography-Icon.svg";
import programsImg from "../../assets/Programs-Icon.svg";
import lfiImag from "../../assets/Legislative-Icon.svg";
import ServiceCard from "./ServiceCard";

const ServiceCardList: React.FC = () => {
  const services = [
    { image: dataResearchImg, title: "DATA & RESEARCH" },
    { image: geogImg, title: "GEOGRAPHY & MAPPING" },
    { image: programsImg, title: "PROGRAMS & SERVICES" },
    { image: lfiImag, title: "LEGISLATIVE FISCAL IMPACTS" },
  ];
  return (
    <section className=" w-full  bg-gray-6">
      <ul className="flex flex-row flex-wrap pt-10 pr-10 justify-center">
        {services.map((item, index) => (
          <ServiceCard
            title={item.title}
            image={item.image}
            key={`serviceCard${index}`}
          />
        ))}
      </ul>
    </section>
  );
};

export default ServiceCardList;
