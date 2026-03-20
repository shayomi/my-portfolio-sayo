"use client";

/* eslint-disable @next/next/no-img-element */
import { motion } from "framer-motion";
import React from "react";
import { Typography } from "../ui/typography";
import {
  FaBuilding,
  FaCompass,
  FaDatabase,
  FaDesktop,
  FaDiceD20,
  FaUser,
} from "react-icons/fa";
import { fadeIn } from "../shared/Variant";

const Brief = () => {
  return (
    <motion.section className="bg-black">
      <motion.div className=" mt-48 px-12">
        <motion.div className="flex flex-col md:flex-row  gap-12 justify-center items-start">
          <div className="w-full md:w-[30%]">
            <motion.img
              variants={fadeIn("right", "tween", 0.4, 0.7)}
              initial="hidden"
              whileInView="show"
              exit="show"
              src="/images/brief.png"
              alt="image here"
              className="max-w-[400px] grayscale w-full"
            />
          </div>

          <motion.div
            variants={fadeIn("left", "tween", 0.6, 0.7)}
            initial="hidden"
            whileInView="show"
            exit="show"
            className="flex flex-col w-full md:w-[65%] text-white"
          >
            <h1 className="background-text flex justify-end mb-6">03-06</h1>
            <Typography variant="h2">
              Over the last five years, I have helped teams ship modern software
              systems powered by strong product engineering and AI execution.
              <span className="text-gray-500">
                I design, build, test, and automate end-to-end platforms that
                scale from MVP to production.
              </span>{" "}
            </Typography>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
              <div className="flex flex-row items-center gap-2">
                <FaCompass className="fill-red-600 stroke-red-500" />
                <Typography variant="h6">AI workflow architecture</Typography>
              </div>
              <div className="flex flex-row items-center gap-2">
                <FaBuilding className="fill-red-600 stroke-red-500" />
                <Typography variant="h6">
                  Scalable full-stack platforms
                </Typography>
              </div>
              <div className="flex flex-row items-center gap-2">
                <FaUser className="fill-red-600 stroke-red-500" />
                <Typography variant="h6">Product-focused UX systems</Typography>
              </div>
              <div className="flex flex-row items-center gap-2">
                <FaDiceD20 className="fill-red-600 stroke-red-500" />
                <Typography variant="h6">
                  Agent and subagent orchestration
                </Typography>
              </div>
              <div className="flex flex-row items-center gap-2">
                <FaDesktop className="fill-red-600 stroke-red-500" />
                <Typography variant="h6">
                  Playwright browser and AI testing
                </Typography>
              </div>
              <div className="flex flex-row items-center gap-2">
                <FaDatabase className="fill-red-600 stroke-red-500" />
                <Typography variant="h6">Database and Security</Typography>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Brief;
