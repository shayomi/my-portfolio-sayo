"use client";

import React from "react";
import { Typography } from "../ui/typography";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeIn } from "../shared/Motion";

const AboutMe = () => {
  return (
    <motion.section className="mt-36 mb-24">
      <div className="px-12">
        <motion.img
          variants={fadeIn("up", "tween", 0.6, 0.8)}
          initial="hidden"
          whileInView="show"
          exit="show"
          src="/images/abtimg.png"
          alt=""
          className=" h-full max-w-[1800px] w-full object-contain"
        />
        <div className="flex flex-col md:flex-row justify-between gap-6 mt-48">
          <motion.div
            variants={fadeIn("right", "tween", 0.3, 0.7)}
            initial="hidden"
            whileInView="show"
            exit="show"
            className="flex flex-col gap-4 w-full md:w-[50%]"
          >
            <Typography variant="h2" className="text-white/60 mt-8">
              OUR STORY
            </Typography>
            <div className="flex flex-col gap-1 mt-24">
              <h1 className="background-text"> 25+</h1>
              <Typography variant="smallText" className="text-white">
                Successfully projects delivered
              </Typography>
            </div>
            <div className="flex flex-col gap-1">
              <h1 className="background-text"> 60+</h1>
              <Typography variant="smallText" className="text-white">
                Satisfied Clients Worldwide
              </Typography>
            </div>
          </motion.div>

          <div className="flex flex-col gap-4  w-full md:w-[50%]">
            <Typography variant="h6" className="text-white font-normal">
              What began as a simple curiosity has evolved into a powerful blend
              of web development, AI innovation, and automation strategy. Since
              day one, my mission has been clear—building intelligent,
              efficient, and user-focused digital solutions that drive real
              impact.{" "}
              <span className="text-gray-300">
                With a deep passion for clean code, smart systems, and strategic
                thinking, I help individuals and businesses unlock their full
                potential in the ever-evolving digital landscape.
              </span>
            </Typography>
            <div className="flex flex-col gap-8 items-start">
              <motion.div
                variants={fadeIn("left", "tween", 0.4, 0.7)}
                initial="hidden"
                whileInView="show"
                exit="show"
                className="py-8 border-b  border-gray-600 flex flex-col sm:flex-row justify-between gap-6 items-start"
              >
                <Typography
                  variant="h3"
                  className="text-white font-normal w-full sm:w-[30%]"
                >
                  Our mission
                </Typography>
                <Typography
                  variant="smallText"
                  className="text-white font-normal w-full sm:w-[70%] leading-5"
                >
                  To empower businesses and individuals by crafting intelligent,
                  automated, and scalable digital solutions that merge modern
                  web development with AI-driven strategy—delivering meaningful
                  impact and long-term growth.
                </Typography>
              </motion.div>
              <motion.div
                variants={fadeIn("left", "tween", 0.6, 0.7)}
                initial="hidden"
                whileInView="show"
                exit="show"
                className="py-8 border-b  border-gray-600 flex flex-col sm:flex-row justify-between gap-6 items-start"
              >
                <Typography
                  variant="h3"
                  className="text-white font-normal w-full sm:w-[30%]"
                >
                  Our vision
                </Typography>
                <Typography
                  variant="smallText"
                  className="text-white font-normal w-full sm:w-[70%] leading-5"
                >
                  To become a trusted leader in the digital transformation space
                  by redefining how technology, automation, and strategy
                  converge—creating smarter, faster, and more human-centered
                  experiences across the web.
                </Typography>
              </motion.div>
              <motion.div
                variants={fadeIn("left", "tween", 0.8, 0.7)}
                initial="hidden"
                whileInView="show"
                exit="show"
                className="py-8 border-b  border-gray-600 flex flex-col sm:flex-row justify-between gap-6 items-start"
              >
                <Typography
                  variant="h3"
                  className="text-white font-normal w-full sm:w-[30%]"
                >
                  Our goal
                </Typography>
                <Typography
                  variant="smallText"
                  className="text-white font-normal w-full sm:w-[70%] leading-5"
                >
                  To create intelligent, automated, and scalable digital
                  solutions that drive meaningful impact through the seamless
                  integration of web development, AI, and strategic thinking.
                </Typography>
              </motion.div>
              <div className="bg-white/10 backdrop-blur-md justify-start  border border-gray-700 px-4 py-1 flex flex-row gap-2 items-center">
                <Typography
                  variant="smallText"
                  className="font-normal text-white"
                >
                  Get started
                </Typography>
                <div className="bg-red-500 p-3">
                  <FaArrowRight />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutMe;
