import React from "react";
import ReactDOM from "react-dom";

// closes menu when clicked on
const Backdrop: React.FC<{ onClick: () => void}> = (props) => {
  return ReactDOM.createPortal(
    <div className="fixed bg-transparent z-20 top-28 w-full h-[100vh]" onClick={props.onClick}></div>,
    document.getElementById("backdrop-hook") as HTMLElement
  );
};

export default Backdrop;