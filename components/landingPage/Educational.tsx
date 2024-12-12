import React from "react";
import { EducationalCard } from "./EducationalCard";

 const Educational= () => {

  return (
    <div className="mt-24 sm:mt-32 md:mt-36 m-auto max-w-screen-2xl px-8 md:px-12 lg:px-16 xl:px-20">
      <h1 className="font-extrabold font-montserrat text-2xl lg:text-4xl text-center text-black">Educational & Cultural Impact</h1>
      <p className='mb-10 mt-10 xl:mt-8 2xl:mt-6 text-base md:text-xl font-normal text-black font-openSans text-left lg:text-center'>ICAF serves American children as their national arts organization and the world's children as their global arts organization, using art as a universal language.</p>
      <div className="grid grid-cols-1 gap-y-6 sm:gap-y-8 lg:gap-7 xl:gap-8 2xl:gap-10 lg:grid-cols-4 lg:grid-rows-2">
        <div className="col-span-1 order-1 row-span-1">
          <EducationalCard
            borderColor= "border-red"
            title= "Pedagogy"
            description= "ICAF has pioneered STEAMS education that integrates Art and Sports with STEM disciplines for a more holistic pedagogy."
          />
        </div>
        <div className="col-span-1 order-2 lg:order-3 row-span-1">        
          <EducationalCard
            borderColor= "border-blue"
            title= "Advocacy"
            description= "To give voice to children and their creative expressions, ICAF organizes youth panels and art exhibitions, youth panels and children's art exhibitions nationwide and worldwide."
          />
        </div>
        <div className="col-span-1 order-3 lg:order-4 row-span-1 lg:col-span-4">
          <EducationalCard
            borderColor= "border-yellow"
            title= "5M"
            description= {`Since 1997, approximately five million students worldwide have produced art under ICAF programs, benefited from ICAF's festivals and events, and interactive exhibitions that kindle the "inner child" in professionals.`}
          />
        </div>
        <a href="#" target="_blank" rel="noopener noreferrer" className="col-span-1 lg:col-span-3 order-4 lg:order-2 row-span-1 lg:row-span-2">
          <img
            src="/landingPage/videoThumbnail.jpg"
            alt="Video Thumbnail"
            className="rounded-2xl w-full h-full object-cover object-center"
          />
        </a>

      </div>

    </div>
  );
};

export default Educational;