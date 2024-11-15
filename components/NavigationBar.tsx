import React from "react";
import { ICAFlogo } from "../public/landingPage/ICAFLogo";
import Link from "next/link";

const NavigationBar = () => {
  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 min-h-[98px] h-[98px] bg-white w-full flex justify-center items-center shadow-md">
        <div className="my-2"><ICAFlogo /></div>
        <Link href={"./magazine"} ><h1>magazine</h1></Link>
      </div>
    </>
  )
};

export default NavigationBar;