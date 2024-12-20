"use client"
import React from 'react';
import Image from 'next/image';

const ImpactHeader = () => {

  return (
    <section className='relative z-10 mt-[98px]'>      
      <Image 
        src="/impactPage/beginner_sm.png" 
        alt="Beginner for sm devices" 
        className="w-full h-fit min-h-[600px] xsm:min-h-[400px] block sm:hidden"
        width={1600}
        height={900}
      />
      <Image 
        src="/impactPage/beginner_md.png" 
        alt="Beginner for md devices" 
        className="w-full h-fit max-h-[500px] hidden sm:block md:hidden"
        width={1600}
        height={900}
      />
      <Image 
        src="/impactPage/beginner_lg.png" 
        alt="Beginner for lg devices" 
        className="w-full h-fit min-h-[650px] hidden md:block xl:hidden"
        width={1600}
        height={700}
      />
      <Image 
        src="/impactPage/beginner_xl.png" 
        alt="Beginner for xl devices" 
        className="w-full h-fit hidden xl:block 2xl:hidden"
        width={1600}
        height={700}
      />
      <Image 
        src="/impactPage/beginner_2xl.png" 
        alt="Beginner for 2xl devices" 
        className="w-full h-fit max-h-[500px] hidden 2xl:block"
        width={1600}
        height={700}
      />
      <div className="absolute top-0 w-full h-full flex flex-col" style={{ top: '28%' }}>
        <h1 className='text-white text-center font-montserrat font-extrabold text-6xl'>Impact</h1>
      </div>
    </section>
  );
};

export default ImpactHeader;