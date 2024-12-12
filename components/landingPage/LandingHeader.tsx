"use client"
import React from 'react';
import Button from '../Button';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Image from 'next/image';

const LandingHeader = () => {

  return (
    <section className='relative z-10 mt-[98px]'>      
      <Image 
        src="/landingPage/beginner_sm.png" 
        alt="Beginner for sm devices" 
        className="w-full h-fit min-h-[600px] xsm:min-h-[400px] block sm:hidden"
        width={1600}
        height={900}
      />
      <Image 
        src="/landingPage/beginner_md.png" 
        alt="Beginner for md devices" 
        className="w-full h-fit max-h-[500px] hidden sm:block md:hidden"
        width={1600}
        height={900}
      />
      <Image 
        src="/landingPage/beginner_lg.png" 
        alt="Beginner for lg devices" 
        className="w-full h-fit min-h-[650px] hidden md:block xl:hidden"
        width={1600}
        height={900}
      />
      <Image 
        src="/landingPage/beginner_xl.png" 
        alt="Beginner for xl devices" 
        className="w-full h-fit hidden xl:block 2xl:hidden"
        width={1600}
        height={900}
      />
      <Image 
        src="/landingPage/beginner_2xl.png" 
        alt="Beginner for 2xl devices" 
        className="w-full h-fit max-h-[700px] hidden 2xl:block"
        width={1600}
        height={900}
      />
      {/* <div className="m-auto max-w-screen-2xl px-8 md:px-12 lg:px-16 xl:px-20 bg-gradient-to-b from-white/95 to-white/0 from-0% to-90% sm:to-70% sm:bg-gradient-to-r absolute top-0 w-full h-full flex flex-col"> */}
      <div className="m-auto max-w-screen-2xl px-8 md:px-12 lg:px-16 xl:px-20 absolute top-0 w-full h-full flex flex-col">
        <div className='w-full text-white sm:w-2/3 md:w-3/5 mt-10 md:mt-20 xl:mt-24'>
          <h1 className="font-montserrat text-4xl md:text-[32px] lg:text-[40px] xl:text-6xl font-extrabold">Welcome to ICAF, Inspiring Creativity, Transforming Lives</h1>
          <p className='font-openSans mt-4 text-base md:text-xl lg:text-base xl:text-xl font-normal xl:font-semibold'>Inspiring and empowering youth through the arts since 1997.</p>
        </div>
        
        <div className='mt-7 sm:mt-4 md:mt-8 lg:mt-4 xl:mt-8'>
          <Button
            bgColor="bg-yellow"
            textColor="text-black"
            link="/"
            icon={<FavoriteBorderIcon />}
          >
            Donate to our campaign
          </Button>
        </div>
      </div>
    </section>
  );
};

export default LandingHeader;