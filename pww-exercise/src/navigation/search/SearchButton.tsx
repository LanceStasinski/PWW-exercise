import React from "react";

import searchIconBlue from "../../assets/search-icon.svg";
import searchIconWhite from "../../assets/search-icon-white.svg";

// renders a button with a search icon. Shows the the search bar when clicked.
const SearchButton: React.FC<{
  searchIsOpen: boolean;
  onToggleSearch: () => void;
}> = (props) => {
  return (
    <div className="w-24 flex flex-col justify-center items-center">
      <button
        title="search"
        type="button"
        onClick={props.onToggleSearch}
        className="w-10 absolute h-10 flex justify-center items-center rounded-sm border border-primary-5"
        style={{ backgroundColor: props.searchIsOpen ? "#0074C1" : "white" }}
      >
        <img
          data-testid='search-icon'
          src={props.searchIsOpen ? searchIconWhite : searchIconBlue}
          alt="Search icon"
        />
      </button>
    </div>
  );
};

export default SearchButton;
