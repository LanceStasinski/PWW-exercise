import React, { useRef } from "react";
import { CSSTransition } from "react-transition-group";

import Button from "../../shared/Button";

const SearchBar: React.FC<{ show: boolean }> = (props) => {
  const nodeRef = useRef(null);

  return (
    <CSSTransition
      in={props.show}
      mountOnEnter
      unmountOnExit
      timeout={300}
      classNames="slide-in-down"
      nodeRef={nodeRef}
    >
      <form
        ref={nodeRef}
        className="flex p-3 z-[100] rounded-sm absolute top-[4.4rem] bg-primary-5 right-0 sm:right-[1.75rem] custom-lg:right-[calc(((100vw-1400px)/2)+19px)]"
      >
        <input
          className="mr-2 px-2 w-[9rem] sm:w-[20rem] focus:outline-none"
          type="search"
          placeholder="Enter search term"
        />
        <Button type="submit" className="border-white border-2 py-2">
          SEARCH
        </Button>
      </form>
    </CSSTransition>
  );
};

export default SearchBar;
