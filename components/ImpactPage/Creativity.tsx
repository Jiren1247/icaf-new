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
        element: "We encourage creativity and innovation among children, which can lead to future opportunities in the creative industries. By nurturing their talents, the foundation helps children develop skills that can contribute to economic growth and reduce poverty.",
      },
      Icon: ReducingPoverty,
    },
    {
      color: "#FFB505",
      datas: {
        header: "Providing Quality Education",
        element: "We offer art programs that complement traditional education, promoting creativity, critical thinking, and emotional intelligence. These programs provide quality educational experiences that empower children to think beyond conventional learning.",
      },
      Icon: Education,
    },
    {
      color: "#834CAD",
      datas: {
        header: "Reducing Inequities",
        element: "Our global reach ensures that children from diverse backgrounds, including those in underserved communities, have access to art education and creative opportunities. This helps bridge the gap between different socioeconomic groups and promotes inclusivity.",
      },
      Icon: ReducingInequities,
    },
    {
      color: "#2057CC",
      datas: {
        header: "Promoting Good Health",
        element: "ICAF recognizes the therapeutic benefits of art in promoting mental and emotional well-being. By engaging children in creative activities, the foundation contributes to their overall health, helping them express emotions, reduce stress, and build resilience.",
      },
      Icon: Health,
    },
    {
      color: "#168C39",
      datas: {
        header: "Ensuring Gender Equality",
        element: "We promote equal participation of boys and girls in its programs, ensuring that all children, regardless of gender, have equal opportunities to develop their artistic talents and express their creativity.",
      },
      Icon: Gender,
    },
    {
      color: "#D32413",
      datas: {
        header: "Building Peace",
        element: "Through global art exhibitions and collaborations, we foster cross-cultural understanding and dialogue among children. By encouraging them to create art that reflects their experiences and aspirations, the foundation helps build a culture of peace and tolerance from a young age.",
      },
      Icon: BuildingPeace,
    }
  ];

  return (
    <section className="mb-24 relative z-0 m-auto max-w-screen-2xl px-8 md:px-12 lg:px-16 xl:px-20">
      <h1 className='font-extrabold font-montserrat text-[32px] lg:text-[40px] text-center text-black'>Building a Better World with Creativity</h1>
      <div className='mt-10 font-openSans text-black font-normal text-xl text-left'>
        <p>At ICAF, we're working to make the world more peaceful, prosperous, and sustainable. We believe that helping kids grow creatively and empathetically can help achieve six important goals set by the United Nations. These goals include:</p>
      
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