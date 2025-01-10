"use client";
import React from 'react';
import { ProjectCard } from './ProjectCard';
import WorldChildrenFestival2025 from '../../public/landingPage/WorldChildrenFestival2025.png';
import MyFavoriteSport2024 from '../../public/landingPage/MyFavoriteSport2024.png';
import VRHeaven2025 from '../../public/landingPage/VRHeaven2025.png';
import Image from 'next/image';

const SpecialProjects = () => {

  return (
    <>
      <Image 
        src="/landingPage/threeline_sm.png" 
        alt="Threeline for sm devices" 
        className="mt-96 xsm:mt-48 absolute w-full h-fit min-h-[600px] xsm:min-h-[400px] block sm:hidden"
        width={1600}
        height={900}
      />
      <Image 
        src="/landingPage/threeline_md.png" 
        alt="Threeline for md devices" 
        className="absolute w-full h-fit hidden sm:block lg:hidden"
        width={1600}
        height={900}
      />
      <Image 
        src="/landingPage/threeline_lg.png" 
        alt="Threeline for lg devices" 
        className="mt-96 absolute w-full h-fit hidden lg:block xl:hidden"
        width={1600}
        height={900}
      />
      <Image 
        src="/landingPage/threeline_xl.png" 
        alt="Threeline for xl devices" 
        className="mt-96 absolute w-full h-fit hidden xl:block 2xl:hidden"
        width={1600}
        height={900}
      />
      <Image 
        src="/landingPage/threeline_2xl.png" 
        alt="Threeline for 2xl devices" 
        className="absolute w-full h-fit hidden 2xl:block"
        width={1600}
        height={900}
      />
      <section className='z-20 relative mt-32 mb-28 sm:mb-32 m-auto max-w-screen-2xl px-8 md:px-12 lg:px-16 xl:px-20'>
        <div className="flex justify-center items-center mb-10">
          <Image 
            src="/landingPage/BlueFirework.png" 
            alt="left firework"
            width={64}
            height={64} 
            className="sm:w-16 md:w-14 lg:w-16 2xl:w-20 h-auto mx-2 mb-12 lg:mb-16 xl:mb-20"
          />
          <h1 className="font-extrabold font-montserrat text-2xl lg:text-4xl text-center text-black">
            Special Projects Websites
          </h1>
          <Image 
            src="/landingPage/BlueFirework.png" 
            alt="right firework"
            width={64}
            height={64} 
            className="sm:w-16 md:w-14 lg:w-16 2xl:w-20 h-auto mx-2 mb-12 lg:mb-16 xl:mb-20"
          />
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
          <ProjectCard  
            background={WorldChildrenFestival2025}
            title="World Children's Festival"
            element="& America's 250th Celebration"
            link="http://WorldChildrensFestival.org"
            borderColor="border-red"
          />
          <ProjectCard  
            background={MyFavoriteSport2024}
            title="My Favorite Sport"
            element="A global art contest that combines art and sports"
            link="http://MyFavoriteSport.org"
            borderColor="border-blue"
          />
          <ProjectCard  
            background={VRHeaven2025}
            title="VR Heaven"
            element="Virtual Reality that brings Heaven to Earth"
            link="http://VRHeaven.org"
            borderColor="border-yellow"
          />
        </div>
      </section>
    </>
  );
};

export default SpecialProjects;