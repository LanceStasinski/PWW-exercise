import React from "react";

import backgroundImage from "../../assets/capitol.jpg";
import Button from "../../shared/Button";
import searchIcon from "../../assets/search-icon-white.svg";

// renders a background image, a from with a search bar, and a paragraph
const SearchArea: React.FC = () => {
  return (
    <section className="w-full flex flex-col justify-center items-center">
      <img
        data-testid="background"
        src={backgroundImage}
        className="object-cover h-96 -z-10"
        alt=""
      ></img>
      <div className="absolute h-96 z-10 flex flex-col justify-center items-center">
        <div className=" w-5/6 sm:w-1/2">
          <p
            data-testid="hero-text"
            className="text-gray-8 text-center font-Roboto-Slab font-light text-xl sm:text-2xl"
          >
            Providing independent research, analysis, and resources to
            facilitate informed policy decisions and administration of services
          </p>
          <form
            data-testid="search-form"
            className="w-full sm:p-4 flex flex-col items-center sm:flex-row mt-4"
          >
            <label className="hidden" htmlFor="main-search">
              Search rfa.sc.gov
            </label>
            <input
              id="main-search"
              name="main-search"
              className="w-full mb-4 focus:outline-1 focus:outline-gray-2 sm:w-3/4 sm:mr-2 sm:mb-0 p-3 placeholder-italic "
              type="search"
              placeholder="Search rfa.sc.gov"
            />
            <Button type="submit">
              SEARCH{" "}
              <img
                data-testid="search-icon"
                src={searchIcon}
                alt="search icon"
                className="ml-2 mr-2 mt-[2px]"
              />
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SearchArea;
