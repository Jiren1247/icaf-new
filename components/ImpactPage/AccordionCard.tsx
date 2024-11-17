import React from "react";
import { Down } from "../../public/impactPage/icons/Down";
import { Up } from "../../public/impactPage/icons/Up";

type AccordionCardProps = {
  color: string; // Single color for border and icon
  datas: {
    header: string;
    element: string;
  };
  Icon: React.FC<React.SVGProps<SVGSVGElement>>; // Main icon for the card
  isExpanded: boolean;
  onClick: () => void;
};

export const AccordionCard: React.FC<AccordionCardProps> = ({
  color,
  datas,
  Icon,
  isExpanded,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className={`relative rounded-2xl cursor-pointer transition-all duration-700 ease-in-out w-full border-2 p-5 flex flex-col items-center`}
      style={{ borderColor: color }}
    >
      <div className="mt-4 flex flex-col items-center">
        <Icon className="w-12 h-12" style={{ color }} />

        <h2 className="mt-4 font-openSans font-semibold text-base md:text-xl text-center text-black">
          {datas.header}
        </h2>

        <p
          className={`transition-all ease-in-out duration-700 text-left mt-4 text-sm font-montserrat font-normal ${
            isExpanded ? "opacity-100 max-h-full" : "opacity-0 max-h-0 overflow-hidden"
          }`}
        >
          {datas.element}
        </p>
      </div>

      <div className="mt-4">
        {isExpanded ? (
          <Up className="w-6 h-6" />
        ) : (
          <Down className="w-6 h-6" />
        )}
      </div>
    </div>
  );
};