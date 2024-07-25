import React from "react";
import HeroSection from "./HeroSection";
import DonorList from "./DonorList";
import BloodCategory from "./BloodCategory";
import DonationCampaign from "./DonationCampaign";

const Homepage = () => {
  return <div>
    <HeroSection />
    <DonorList />
    <BloodCategory />
    <DonationCampaign />
  </div>
};

export default Homepage;
