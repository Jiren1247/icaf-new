"use client";
import React, { useState } from 'react';
import { AccordionCard } from './AccordionCard';
import { ReducingPoverty } from '../../public/impactPage/icons/ReducingPoverty';
import { Education } from '../../public/impactPage/icons/Education';
import { ReducingInequities } from '../../public/impactPage/icons/ReducingInequities';
import { Health } from '../../public/impactPage/icons/Health';
import { Gender } from '../../public/impactPage/icons/Gender';
import { BuildingPeace } from '../../public/impactPage/icons/BuildingPeace';

const Creativity = () => {
  const [expandedIndices, setExpandedIndices] = useState<number[]>([]);

  const toggleAccordion = (index: number) => {
    setExpandedIndices((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const list = [
    {
      color: "#D32413",
      datas: {
        header: "Reducing Poverty",
        element: "ICAF fosters creativity to empower low-income students to blaze new trails that can disrupt the vicious cycle of inherited poverty.",
      },
      Icon: ReducingPoverty,
    },
    {
      color: "#FFB505",
      datas: {
        header: "Providing Quality Education",
        element: "ICAF has pioneered STEAMS education to integrate Art and Sports with STEM disciplines for students’ holistic development.",
      },
      Icon: Education,
    },
    {
      color: "#834CAD",
      datas: {
        header: "Reducing Inequities",
        element: "ICAF bridges the gap between different socioeconomic groups by bringing them together at its festivals to promote understanding and inclusivity.",
      },
      Icon: ReducingInequities,
    },
    {
      color: "#2057CC",
      datas: {
        header: "Promoting Good Health",
        element: "ICAF's Arts Olympiad reframes students' identity as “artist athletes” with creative minds and healthy bodies.",
      },
      Icon: Health,
    },
    {
      color: "#168C39",
      datas: {
        header: "Ensuring Gender Equality",
        element: "Any student, regardless of gender, can participate in ICAF programs to develop artistic talents and express creativity.",
      },
      Icon: Gender,
    },
    {
      color: "#D32413",
      datas: {
        header: "Building Peace",
        element: "ICAF builds a culture of peace and tolerance by fostering mutual empathy and its Peace through Art Programs disrupt the intergenerational transmission of trauma and hatred which perpetuates conflicts.",
      },
      Icon: BuildingPeace,
    }
  ];

  return (
    <section className="mb-24 relative z-0 m-auto max-w-screen-2xl px-8 md:px-12 lg:px-16 xl:px-20">
      <h1 className='font-extrabold font-montserrat text-[32px] lg:text-[40px] text-center text-black'>Building a Better World with Creativity</h1>
      <div className='mt-10 font-openSans text-black font-normal text-xl text-left'>
        <p>Our work is essential for "a more perfect union" and promotes the UN Sustainable Development Goals (SDGs).</p>
      
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-3 gap-8">
          {list.map((item, index) => (
          <AccordionCard
            key={index}
            color={item.color}
            datas={item.datas}
            Icon={item.Icon}
            isExpanded={expandedIndices.includes(index)}
            onClick={() => toggleAccordion(index)}
          />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Creativity;