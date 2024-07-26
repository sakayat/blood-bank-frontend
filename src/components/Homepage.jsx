import React from "react";
import HeroSection from "./HeroSection";
import DonorList from "./DonorList";
import RequestsBlood from "./RequestsBlood";
import DonationCampaign from "./DonationCampaign";

const Homepage = () => {
  return <div>
    <HeroSection />
    <RequestsBlood />
    <DonorList />
    <DonationCampaign />
  </div>
};

export default Homepage;
