import React from "react";

const StyledH3: React.FC = (props) => {
  return (
    <React.Fragment>
      <h3 className="text-2xl text-primary-2 font-bold font-Open-Sans mb-3">
        {props.children}
      </h3>
      <div className="w-10 h-[3px] bg-tertiary-1"></div>
    </React.Fragment>
  );
};

export default StyledH3;
