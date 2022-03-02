import React from "react";

const Button: React.FC<{ disabled?: boolean }> = (props) => {
  return (
    <button
      className="text-gray-7 tracking-wider bg-primary-5 px-5 py-2 hover:bg-primary-3 active:bg-primary-2 disabled:bg-gray-5"
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default Button;
