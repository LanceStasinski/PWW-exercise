import React from "react";

const HamburgerButton: React.FC<{
  menuIsOpen: boolean;
  onClick: () => void;
}> = (props) => {
  return (
    <button
      className=" h-full bg-primary-5 flex flex-col justify-center items-center w-20 hover:animate-btn-hover active:bg-primary-2"
      onClick={props.onClick}
    >
      {!props.menuIsOpen && (
        <div className="w-1/2 flex flex-col justify-center">
          {[1,2,3].map(item => <span key={`bar${item}`} className="bg-gray-7 h-1 w-full block my-1 rounded" /> )}
          
          <div className="text-gray-7 text-xs tracking-widest">MENU</div>
        </div>
      )}
      {props.menuIsOpen && (
        <div className="w-1/2 flex flex-col justify-center">
          <span className="before:relative before:top-0.5 before:w-full before:rotate-45 before:h-1 before:block before:bg-gray-7 after:relative after:bottom-0.5 after:w-full after:-rotate-45 after:h-1 after:block after:bg-gray-7" ></span>
          <div className="text-gray-7 text-xs tracking-widest mt-4 -mb-3">CLOSE</div>
        </div>
      )}
    </button>
  );
};

export default HamburgerButton;
