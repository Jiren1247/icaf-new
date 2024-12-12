"use client";
import React, { useState } from 'react';
import { AccordionCard } from './AccordionCard';
import TheArtsOlympiad from '../../public/landingPage/TheArtsOlympiad.png';
import WorldChildrenFestival from '../../public/landingPage/WorldChildrenFestival.png';
import PeacethroughArt from '../../public/landingPage/PeacethroughArt.png';
import ChildrenPanelConferences from '../../public/landingPage/ChildrenPanelConferences.png';
import ChildArtMagazine from '../../public/landingPage/ChildArtMagazine.jpg';
import HealingArts from '../../public/landingPage/HealingArts.jpg';
import WorldChildrensAward from '../../public/landingPage/WorldChildrensAward.jpg';
import ResearchAndNewLearning from '../../public/landingPage/ResearchAndNewLearning.jpg';

const Activities = () => {
  const [expandedIndices, setExpandedIndices] = useState<number[]>([]);

  const list = [
    {
      backgroud: TheArtsOlympiad,
      header: "The Arts Olympiad*",
      element: "The largest US and global school art program",
    },
    {
      backgroud: WorldChildrenFestival,
      header: "World Children's Festival",
      element: "A celebration that infuses creativity with empathy",
    },
    {
      backgroud: PeacethroughArt,
      header: "Peace through Art",
      element: "Revive trust in humanity of children in conflict zones",
    },
    {
      backgroud: ChildrenPanelConferences,
      header: "Youth Panels at Conferences",
      element: "Giving voice to children and galvanizing adults",
    },
    {
      backgroud: ChildArtMagazine,
      header: "Quarterly Magazine",
      element: "Arts learning and global competency distributed quarterly",
    },
    {
      backgroud: HealingArts,
      header: "Healing Arts",
      element: "Restore faith in nature of child victims of natural disasters",
    },
    {
      backgroud: WorldChildrensAward,
      header: "World Children's Award",
      element: "For leaders most loved by children",
    },
    {
      backgroud: ResearchAndNewLearning,
      header: "Research and new learning",
      element: "Research on children and their art & future",
    },

  ];

  const toggleAccordion = (index: number) => {
    setExpandedIndices(prev => {
      if (prev.includes(index)) {
        return prev.filter(i => i !== index);
      } else {
        return [...prev, index];
      }
    });
  };

  return (
    <section className="mt-32 m-auto max-w-screen-2xl px-8 md:px-12 lg:px-16 xl:px-20">
      <h1 className="mb-10 font-extrabold font-montserrat text-2xl lg:text-4xl text-center text-black">Plan of Action</h1>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {list.map((item, index) => (
          <AccordionCard
            key={index}
            datas={item}
            isExpanded={expandedIndices.includes(index)}
            onClick={() => toggleAccordion(index)}
          />
        ))}
      </div>
      <p className="mt-6 lg:mt-8 text-left text-base font-normal font-openSans">
        *The mark “Arts Olympiad” is used under license from the U.S. Olympic and Paralympic Committee.
      </p>
    </section>
  );
};

export default Activities;