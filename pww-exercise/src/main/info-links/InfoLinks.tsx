import React from "react";

import Calendar from "./calendar/Calendar";
import PopularServices from "./PopularLinks";
import RecentUpdates from "./recent-updates/RecentUpdates";
import ToTopButton from "../../shared/ToTopButton";

// renders containers for three sections
const InfoLinks: React.FC = () => {
  return (
    <div
      data-testid="info-links-container"
      className="w-full flex flex-col items-center"
    >
      <div className="w-[90%] py-10 px-2 md:w-5/6 md:p-10">
        <PopularServices />
        <div data-testid='updates-events-container' className="w-full flex flex-col md:grid md:grid-cols-2 md:gap-8 my-24">
          <RecentUpdates />
          <Calendar />
        </div>
        <ToTopButton />
      </div>
    </div>
  );
};

export default InfoLinks;
