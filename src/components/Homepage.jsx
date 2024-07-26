import React from "react";
import HeroSection from "./HeroSection";
import DonorList from "./DonorList";
import RequestsBlood from "./RequestsBlood";
import DonationCampaign from "./DonationCampaign";
import DonationProcess from "./DonationProcess";

const Homepage = () => {
  return <div>
    <HeroSection />
    <RequestsBlood />
    <DonorList />
    <DonationProcess />
    <DonationCampaign />
  </div>
};

export default Homepage;
