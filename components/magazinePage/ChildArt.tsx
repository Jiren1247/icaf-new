import React from "react";
import heading from "../../public/magazinePage/heading.png";
import graySquare from "../../public/magazinePage/graySquare.png";
import blueLine from "../../public/magazinePage/blueLine.png";
import Image from "next/image";
import Button from "../Button";
import { HelpOutline } from "@mui/icons-material";
import favorite from "../../public/MagazinePage/favorite.png";

function ChildArt() {
  return (
    <div className="relative overflow-x-hidden overflow-y-hidden pt-24 2xl:pt-36">
        <div className="z-0">
            <Image src={heading} alt="" className="absolute scale-110 h-fit min-h-[600px] xsm:min-h-[400px]"></Image>
            <Image src={graySquare} alt="" className="absolute scale-125 md:scale-110 h-fit min-h-[600px] xsm:min-h-[400px]"></Image>
        </div>
        <div className="space-y-6 xxsm:pt-12 lg:pt-24 xxsm:px-6 md:px-12">
            <div className="relative xsm:w-full md:w-2/3 lg:w-1/2">
                <h1 className="text-4xl lg:text-5xl xl:text-6xl font-montserrat leading-loose font-extrabold text-center text-white italic inline-block xxsm:pr-4 md:pr-6">ChildArt</h1>
                <h1 className="text-4xl lg:text-5xl xl:text-6xl font-montserrat font-extrabold leading-loose text-center text-white inline-block">Magazine</h1>
                <p className="text-base xl:text-xl text-white xxsm:w-full lg:w-3/4 pt-6">The American Academy of Arts & Sciences 2021 Report provides “evidence of the attributes, values, and skills that come from arts education, including social and emotional development, improvements in school engagement, as well as vital civic and social participation.”</p>
            </div>
            <div className="relative z-20">
                <Button bgColor={"bg-yellow"} textColor={"text-black"}  link={"./"} icon={<Image src={favorite} alt=""></Image>} children={"Donate to our campaign"}></Button>
            </div>
        </div>
        <Image src={blueLine} alt="" className="relative top-10 scale-125"></Image>
    </div>
  )
}

export default ChildArt;
