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
              I&apos;m a full-stack engineer and AI automation specialist with
              5+ years building and scaling AI-native web applications. I&apos;ve
              shipped fintech, venture, and founder-facing platforms across
              product teams and founder-led companies — including SaveTown and a
              VC portal at Future Africa where AI automations cut investor
              onboarding time by 40%.
            </Typography>
            <Typography variant="p" className="text-white text-start ">
              Today my stack is AI-native: Next.js and TypeScript on the front,
              Supabase-backed data, auth, and realtime on the back, and agent
              workflows with OpenCode, Claude Code, and OpenClaw orchestration
              driving the automation in between.
            </Typography>
            <Typography variant="p" className="text-white text-start ">
              I ship with confidence — Playwright browser testing, Sentry
              production monitoring, and CI/CD pipelines — and build reusable
              packages and internal tooling that help founders and product teams
              move from early stage to full establishment, faster.
            </Typography>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
