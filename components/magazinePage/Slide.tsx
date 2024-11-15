import React from "react";
import SlideShow from "./SlideShow";

function Slide() {
  return (
    <div className="relative z-40 py-12 flex flex-col space-y-3 items-center justify-center">
        <div>
            <h2 className="text-3xl font-bold text-center"><span className="italic">ChildArt </span>Magazine Art</h2>
        </div>
        <div className="grid grid-cols-4 items-center justify-center">
            <div>
                <div className="col-span-1 pl-12 space-y-3">
                    <div className="font-bold text-3xl">Latest Issues</div>
                    <div className="font-bold text-navy">Subscription is $30 per year</div>
                    <div className="">Please pay online to start receiving emails each quarter with a link to the magazine.
                    To order, pay $10 and email us the title of the ChildArt issue you ordered, so we can email it to you. All 15 issues, you can order for $110—a saving of $40.00!</div>
                    <button className="bg-navy text-yellow px-12 py-2 font-openSans w-fit inline-flex items-center justify-center text-center border border-transparent text-base font-semibold rounded-full shadow-sm cursor-pointer">
                        Subcribe
                    </button>
                </div>
            </div>
            <div className="col-span-3 flex justify-end">
                <SlideShow />
            </div>
        </div>
    </div>
  )
}

export default Slide;
