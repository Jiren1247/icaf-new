import React, { useEffect, useRef, useState } from 'react';
import Button from './Button';
import Image from 'next/image';
import { HeartIcon } from "../public/svgs/HeartIcon";

const DonationCard = () => {
  return(
    <>
      <div className='z-20 px-12 rounded-3xl bg-blue bg-opacity-10 w-full'>
        <h2 className='pt-14 font-montserrat font-semibold text-2xl text-left w-full md:w-3/4'>
          Help the children change the world. 
        </h2>
        <div className='mt-4 pb-14 gap-x-5 sm:w-2/3 md:w-1/2 lg:w-1/3 2xl:w-1/4'>
          <Button
            bgColor="bg-yellow"
            textColor="text-black w-full group"
            link="/"
            icon={<HeartIcon />}
          >
            Donate
          </Button>
          {/* <Button
            bgColor="bg-navy-blue"
            textColor="text-white w-full"
            link="/"
          >
            Contact Us
          </Button> */}
        </div>
      </div>
      <Image 
        src="/landingPage/RedAndBlueFirework.png"
        alt="Red and Blue Firework"
        className="z-10 absolute right-0 -top-[50px] xsm:-top-[100px] md:top-20 lg:right-2 max-w-[300px] w-1/3 sm:w-1/4 2xl:w-1/5"
        width={300}
        height={300}
      />
    </>
  )
};

export default DonationCard;