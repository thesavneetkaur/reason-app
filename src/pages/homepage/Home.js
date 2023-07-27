import React from "react";
import InfoSection from "../../components/infoSection/InfoSection";
import CharityInfo from "../../components/infoSection/CharityInfo";
import LearnMore from "../../components/infoSection/LearnMore";
import ServicesSec from "../../components/infoSection/ServicesSec";

function Home() {
  return (
    <>
      <InfoSection />
      <CharityInfo />
      <LearnMore />
      <ServicesSec />
    </>
  );
}

export default Home;
