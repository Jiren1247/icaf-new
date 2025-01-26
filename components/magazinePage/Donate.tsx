import React from "react";
import Button from "../Button";
import FlowerLogo from "../../public/MagazinePage/Donation.svg"
import Image from 'next/image'

function Donate() {
  return (
    <div className="relative mx-auto px-36 py-12">
        <div className="relative flex flex-col py-24 px-12 space-y-6 bg-light-blue rounded-3xl">
            <h2 className="text-2xl font-bold w-2/3">Your donation today will bring the arts to more children and help them become creative and empathic.</h2>
            <div className="flex flex-row space-x-4">
                <Button bgColor="bg-yellow" textColor="text-black" link="/donate">Donate</Button>
                <Button bgColor="bg-navy" textColor="text-white" link="/donate">Contact Us</Button>
            </div>
            <Image src={FlowerLogo} alt="flower logo" className="absolute bottom-0 right-0"></Image>
        </div>
        
        
    </div>
  )
}

export default Donate;
