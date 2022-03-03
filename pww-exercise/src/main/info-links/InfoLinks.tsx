import React from "react";

import PopularServices from "./PopularLinks";
import RecentUpdates from "./recent-updates/RecentUpdates";

const InfoLinks: React.FC = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-5/6 p-10">
        <PopularServices />
        <div className="w-full grid grid-cols-2 gap-8 my-24">
          <RecentUpdates />
          
          <aside className="w-1/2">stuff</aside>
        </div>
      </div>
    </div>
  );
};

export default InfoLinks;
