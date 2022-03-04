import React from "react";

import chevron from "../assets/chevron.svg";

const ToTopButton: React.FC = () => {
  const scrollToTop = () => {
    const header = document.getElementById('header');
    header?.scrollIntoView({behavior: "smooth", block: "start"})
  }
  return (
    <div className="w-full flex justify-end">
      <div>
        <button type='button' onClick={scrollToTop} className="flex items-center text-gray-3">
          Back to Top{" "}
          <div className="rounded-full ml-3 bg-faded-blue flex justify-center items-center p-3">
            <img src={chevron} alt="Up arrow" />
          </div>
        </button>
      </div>
    </div>
  );
};

export default ToTopButton;