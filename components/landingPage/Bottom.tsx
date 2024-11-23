"use client"
import React, { useEffect, useRef, useState } from 'react';
import Button from '../Button';
import a from '../../public/landingPage/carousel/a.jpg';
import b from '../../public/landingPage/carousel/b.jpg';
import c from '../../public/landingPage/carousel/c.jpg';
import d from '../../public/landingPage/carousel/d.jpg';
import e from '../../public/landingPage/carousel/e.jpg';
import f from '../../public/landingPage/carousel/f.jpg';
import g from '../../public/landingPage/carousel/g.jpg';
import h from '../../public/landingPage/carousel/h.jpg';
import i from '../../public/landingPage/carousel/i.jpeg';
import j from '../../public/landingPage/carousel/j.jpg';
import k from '../../public/landingPage/carousel/k.jpg';
import l from '../../public/landingPage/carousel/l.png';
import m from '../../public/landingPage/carousel/m.jpg';
import Image from "next/image";
import DonationCard from '../DonationCard';

const Bottom = () => {
  const images = [a, b, c, d, e, f, g, h, i, j, k, l, m];
  const scrollRef = useRef<HTMLDivElement>(null); // Ref for the scrollable container
  const [isPaused, setIsPaused] = useState(false); // Manage pause state

  useEffect(() => {
    const scrollContainer = scrollRef.current;

    const scrollImages = () => {
      if (scrollContainer && !isPaused) {
        scrollContainer.scrollLeft += 2; // Adjust this value for smoother scrolling
        
        // If the container has scrolled to the end, reset to the start
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
          scrollContainer.scrollLeft = 0;
        }
      }
    };

    // Set an interval to scroll images every 20ms for smoother scrolling
    const scrollInterval = setInterval(scrollImages, 20);

    // Cleanup the interval on component unmount
    return () => clearInterval(scrollInterval);
  }, [isPaused]);

  // Pause the scrolling when mouse enters the container
  const handleMouseEnter = () => setIsPaused(true);

  // Resume scrolling when mouse leaves the container
  const handleMouseLeave = () => setIsPaused(false);

  return (
    <section className='relative z-30 m-auto max-w-screen-2xl px-8 md:px-12 lg:px-16 xl:px-20'>
      <DonationCard />

      <div 
        ref={scrollRef} 
        className="py-32 z-20 flex flex-row overflow-x-auto m-auto whitespace-nowrap px-4 gap-x-4 scrollbar-hide" 
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {images.map((src, index) => (
          <Image
            key={index}
            src={src}
            alt={`image-${index}`} 
            className="w-72 xl:w-96 h-44 md:h-48 lg:h-52 xl:h-64 z-20 object-cover object-center rounded-xl"
          />
        ))}
      </div>
    </section>
  );
};

export default Bottom;