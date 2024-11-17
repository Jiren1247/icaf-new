import React from "react";
import Image from "next/image";
import Button from '../Button';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

 const MakingAnImpact = () => {

  return (
    <div className="mt-24 mb-40 sm:mt-32 md:mt-36 m-auto max-w-screen-2xl px-8 md:px-12 lg:px-16 xl:px-20">
      <h1 className="font-extrabold font-montserrat text-2xl lg:text-4xl text-center text-black">Making an Impact</h1>
      <p className='mt-10 xl:mt-8 2xl:mt-6 text-base md:text-xl font-normal text-black font-openSans text-left lg:text-center'>Every day, thousands of kids learn about ICAF from their friends or online, helping them see themselves as creative individuals. They realize that their imagination can lead to new discoveries and innovations, and they know that their art is a true and honest form of expression.</p>
      <div className="mt-20 grid gap-x-8 grid-cols-1 lg:grid-cols-2">
        <Image 
          src="/impactPage/makingImpact.png"
          alt="Photo of kids playing"
          className="order-1 lg:order-2 w-full h-full object-cover object-center rounded-3xl"
          width={800}
          height={400}
        />
        <div className="mt-16 lg:mt-0 order-2 lg:order-1">
          <h3 className="font-montserrat text-2xl font-bold text-black">5M Children</h3>
          <p className='mt-1 xl:mt-8 2xl:mt-6 text-base md:text-xl font-normal text-black font-openSans text-left'>ICAF has reached more than five million children, encouraging them to create original artworks through our programs.</p>
          <h3 className="mt-10 font-montserrat text-2xl font-bold text-black">2.5M Participants</h3>
          <p className='mt-1 xl:mt-8 2xl:mt-6 text-base md:text-xl font-normal text-black font-openSans text-left'>IOur festivals and exhibitions have attracted about 2.5 million participants and visitors in major cities worldwide</p>
          <h3 className="mt-10 font-montserrat text-2xl font-bold text-black">Making People Smile since 1998</h3>
          <p className='mt-1 xl:mt-8 2xl:mt-6 text-base md:text-xl font-normal text-black font-openSans text-left'>Over a million children, parents, teachers, and librarians have enjoyed our quarterly ChildArt magazine since 1998.</p>
          <div className="w-full mt-16 ms-0 lg:mx-auto grid">
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
      </div>
    </div>
  );
};

export default MakingAnImpact;