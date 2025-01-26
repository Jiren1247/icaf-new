import React from "react";
import ChildArt from "../../../components/magazinePage/ChildArt";
import Slide from "../../../components/magazinePage/Slide";
import BackIssues from "../../../components/magazinePage/BackIssues";
import Testimonial from "../../../components/magazinePage/Testimonial";
import DonationCard from "../../../components/DonationCard";

function MagazinePage() {
  return (
    <div className="overflow-hidden">
        <ChildArt />
        <Slide />
        <BackIssues />
        <Testimonial />
          <div className="relative flex mx-auto mt-10 mb-20 max-w-screen-2xl px-8 md:px-12 lg:px-16 xl:px-20">
        <DonationCard />
      </div>
    </div>
  )
}

export default MagazinePage;
