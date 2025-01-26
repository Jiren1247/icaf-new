import React from "react";
import Quote from "../../public/MagazinePage/quote.png"
import TeacherLogo from "../../public/MagazinePage/teacher.png"
import Image from "next/image";
import YellowVector from "../../public/MagazinePage/yellowVector.png"
import RedVector from "../../public/MagazinePage/redVector.png"

function Testimonial() {
    return (
        <div className="py-24">
            <h1 className="text-3xl md:text-4xl font-extrabold font-montserrat text-center pt-12">
                Testimonial
            </h1>
            <div className="relative px-6 md:px-12 lg:px-24 xl:px-36">
                <Image src={RedVector} alt="Red Vector" className="absolute z-0 scale-110 -top-4 left-0 xl:left-24"></Image>
                <div className="z-10 relative flex flex-col items-center mt-12 py-12 bg-white px-6 md:px-24 space-y-6 rounded-3xl shadow-2xl">
                    <div className="flex flex-row">
                        <Image src={Quote} alt="quote block" className="absolute top-0 -left-6 md:-left-2 scale-50 2xl:left-12"></Image>
                        <div className="flex flex-col items-center space-y-6">

                            <Image src={TeacherLogo} alt="Teacher Logo"></Image>
                            <h2 className="text-base font-openSans font-bold md:px-12">Teacher Librarian: The Journal for School Library Professionals.</h2>
                        </div>
                    </div>

                    <div className="flex flex-row">
                        <p className="text-base font-openSans md:px-6 lg:px-16">The International Child Art Foundation publishes ChildArt … that fosters learning, self-discovery, and global education for children through all types of art and design projects and activities. Vibrant color illustrations and photographs show art created by children and illustrate step-by-step craft projects from around the world that can be done in the classroom. Teacher-librarians will find ChildArt to be an excellent source for creative multi-cultural projects to recommend to teachers and students.</p>
                        <Image src={Quote} style={{ transform: 'scaleX(-0.5) scaleY(0.5)' }} alt="quote block" className="absolute scale-75 -right-24 -bottom-16 md:right-0 md:bottom-0"></Image>
                    </div>
                </div>
                <Image src={YellowVector} alt="Yellow Vector" className="absolute z-0 -bottom-24 right-0 xl:right-24"></Image>
            </div>
        </div>


    )
}

export default Testimonial;
