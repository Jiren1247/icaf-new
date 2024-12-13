"use client"
import React from 'react';
import AdsClickIcon from '@mui/icons-material/AdsClick';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Image from 'next/image'; 

const WhyICAF = () => {

  return (
    <>
      <section className='relative z-50 -mt-8 md:-mt-28 mb-48'>
        <Image 
          src="/landingPage/BlueFirework.png" 
          alt="Blue Firework"
          width={64} 
          height={64}
          className='absolute right-1/3 -top-12 hidden lg:block'
        />
        <h2 className='text-center text-[32px] lg:text-[40px] font-extrabold font-montserrat z-100 col-span-2 mb-10 lg:mb-20'>Systemic Change</h2> 
        <div className="m-auto max-w-screen-2xl px-8 md:px-12 lg:px-16 xl:px-20 grid grid-cols-1 lg:grid-cols-2 gap-8 relative">
          <div className="relative h-[400px]">
            <Image 
              src="/landingPage/missionMapUS.png" 
              alt="us map"
              fill
              style={{ objectFit: 'contain' }}
              className="rounded-xl"
            />
            <div className="mt-16 lg:mt-28 relative z-10 flex flex-col justify-center items-start px-6 lg:pl-20 2xl:pl-40">
              <div className="flex items-center">
                <AdsClickIcon style={{ color: "#2057CC" }} />
                <h2 className="ml-5 text-blue text-2xl lg:text-4xl font-semibold font-montserrat">Mission</h2>
              </div>
              <p className="mt-4 text-base text-black font-normal font-openSans lg:w-2/3">
                To seed children's imagination, cultivate their creativity, and grow empathy for "a more perfect union."
              </p>
            </div>
            <div className="mt-8 block lg:hidden px-6">
              <div className="flex items-center">
                <VisibilityIcon style={{ color: "#DA1E40" }} />
                <h2 className="ml-5 text-main-red text-2xl font-semibold font-montserrat">Vision</h2>
              </div>
              <p className="mt-4 text-base text-black font-normal font-openSans">
                To democratize creativity and mainstream empathy to build a better world.
              </p>
            </div>
            
          </div>

          <div className="relative h-[400px] hidden lg:block">
            <Image 
              src="/landingPage/missionMapWorld.png" 
              alt="world map"
              fill
              style={{ objectFit: 'contain' }}
              className="rounded-xl"
            />
            
            <div className="mt-28 relative z-10 flex flex-col justify-center items-start pl-20 2xl:pl-40">
              <div className="flex items-center">
                <VisibilityIcon style={{ color: "#DA1E40" }} />
                <h2 className="ml-5 text-main-red text-4xl font-semibold font-montserrat">Vision</h2>
              </div>
              <p className="mt-4 text-base text-black font-normal font-openSans w-2/3">
                To democratize creativity and mainstream empathy to build a better world.
              </p>
            </div>
          </div>
        </div>


      </section>

      <section className='my-40 object-contain object-center'>
        <Image 
          src="/landingPage/GirlICAF_sm.png"
          alt="GirlICAF for sm devices"
          width={1920}
          height={1080}
          className="w-full h-fit max-h-[600px] block sm:hidden"
        />

        <Image 
          src="/landingPage/GirlICAF_md.png"
          alt="GirlICAF for md devices"
          width={1920}
          height={1080}
          className="w-full h-fit hidden sm:block md:hidden"
        />

        <Image 
          src="/landingPage/GirlICAF_lg.png"
          alt="GirlICAF for lg devices"
          width={1920}
          height={1080}
          className="w-full h-fit hidden md:block lg:hidden"
        />

        <Image 
          src="/landingPage/GirlICAF_xl.png"
          alt="GirlICAF for xl devices"
          width={1920}
          height={1080}
          className="w-full h-fit hidden lg:block xl:hidden"
        />

        <Image 
          src="/landingPage/GirlICAF_2xl.png"
          alt="GirlICAF for 2xl devices"
          width={1920}
          height={1080}
          className="w-full h-fit max-h-[700px] hidden xl:block"
        />
      </section>

    </>
  );
};

export default WhyICAF;