"use client";

import React, { useState, useEffect } from "react";
import hero from "../../public/Images/hero-img.svg";
import hero2 from "../../public/images/sayomi.png";
import hero3 from "../../public/images/sayo-sm.png";
import Image from "next/image";
import { Typography } from "../ui/typography";
import { heroData } from "@/lib/data";
import { Button } from "../ui/button";
import Link from "next/link";
import Intro from "./Intro";
import { motion, useScroll, useTransform } from "framer-motion";
import { fadeIn3 } from "../shared/Variant";

const Hero = () => {
  const [animateExit, setAnimateExit] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAnimateExit(true);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  const { scrollY } = useScroll();
  const yImage = useTransform(scrollY, [0, 200], [1, 0.5]);
  const opacityImage = useTransform(
    scrollY,
    [0, 100, 150, 200],
    [1, 0.5, 0.3, 0]
  );

  return (
    <>
      <Intro />
      <motion.section className=" hero-banner-bg  min-h-[500px] h-[50vh] sm:min-h-[600px] xl:min-h-[700px] sm:h-[70vh] w-full absolute top-0 z-10 ">
        <motion.div style={{ y: yImage, opacity: opacityImage }}>
          <motion.div className="container flex items-center flex-col justify-center mt-56 ">
            <motion.img
              variants={fadeIn3("up", "fade", 4.2, 1.2)}
              initial="hidden"
              whileInView={"show"}
              animate={animateExit ? "show" : "exit"}
              alt="hero-image"
              src="/images/sayomi.png"
              className="hidden sm:block w-[1000px]"
            />
            <motion.img
              variants={fadeIn3("up", "fade", 4.2, 1.2)}
              initial="hidden"
              whileInView={"show"}
              animate={animateExit ? "show" : "exit"}
              alt="hero-image"
              src="/images/sayo-sm.png"
              width={2000}
              className=" sm:hidden"
            />
          </motion.div>
          <motion.div className="flex flex-row gap-x-3 items-baseline mt-6 justify-center ">
            {heroData.map((hero, index) => {
              return (
                <motion.h3
                  variants={fadeIn3("up", "fade", 4.4, 1.2)}
                  initial="hidden"
                  whileInView={"show"}
                  animate={animateExit ? "show" : "exit"}
                  key={index}
                  className="border-[1px] rounded-2xl border-gray-600 px-2 py-1 text-[12px] sm:text-[16px] text-gray-900  text-center"
                >
                  {hero.title}
                </motion.h3>
              );
            })}
          </motion.div>
          <Link href="#contact">
            <Button variant="default" className="mt-12 flex mx-auto ">
              Let&apos;s talk
            </Button>
          </Link>
        </motion.div>
      </motion.section>
    </>
  );
};

export default Hero;
