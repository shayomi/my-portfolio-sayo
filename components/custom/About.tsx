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
              I have worked across product teams and founder-led companies,
              building modern web platforms with Next.js, TypeScript, Tailwind,
              and scalable backend integrations.
            </Typography>
            <Typography variant="p" className="text-white text-start ">
              Today, my stack is AI-native: OpenCode and Claude Code workflows,
              agent and subagent orchestration with OpenClaw, automated browser
              quality checks with Playwright, and production monitoring with
              Sentry.
            </Typography>
            <Typography variant="p" className="text-white text-start ">
              I also build on Supabase for data, auth, and realtime features,
              while creating reusable open-source packages and internal tooling
              that help teams ship faster with confidence.
            </Typography>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
