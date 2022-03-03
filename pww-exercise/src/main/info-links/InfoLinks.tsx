import React from "react";

import PopularServices from "./PopularLinks";

const InfoLinks: React.FC = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-5/6 p-10">
        <PopularServices />
      </div>
    </div>
  );
};

export default InfoLinks;
