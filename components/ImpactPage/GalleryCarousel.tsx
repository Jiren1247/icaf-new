"use client";

import React, { useState } from "react";
import Image from "next/image";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Palette } from '../../public/impactPage/icons/Palette';
import { Duo } from '../../public/impactPage/icons/Duo';
import { Award } from '../../public/impactPage/icons/Award';

const GalleryCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const cards = [
    {
      backgroundColor: "#FFECCB",
      title: "Child Art Exhibitions",
      description:
        "We lead the world in showcasing children's art. Kids express their imagination through their artwork, offering a pure and honest perspective that can inspire us all.",
      image: "/impactPage/exhibitions.png",
      icon: <Palette />,
    },
    {
      backgroundColor: "#BFD0F2",
      title: "Children's Panels at Major Conferences",
      description:
        "We train and select talented young panelists to discuss important issues that affect the future, making sure their voices are heard.",
      image: "/impactPage/placeholder.png",
      icon: <Duo />,
    },
    {
      backgroundColor: "#E7BDB9",
      title: "World Children's Award",
      description:
        "Since 2007, we've honored business and cultural leaders chosen by children. Past winners include LEGO, the Swatch Group, and the W. K. Kellogg Foundation, with awards designed by renowned artists like Karim Rashid and Tiffany & Company.",
      image: "/landingPage/WorldChildrensAward.jpg",
      icon: <Award />,
    },
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + cards.length) % cards.length
    );
  };

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative z-0 m-auto max-w-screen-2xl px-8 md:px-12 lg:px-16 xl:px-20">
      <h2 className="font-extrabold font-montserrat text-2xl lg:text-4xl text-center text-black mb-8">
        Bringing Children's Voices to the World
      </h2>

      {/* Carousel Wrapper */}
      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-700"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {cards.map((card, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-full flex flex-col md:flex-row items-center rounded-[40px]"
              style={{
                backgroundColor: card.backgroundColor,
                height: "500px",
                padding: "0px",
              }}
            >
              {/* Image Section */}
              <div className="relative w-full md:w-1/2 h-1/2 md:h-full overflow-hidden rounded-t-[40px] md:rounded-r-[40px] md:rounded-l-none md:order-2">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover object-center"
                />
              </div>

              {/* Text Section */}
              <div className="text-left w-full md:w-1/2 p-6 md:px-8 md:py-12 md:order-1">
                <div className="my-4">{card.icon}</div>
                <h3 className="text-2xl font-extrabold font-montserrat mb-4">{card.title}</h3>
                <p className="text-base font-normal font-openSans">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="flex justify-center items-center mt-4 space-x-4">
        <button
          onClick={handlePrev}
          className="text-gray-500 text-2xl"
          aria-label="Previous Slide"
        >
          <ArrowBackIcon />
        </button>

        {/* Slide Dots */}
        <div className="flex space-x-2">
          {cards.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`rounded-full ${
                index === currentIndex ? "w-4 h-4 bg-[#3D5AF1]" : "my-0.5 w-3 h-3 bg-gray-400"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <button
          onClick={handleNext}
          className="text-gray-500 text-2xl"
          aria-label="Next Slide"
        >
          <ArrowForwardIcon />
        </button>
      </div>
    </div>
  );
};

export default GalleryCarousel;