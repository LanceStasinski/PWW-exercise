import React from "react";

import Calendar from "./calendar/Calendar";
import PopularServices from "./PopularLinks";
import RecentUpdates from "./recent-updates/RecentUpdates";

const InfoLinks: React.FC = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-[90%] py-10 px-2 md:w-5/6 md:p-10">
        <PopularServices />
        <div className="w-full flex flex-col md:grid md:grid-cols-2 md:gap-8 my-24">
          <RecentUpdates />
          <Calendar />
        </div>
      </div>
    </div>
  );
};

export default InfoLinks;
