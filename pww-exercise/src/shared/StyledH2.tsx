import React from "react";

const StyledH2: React.FC = (props) => {
  return (
    <React.Fragment>
      <h2 className="text-primary-2 font-bold font-Open-Sans mb-3">
        {props.children}
      </h2>
      <div className="w-10 h-[3px] bg-tertiary-1"></div>
    </React.Fragment>
  );
};

export default StyledH2;