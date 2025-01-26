import React from "react";
import SlideShow from "./SlideShow";

function Slide() {
    return (
        <div className="relative z-40 flex flex-col space-y-6 md:space-y-12 items-center justify-center">
            <div>
                <h2 className="text-3xl lg:text-4xl font-montserrat font-extrabold text-center"><span className="italic">ChildArt </span>Magazine Art</h2>
            </div>
            <div className="hidden lg:grid grid-cols-4 items-center justify-center">
                <div className="col-span-4 lg:col-span-1 pl-12 space-y-3">
                    <div className="font-bold text-3xl">Latest Issues</div>
                    <div className="font-bold text-navy">Subscription is $30 per year</div>
                    <div className="font-openSans text-base lg:text-xl">Please pay online to start receiving emails each quarter with a link to the magazine.
                        To order, pay $10 and email us the title of the ChildArt issue you ordered, so we can email it to you. All 15 issues, you can order for $110—a saving of $40.00!</div>
                    <button className="bg-navy text-white px-12 py-2 font-openSans w-fit inline-flex items-center justify-center text-center border border-transparent text-base font-semibold rounded-full shadow-sm cursor-pointer">
                        Subcribe
                    </button>
                </div>
                <div className="col-span-4 lg:col-span-3 flex justify-end">
                    <SlideShow />
                </div>
            </div>
            {/* ipad mini and smartphone */}
            <div className="lg:hidden grid grid-cols-4 items-center justify-center">
                <div className="col-span-4 font-semibold text-2xl font-montserrat text-center">Latest Issues</div>
                <div className="col-span-4 flex justify-start pr-2 py-12">
                    <SlideShow />
                </div>
                <div className="col-span-4 px-6 space-y-3 justify-center items-center">
                    <div className="font-bold font-openSans text-xl text-navy text-center">Subscription is $30 per year</div>
                    <div className="font-openSans text-base lg:text-xl">Please pay online to start receiving emails each quarter with a link to the magazine.
                        To order, pay $10 and email us the title of the ChildArt issue you ordered, so we can email it to you. All 15 issues, you can order for $110—a saving of $40.00!</div>
                    <div className="flex justify-center">
                        <button className="bg-navy text-white px-12 py-2 font-openSans w-fit inline-flex items-center justify-center text-center border border-transparent text-base font-semibold rounded-full shadow-sm cursor-pointer">
                            Subcribe
                        </button>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Slide;
