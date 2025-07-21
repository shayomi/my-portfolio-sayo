"use client";

import React from "react";
import { Typography } from "../ui/typography";
import Link from "next/link";
import { projects } from "@/lib/projectData";
import { motion } from "framer-motion";
import { fadeIn } from "../shared/Variant";

const SelectedWorks = () => {
  const topProjects = projects.slice(0, 3); // show only first 3

  return (
    <motion.section className="bg-black mt-36">
      <div className="px-12">
        {/* Section Title */}
        <motion.div
          variants={fadeIn("down", "tween", 0.6, 0.4)}
          initial="hidden"
          whileInView="show"
          exit="show"
          className="max-w-xl mx-auto"
        >
          <div className="flex flex-col items-start gap-2 justify-center mx-auto">
            <h1 className="background-text text-white">SELECTED</h1>
            <div className="flex flex-row gap-2 items-center">
              <img src="/images/line.png" alt="" className="w-[80px]" />
              <h1 className="background-text text-white">WORKS</h1>
            </div>
          </div>
        </motion.div>

        {/* First two cards */}
        <div className="flex flex-col md:flex-row gap-6 items-end justify-between mt-36">
          {/* Left tall card */}
          <motion.div
            variants={fadeIn("right", "tween", 0.6, 0.7)}
            initial="hidden"
            whileInView="show"
            exit="show"
            className="bg-gray-800 w-full md:w-[40%] rounded-md border border-gray-600 p-6 "
          >
            <Link href={`/work/${topProjects[0].slug}`}>
              <div className="flex flex-col gap-4">
                <img
                  src={topProjects[0].image}
                  alt={topProjects[0].name}
                  className="h-[750px] w-full object-cover transition-transform duration-500 ease-in-out hover:scale-95"
                />
                <Typography variant="h4" className="text-white font-medium">
                  {topProjects[0].name}
                </Typography>
                <div className="flex flex-row gap-4 justify-between">
                  <Typography variant="smallText" className="text-white">
                    {topProjects[0].category}
                  </Typography>
                  <Typography
                    variant="smallText"
                    className="text-white/70 font-normal"
                  >
                    @{topProjects[0].year}
                  </Typography>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Right wide card */}
          <motion.div
            variants={fadeIn("left", "tween", 0.8, 0.7)}
            initial="hidden"
            whileInView="show"
            exit="show"
            className="bg-gray-800 w-full md:w-[60%] rounded-md border border-gray-600 p-6 "
          >
            <Link href={`/work/${topProjects[1].slug}`}>
              <div className="flex flex-col gap-4">
                <img
                  src={topProjects[1].image}
                  alt={topProjects[1].name}
                  className="h-[400px] w-full object-cover transition-transform duration-500 ease-in-out hover:scale-95"
                />
                <Typography variant="h4" className="text-white font-medium">
                  {topProjects[1].name}
                </Typography>
                <div className="flex flex-row gap-4 justify-between">
                  <Typography variant="smallText" className="text-white">
                    {topProjects[1].category}
                  </Typography>
                  <Typography
                    variant="smallText"
                    className="text-white/70 font-normal"
                  >
                    @{topProjects[1].year}
                  </Typography>
                </div>
              </div>
            </Link>
          </motion.div>
        </div>

        {/* Bottom full-width card */}
        <motion.div
          variants={fadeIn("up", "tween", 0.6, 0.7)}
          initial="hidden"
          whileInView="show"
          exit="show"
          className="bg-gray-800 rounded-md border w-full md:w-[80%] mx-auto border-gray-600 p-6 mt-16  block"
        >
          <Link href={`/work/${topProjects[2].slug}`}>
            <div className="flex flex-col gap-4">
              <img
                src={topProjects[2].image}
                alt={topProjects[2].name}
                className="h-[500px] w-full object-cover transition-transform duration-500 ease-in-out hover:scale-95"
              />
              <Typography variant="h4" className="text-white font-medium">
                {topProjects[2].name}
              </Typography>
              <div className="flex flex-row gap-4 justify-between">
                <Typography variant="smallText" className="text-white">
                  {topProjects[2].category}
                </Typography>
                <Typography
                  variant="smallText"
                  className="text-white/70 font-normal"
                >
                  @{topProjects[2].year}
                </Typography>
              </div>
            </div>
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default SelectedWorks;
