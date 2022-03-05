import React from "react";

// renders a reusable styled h3 element with a gold bar beneath
const StyledH3: React.FC = (props) => {
  return (
    <React.Fragment>
      <h3 className="text-2xl text-primary-2 font-bold font-Open-Sans mb-3">
        {props.children}
      </h3>
      <div data-testid="gold-bar" className="w-10 h-[3px] bg-tertiary-1"></div>
    </React.Fragment>
  );
};

export default StyledH3;
