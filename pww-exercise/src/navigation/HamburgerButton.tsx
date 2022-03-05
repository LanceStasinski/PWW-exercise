import React from "react";

// render hamburger button if menu is closed, an X if menu is open, and clicking the button
// will either open or close the menu
const HamburgerButton: React.FC<{
  menuIsOpen: boolean;
  onClick: () => void;
}> = (props) => {
  return (
    <button
      type="button"
      className=" h-full bg-primary-5 flex flex-col justify-center items-center w-20 hover:animate-btn-hover active:bg-primary-2"
      onClick={props.onClick}
    >
      {
        // If menu is closed, show hamburger
      }
      {!props.menuIsOpen && (
        <div className="w-1/2 flex flex-col justify-center">
          {[1, 2, 3].map((item) => (
            <span
              data-testid="patty"
              key={`bar${item}`}
              className="bg-gray-8 h-1 w-full block my-1"
            />
          ))}

          <div className="text-gray-8 text-xs tracking-widest">MENU</div>
        </div>
      )}
      {
        // if menu is open, show X
      }
      {props.menuIsOpen && (
        <div className="w-1/2 flex flex-col justify-center">
          <span
            data-testid="close-x"
            className="before:relative before:top-0.5 before:w-full before:rotate-45 before:h-1 before:block before:bg-gray-8 after:relative after:bottom-0.5 after:w-full after:-rotate-45 after:h-1 after:block after:bg-gray-8"
          ></span>
          <div className="text-gray-8 text-xs tracking-widest mt-4 -mb-3">
            CLOSE
          </div>
        </div>
      )}
    </button>
  );
};

export default HamburgerButton;
