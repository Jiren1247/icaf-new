import React from "react";
import ChildArt from "../../../components/magazinePage/ChildArt";
import Slide from "../../../components/magazinePage/Slide";
import BackIssues from "../../../components/magazinePage/BackIssues";
import Testimonial from "../../../components/magazinePage/Testimonial";
import Donate from "../../../components/magazinePage/Donate";
import Footer from "../../../components/Footer";

function MagazinePage() {
  return (
    <div className="">
        <ChildArt />
        <Slide />
        <BackIssues />
        <Testimonial />
        <Donate />
        <Footer />
    </div>
  )
}

export default MagazinePage;
