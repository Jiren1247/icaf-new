import React from "react";
import NavigationBar from '../../../components/NavigationBar';
import Footer from '../../../components/Footer'
import MagazinePage from "./MagazinePage";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* <NavigationBar /> */}
      <MagazinePage />
      {/* <Footer /> */}
    </div>
  );
}
