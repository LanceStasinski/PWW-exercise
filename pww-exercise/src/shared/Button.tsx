import React from "react";

const Button: React.FC<{ disabled?: boolean }> = (props) => {
  return (
    <button
      className="text-gray-8 flex tracking-wider bg-primary-5 px-5 py-3 hover:animate-btn-hover active:bg-primary-2 disabled:bg-gray-6"
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default Button;
