import React from "react";

// render a reusable styled button component
const Button: React.FC<{
  disabled?: boolean;
  className?: string;
  type?: 'button' | 'reset' | 'submit';
}> = (props) => {
  return (
    <button type={props.type ? props.type : 'submit'}
      className={`text-gray-8 flex tracking-wider bg-primary-5 px-5 py-3 hover:animate-btn-hover active:bg-primary-2 disabled:bg-gray-6 ${props.className}`}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default Button;
