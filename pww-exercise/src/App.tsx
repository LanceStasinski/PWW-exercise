import React from "react";
import "./App.css";

import MainNavigation from "./navigation/MainNavigation";
import SearchArea from "./main/search-area/SearchArea";
import ServiceCardList from "./main/service-cards/ServiceCardList";
import InfoLinks from "./main/info-links/InfoLinks";
import Footer from "./footer/Footer";

function App() {
  return (
    <div className="flex flex-col items-center">
      <div className="max-w-[1400px]">
        <MainNavigation />
        <main>
          <SearchArea />
          <ServiceCardList />
          <InfoLinks />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
