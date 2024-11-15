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
    <div className="px-36">
      <div className="space-y-6 py-6">
        <h2 className="font-bold text-3xl text-center">Back issues of <span className="italic">ChildArt</span></h2>
        <p className="px-24 mb-4 text-xl">
          You can choose from a list of the quarterly magazine’s past issues. Each magazine covers a relevant and timely subject. The information is presented in an exciting, colorful way for young readers to cherish. Please click on a magazine’s cover for the table of contents.
          <div className="font-bold mt-4 text-xl">
            For More
          </div>
          <div className="font-bold">
            Click on the cover
          </div>
        </p>

      </div>
      <div
        className={`grid gap-4 ${showAll ? 'grid-cols-3 grid-rows-5' : 'grid-cols-3 grid-rows-2'
          }`}
      >
        {displayedImages.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Slide ${index + 1}`}
            className="w-2/3 mx-auto h-auto object-cover rounded-lg"
          />
        ))}
      </div>
      <div className="flex items-center">
        <button
          onClick={toggleShowAll}
          className="mt-6 mx-auto px-6 py-2 bg-yellow font-semibold rounded-full shadow-sm"
        >
          {showAll ? 'View Less' : 'View More'}
        </button>
      </div>

    </div>
  )
}

export default BackIssues;
