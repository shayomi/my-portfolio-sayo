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
              MY STORY
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
              What started as frontend development evolved into a full-stack,
              AI-native engineering practice focused on shipping real products.
              I build with Next.js, agent workflows, and production automation
              to help teams execute faster without sacrificing quality.{" "}
              <span className="text-gray-300">
                My work spans OpenCode and Claude Code agent setups, OpenClaw
                orchestration, Playwright browser testing, Sentry observability,
                and Supabase-backed data systems.
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
                  My mission
                </Typography>
                <Typography
                  variant="smallText"
                  className="text-white font-normal w-full sm:w-[70%] leading-5"
                >
                  To help founders and product teams ship better software by
                  combining strong engineering systems with AI agents,
                  automations, and clear execution workflows.
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
                  My vision
                </Typography>
                <Typography
                  variant="smallText"
                  className="text-white font-normal w-full sm:w-[70%] leading-5"
                >
                  To be a trusted engineering partner for AI-native product
                  development, where teams can scale through reusable workflows,
                  robust testing, and modern full-stack architecture.
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
                  My goal
                </Typography>
                <Typography
                  variant="smallText"
                  className="text-white font-normal w-full sm:w-[70%] leading-5"
                >
                  To continuously build and open source practical tools,
                  packages, and systems that make AI-assisted software delivery
                  faster, safer, and more accessible.
                </Typography>
              </motion.div>
              <div className="bg-white/10 backdrop-blur-md justify-start  border border-gray-700 px-4 py-1 flex flex-row gap-2 items-center">
                <Typography
                  variant="smallText"
                  className="font-normal text-white"
                >
                  Start a conversation
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
