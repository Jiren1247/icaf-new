import React from "react";
import { ICAFlogo } from "../public/landingPage/ICAFLogo";
import Link from "next/link";
import ArrowRight from "../public/header/Arrow_Right.svg"
import Image from "next/image";
import Button from "./Botton";

const links = [
  {name: 'ABOUT', href:'/about'},
  {name: 'PROGRAMS', href:'/programs'},
  {name: 'IMPACT', href:'/impact'},
  {name: 'RESOURCES', href:'/resources'},
  {name: 'NEWS', href:'/news'},
  {name: 'JOIN US', href:'/join'},
  {name: 'GALLERY', href:'/gallery'},
]




const NavigationBar = () => {
  return (
    <>
      <div className="xl:hidden fixed top-0 left-0 right-0 z-50 min-h-[98px] h-[98px] bg-white w-full flex justify-center items-center shadow-md">
        <div className="my-2"><ICAFlogo /></div>
      </div>
      <div className="flex flex-row w-full my-4 px-12 justify-between">
        <div className="my-2"><ICAFlogo /></div>
        <div className="flex flex-row">
          <Link className="relative flex flex-row items-center text-lg font-bold text-gray-800 hover:text-blue-800 px-4 py-2" href={""}>
            
            <div className="ml-2">
              <Image src={ArrowRight} alt="arrow"></Image>
            </div>
          </Link>
        </div>
        <div className="relative">
          <Button bgColor="bg-light-yellow" textColor="text-black" link="/donate" children="DONATE"/>
        </div>
      </div>
    </>
  )
};

export default NavigationBar;