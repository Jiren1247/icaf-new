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
    <div className="relative overflow-x-hidden overflow-y-hidden pb-48 pt-24">
        <div className="z-0">
            <Image src={heading} alt="" className="absolute"></Image>
            <Image src={graySquare} alt="" className="absolute"></Image>
            <Image src={blueLine} alt="" className="absolute -bottom-52 scale-125"></Image>
        </div>
        <div className="space-y-12 py-24 px-12">
            <div className="relative xsm:w-full md:w-2/3 lg:w-1/2">
                <h1 className="text-5xl font-bold text-center text-white italic inline-block pr-6">ChildArt</h1>
                <h1 className="text-5xl font-bold text-center text-white inline-block">Magazine</h1>
                <p className="text-lg text-white w-3/4">The American Academy of Arts & Sciences 2021 Report provides “evidence of the attributes, values, and skills that come from arts education, including social and emotional development, improvements in school engagement, as well as vital civic and social participation.”</p>
            </div>
            <div className="relative z-20">
                <Button bgColor={"bg-yellow"} textColor={"text-black"}  link={""} icon={<Image src={favorite} alt=""></Image>} children={"Donate to our campaign"}></Button>
            </div>
        </div>
    </div>
  )
}

export default ChildArt;
