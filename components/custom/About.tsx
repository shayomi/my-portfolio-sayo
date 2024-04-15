"use client";

import React from "react";
import { Typography } from "../ui/typography";
import about from "../../public/images/about-img.png";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn3 } from "../shared/Variant";
import { transition1 } from "../shared/Transition";

const About = () => {
  return (
    <>
      <motion.div
        className="mt-24 relative px-4 sm:px-12 text-start"
        id="about"
      >
        <div className="absolute inset-0 opacity-25 z-0"></div>{" "}
        {/* Semi-transparent background */}
        <h1 className="background-text relative z-10">ABOUT ME</h1>
        <Typography
          variant="h3"
          className="text-background mt-12 text-start relative z-10"
        >
          A few things about me
        </Typography>
        <motion.div className=" mt-12 basis-full sm:basis-6/12 py-12 space-y-6 relative ">
          <motion.h1
            variants={fadeIn3("up", "tween", 0.4, 0.8)}
            initial="hidden"
            whileInView="show"
            exit="show"
            className="text-background text-[38px] sm:text-[56px] md:text-[68px] "
          >
            ABOUT ME
          </motion.h1>
          <motion.div className=" flex flex-col space-y-6 relative z-30 opacity-55">
            <motion.h1
              variants={fadeIn3("up", "tween", 0.6, 0.8)}
              initial="hidden"
              whileInView="show"
              exit="show"
              className="text-background text-[38px] sm:text-[56px] md:text-[68px]  "
            >
              ABOUT ME
            </motion.h1>
            <motion.h1
              variants={fadeIn3("up", "tween", 0.8, 0.8)}
              initial="hidden"
              whileInView="show"
              exit="show"
              className="text-background text-[38px] sm:text-[56px] md:text-[68px] opacity-35 "
            >
              ABOUT ME
            </motion.h1>
            <motion.h1
              variants={fadeIn3("up", "tween", 1.0, 0.8)}
              initial="hidden"
              whileInView="show"
              exit="show"
              className="text-background text-[38px] sm:text-[56px] md:text-[68px] opacity-15 "
            >
              ABOUT ME
            </motion.h1>
            <motion.h1
              variants={fadeIn3("up", "tween", 1.2, 0.8)}
              initial="hidden"
              whileInView="show"
              exit="show"
              className="text-background text-[38px] sm:text-[56px] md:text-[68px] opacity-5 "
            >
              ABOUT ME
            </motion.h1>
          </motion.div>
        </motion.div>
        <motion.div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 mt-12">
          <motion.img
            variants={fadeIn3("up", "tween", 1.4, 0.8)}
            initial="hidden"
            whileInView="show"
            exit="show"
            whileHover={{ scale: 1.05 }}
            transition={transition1}
            src="/images/about-img.png"
            alt="about image"
            className="max-w-[1000px] w-[400px] sm:w-[600px]"
          />
        </motion.div>
      </motion.div>
      <motion.div
        variants={fadeIn3("up", "tween", 0.2, 0.8)}
        initial="hidden"
        whileInView="show"
        exit="show"
        className=" flex justify-end mt-[-12px] w-full sm:w-[90%] px-12 mx-auto pb-24"
      >
        <Typography variant="p" className="text-background ">
          Throughout my career, I&apos;ve collaborated with leading
          organizations like Techclout Africa, Run Technology, Nexapluxe, and
          Future Africa, honing my skills in JavaScript, HTML/CSS, React.js,
          Next.js, Tailwind CSS, TypeScript, and Node.js.
        </Typography>
      </motion.div>
    </>
  );
};

export default About;
