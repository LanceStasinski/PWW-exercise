import React, { useState } from "react";

import HamburgerButton from "./HamburgerButton";

const MainNavigation = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const toggleMenuHandler = () => {
    setMenuIsOpen(prevState => !prevState)
  }
  return (
    <header className="w-full h-32">
      <nav className="h-full">
        <HamburgerButton onClick={toggleMenuHandler} menuIsOpen={menuIsOpen} />
      </nav>
    </header>
  );
};

export default MainNavigation;
