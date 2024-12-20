import React from "react";
import ImpactHeader from "../../../components/ImpactPage/ImpactHeader";
import Creativity from "../../../components/ImpactPage/Creativity";
import MakingAnImpact from "../../../components/ImpactPage/MakingAnImpact";
import GalleryCarousel from "../../../components/ImpactPage/GalleryCarousel";
import DonationCard from "../../../components/DonationCard";

const ImpactPage = () => {
  return (
    <>
      <ImpactHeader />
      <Creativity />
      <MakingAnImpact />
      <GalleryCarousel />
      <div className="relative flex mx-auto mt-10 mb-20 max-w-screen-2xl px-8 md:px-12 lg:px-16 xl:px-20">
        <DonationCard />
      </div>
      
    </>
  )
};

export default ImpactPage;