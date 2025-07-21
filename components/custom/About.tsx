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
    <section className="bg-black mt-24 md:mt-48">
      <motion.div
        className="  mt-24 relative px-4 sm:px-12 text-center"
        id="about"
      >
        <motion.div className=" flex flex-col md:flex-row gap-12 justify-evenly mt-24 items-end ">
          <div className="w-full md:w-[50%]">
            <motion.img
              variants={fadeIn3("up", "tween", 0.4, 0.8)}
              initial="hidden"
              whileInView="show"
              exit="show"
              whileHover={{ scale: 1.05 }}
              transition={transition1}
              src="/images/sayomi-copy.png"
              alt="about image"
              className="w-full max-h-[600px] h-full object-contain grayscale "
            />
          </div>

          <motion.div
            variants={fadeIn3("up", "tween", 0.2, 0.8)}
            initial="hidden"
            whileInView="show"
            exit="show"
            className="w-full md:w-[50%] "
          >
            <h1 className="background-text relative z-10 mb-12 md:mb-48">
              ABOUT ME
            </h1>
            <Typography variant="p" className="text-white text-start ">
              Throughout my career, I&apos;ve collaborated with leading
              organizations like Techclout Africa, Run Technology, Nexapluxe,
              and Future Africa, honing my skills in JavaScript, HTML/CSS,
              React.js, Next.js, Tailwind CSS, TypeScript, and Node.js.
            </Typography>
            <Typography variant="p" className="text-white text-start ">
              These partnerships have allowed me to tackle diverse
              challenges—from building scalable front-end systems to integrating
              complex back-end services—strengthening both my technical and
              strategic capabilities.
            </Typography>
            <Typography variant="p" className="text-white text-start ">
              Working across industries and teams, I&apos;ve developed a deep
              understanding of modern web development practices, with a strong
              focus on clean code, performance optimization, and user-first
              design.
            </Typography>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
