import React from "react";
import "./App.css";

import MainNavigation from "./navigation/MainNavigation";
import SearchArea from "./main/SearchArea";
import ServiceCardList from "./main/service-cards/ServiceCardList";

function App() {
  return (
    <div className="flex flex-col items-center">
      <div className="max-w-[1400px]">
        <MainNavigation />
        <div className="h-2 bg-primary-3"></div>
        <main>
          <SearchArea />
          <ServiceCardList />
        </main>
      </div>
    </div>
  );
}

export default App;
