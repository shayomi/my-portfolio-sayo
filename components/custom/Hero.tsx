import React from "react";
import hero from "../../public/Images/hero-img.svg";
import hero2 from "../../public/images/sayomi.png";
import hero3 from "../../public/images/sayo-sm.png";
import Image from "next/image";
import { Typography } from "../ui/typography";
import { heroData } from "@/lib/data";
import { Button } from "../ui/button";
import Link from "next/link";

const Hero = () => {
  return (
    <section className=" hero-banner-bg  min-h-[500px] h-[70vh] sm:min-h-[600px] xl:min-h-[700px] sm:h-[70vh] w-full ">
      <div className="container flex items-center flex-col justify-center mt-48 ">
        <Image
          alt="hero-image"
          src={hero2}
          className="hidden sm:block w-[1000px]"
        />
        <Image
          alt="hero-image"
          src={hero3}
          width={2000}
          className=" sm:hidden"
        />
      </div>
      <div className="flex flex-row gap-x-3 items-baseline mt-6 justify-center ">
        {heroData.map((hero, index) => {
          return (
            <Typography
              key={index}
              variant="p"
              className="border-[1px] rounded-2xl border-gray-600 px-2 py-1 text-[12px] sm:text-[16px]  text-center"
            >
              {hero.title}
            </Typography>
          );
        })}
      </div>
      <Link href="#contact">
        <Button variant="default" className="mt-12 flex mx-auto mb-12">
          Let&apos;s talk
        </Button>
      </Link>
    </section>
  );
};

export default Hero;
