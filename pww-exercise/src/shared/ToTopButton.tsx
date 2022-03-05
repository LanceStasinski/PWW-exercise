import React from "react";

import chevron from "../assets/chevron.svg";

// renders a button that smoothly scrolls to the top of the page on click
const ToTopButton: React.FC = () => {
  // smoothly scroll to top
  const scrollToTop = () => {
    const header = document.getElementById("header");
    header?.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  return (
    <div className="w-full flex justify-end">
      <button
        type="button"
        onClick={scrollToTop}
        className="flex items-center text-gray-3"
      >
        Back to Top{" "}
        <div className="rounded-full ml-3 bg-faded-blue flex justify-center items-center p-3">
          <img data-testid="chevron" src={chevron} alt="Up arrow" />
        </div>
      </button>
    </div>
  );
};

export default ToTopButton;
