"use client"
import React, { useState } from "react";


function BackIssues() {
  const images = Array.from({ length: 15 }, (_, i) => `/MagazinePage/ChildArt/${String(i + 1).padStart(2, '0')}.png`);
  const [showAll, setShowAll] = useState(false); // 控制显示数量的状态

  const toggleShowAll = () => {
    setShowAll((prev) => !prev);
  };
  const displayedImages = showAll ? images : images.slice(0, 6);

  return (
    <div className="lg:px-24 xl:px-36 space-y-12 pt-24">
      <div className="space-y-12 py-6">
        <h2 className="font-extrabold text-3xl lg:text-4xl font-montserrat text-center">Back issues of <span className="italic">ChildArt</span></h2>
        <p className="px-6 md:px-24 mb-4 font-openSans text-base md:text-xl">
          You can choose from a list of the quarterly magazine’s past issues. Each magazine covers a relevant and timely subject. The information is presented in an exciting, colorful way for young readers to cherish. Please click on a magazine’s cover for the table of contents.
        </p>

      </div>
      <div
        className={`grid px-4 gap-4 grid-cols-2 md:grid-cols-3`}
      >
        {displayedImages.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Slide ${index + 1}`}
            className="md:w-2/3 mx-auto h-auto object-cover rounded-lg"
          />
        ))}
      </div>
      <div className="flex items-center">
        <button
          onClick={toggleShowAll}
          className="text-xl mt-6 mx-auto px-6 py-2 bg-yellow font-semibold rounded-full shadow-sm"
        >
          {showAll ? 'View Less' : 'View More'}
        </button>
      </div>

    </div>
  )
}

export default BackIssues;
