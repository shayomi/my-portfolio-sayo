"use client";

import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";

import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { fadeIn, fadeIn3 } from "../shared/Variant";
import { FaArrowRight } from "react-icons/fa";
import { trustedBy } from "@/lib/data";
import { transition1 } from "../shared/Transition";
import Header from "../shared/Header";

const VideoIntro = () => {
  return (
    <section className="relative w-full h-[750px] overflow-hidden mx-auto">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src="/images/hero-video.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      <div className="absolute inset-0 bg-black/70 z-10" />
      <Header />

      <motion.div
        variants={fadeIn("up", "tween", 0.2, 1)}
        initial="hidden"
        whileInView="show"
        className="relative z-20 flex flex-col md:flex-row gap-12 px-8 mt-48 md:mt-0 items-end justify-center h-full text-center text-white"
      >
        <div className="mb-6">
          <img className="w-full" src="/images/sayo-logo.png" alt="logo here" />
        </div>

        <div className="flex flex-col gap-4 items-start">
          <Typography
            variant="h2"
            className="font-bold text-white max-w-[700px] leading-[64px] text-start"
          >
            Transforming ideas into visual masterpieces
          </Typography>

          <Typography
            variant="h4"
            className="font-medium text-white mt-4 max-w-[700px] text-start"
          >
            Web development / AI agents / Automations / UI-UX Designs / Tech
            strategist / Sustainability Specialist
          </Typography>

          <div className="bg-white/10 backdrop-blur-md justify-start  border border-gray-700 px-4 py-1 ">
            <Link href="#contact" className="flex flex-row gap-2 items-center">
              <Typography
                variant="smallText"
                className="font-normal text-white"
              >
                Get started
              </Typography>
              <div className="bg-red-500 p-3">
                <FaArrowRight />{" "}
              </div>
            </Link>
          </div>
          <div>
            <div className="flex flex-col gap-3 items-start mt-24 mb-6">
              <Typography variant="h3" className="font-medium text-white">
                Trusted By:
              </Typography>
              <div className="flex flex-row gap-12 items-center mt-2">
                {trustedBy.map((trust, index: number) => (
                  <motion.div
                    variants={fadeIn3("up", "tween", 0.2, 0.4)}
                    whileHover={{ scale: 1.05 }}
                    transition={transition1}
                    key={index}
                  >
                    <img className="w-[120px]" src={trust.avatar} />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default VideoIntro;
