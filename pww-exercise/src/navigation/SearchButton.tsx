import React from "react";

import searchIcon from "../assets/search-icon.svg";

const SearchButton: React.FC = () => {
  return (
    <div className="w-24 right-2 flex flex-col justify-center items-center">
      <button
        type="button"
        className="w-10 h-10 flex justify-center items-center rounded-sm border border-primary-5"
      >
        <img src={searchIcon} alt='Search icon' />
        </button>
    </div>
  );
};

export default SearchButton;
