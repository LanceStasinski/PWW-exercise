import React from "react";

import backgroundImage from "../../assets/capitol.jpg";
import Button from "../../shared/Button";
import searchIcon from '../../assets/search-icon-white.svg'

const SearchArea: React.FC = () => {
  return (
    <section className="w-full flex flex-col justify-center items-center">
      <img
        src={backgroundImage}
        className="object-cover h-96 -z-10"
        alt=""
      ></img>
      <div className="absolute h-96 z-10 flex flex-col justify-center items-center">
        <div className=" w-5/6 sm:w-1/2">
          <p className="text-gray-7 text-center font-Roboto-Slab font-light text-xl">
            Providing independent research, analysis, and resources to
            facilitate informed policy decisions and administration of services
          </p>
          <form className="w-full sm:p-4 flex flex-col items-center sm:flex-row mt-4">
            <input className="w-full mb-4 sm:w-3/4 sm:mr-2 sm:mb-0 p-2 placeholder-italic focus:outline-none" type='search' placeholder="Search rfa.sc.gov" />
            <Button>SEARCH <img src={searchIcon} alt='search icon' className="ml-2 mr-2 mt-[2px]"/></Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SearchArea;
