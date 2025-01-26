import React from "react";
import headerPage from "../../public/teamPage/header.png"
import Image from "next/image";
import shadow from "../../public/teamPage/shadow.png"
import blueLine from "../../public/teamPage/blueBorder.png"
import Button from "../Button";
import { HeartIcon } from "../../public/svgs/HeartIcon";

function Header() {
  return (
    <div className="relative mb-48 overflow-hidden">
      <div className="header z-20 relative w-full">
        <Image
          src={shadow}
          alt="shadow"
          className="z-10 absolute xxsm:top-24 h-fit min-h-[600px] xsm:min-h-[400px] md:top-0 w-full xsm:scale-125"
        ></Image>
        <Image
          src={headerPage}
          alt="header logo"
          className="z-0 absolute xxsm:top-24 min-h-[600px] xsm:min-h-[400px] md:top-0 w-full md:scale-110"
        />
        <div className="z-20 relative xxsm:pt-20 md:pt-24 lg:pt-36 xxsm:pl-10 md:pl-16 lg:pl-24 space-y-6">
          <h1 
          className="text-white font-montserrat xxsm:text-3xl lg:text-5xl lg:leading-relaxted xl:text-6xl xl:leading-extra-loose font-extrabold w-4/5 pt-12"
          >Meet the People Bringing Creativity to Life for Children Everywhere</h1>
          <p className="text-white font-openSans xxsm:text-sm xxsm:pr-10 lg:w-2/3 xl:w-1/2 md:pr-12 lg:pr-24 md:font-normal text-base leading-6">
            Our team is dedicated to empowering children to dream, create, and grow through the power of art. Together, we’re making a lasting impact, one creative moment at a time.
          </p>
          <div className="mt-12 flex">
            <Button bgColor="bg-yellow" textColor="text-black" link="./" icon={<HeartIcon />} children="Donate to our campaign" />
          </div>
        </div>
      </div>
      <div className="relative flex justify-center items-center">
        <Image
          src={blueLine}
          alt="blue line"
          className="z-20 relative xxsm:top-8 md:top-8 lg:top-8 xl:top-12 2xl:top-24 md:scale-125 2xl:scale-150"
        >
        </Image>
      </div>

    </div>

  )
}

export default Header;
