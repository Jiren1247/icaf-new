import React from "react";
import Image from "next/image";
import Button from '../Button';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

 const MakingAnImpact = () => {

  return (
    <div className="mt-24 mb-40 sm:mt-32 md:mt-36 m-auto max-w-screen-2xl px-8 md:px-12 lg:px-16 xl:px-20">
      <h1 className="font-extrabold font-montserrat text-2xl lg:text-4xl text-center text-black">To Democratize Creativity</h1>
      <p className='mt-10 xl:mt-8 2xl:mt-6 text-base md:text-xl font-normal text-black font-openSans text-left lg:text-center'>ICAF boosts children's confidence and self-esteem by appraising their art as the most honest and pure form of human creative expression. ICAF also kindles the inner child in adults to spark their creativity and empathy.</p>
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
          <p className='mt-1 xl:mt-8 2xl:mt-6 text-base md:text-xl font-normal text-black font-openSans text-left'>ICAF has reached and benefitted over five million children since 1997.</p>
          <h3 className="mt-10 font-montserrat text-2xl font-bold text-black">2.5M Participants</h3>
          <p className='mt-1 xl:mt-8 2xl:mt-6 text-base md:text-xl font-normal text-black font-openSans text-left'>ICAF's festivals and exhibitions worldwide have attracted about 2.5 million attendees over the past 27 years.</p>
          <h3 className="mt-10 font-montserrat text-2xl font-bold text-black">1.2M New Learners</h3>
          <p className='mt-1 xl:mt-8 2xl:mt-6 text-base md:text-xl font-normal text-black font-openSans text-left'>ICAF's <span className="italic">ChildArt</span> magazines and articles in refereed journals have a combined global readership of 1,200,000 since the magazine was launched in 1998.</p>
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