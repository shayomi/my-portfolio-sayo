"use client";

import React, { useState } from "react";
import { Typography } from "../ui/typography";
import { motion, AnimatePresence } from "framer-motion";
import { fadeIn } from "../shared/Variant";

const services = [
  {
    id: "[01]",
    title: "Full-Stack Product Engineering",
    details:
      "/ Next.js architecture / TypeScript systems / API integration / Performance-first delivery",
    image: "/images/webdev.png",
  },
  {
    id: "[02]",
    title: "AI Agents and Subagents",
    details:
      "/ OpenCode workflows / Claude Code operations / OpenClaw orchestration / AI automation loops",
    image: "/images/aiagent.webp",
  },
  {
    id: "[03]",
    title: "AI Workflow and Automation Design",
    details:
      "/ Task decomposition / Agent handoff patterns / Process automation / Team-ready execution playbooks",
    image: "/images/uiux.jpg",
  },
  {
    id: "[04]",
    title: "Quality, Testing, and Reliability",
    details:
      "/ Playwright browser testing / Regression automation / Sentry monitoring / CI/CD release confidence",
    image: "/images/strategy.jpg",
  },
  {
    id: "[05]",
    title: "Data, Auth, and Backend Systems",
    details:
      "/ Supabase & PostgreSQL / Auth & role-based access / Realtime data / API and CMS integration",
    image: "/images/nocode.jpg",
  },
  {
    id: "[06]",
    title: "End-to-End Platform and Ecosystem Builds",
    details:
      "/ Founder-to-scale platforms / Marketplaces & investor portals / Fintech & compliance flows / Reusable open-source tooling",
    image: "/images/webdev.png",
  },
];

const Service = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <motion.section className="bg-black mt-36 relative">
      <motion.div className=" mt-24 px-12 relative">
        <h1 className="background-text mb-12 text-white">SERVICES</h1>
        <div className="flex flex-col gap-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={fadeIn("right", "spring", 0.2 + index * 0.1, 0.4)}
              initial="hidden"
              whileInView={"show"}
              exit={"show"}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="relative flex flex-col sm:flex-row gap-6 justify-between items-start border-b-[1px] border-gray-700 pb-12"
            >
              <div className="flex flex-row gap-6 items-start">
                <Typography
                  variant="smallText"
                  className="text-red-600 font-normal"
                >
                  {service.id}
                </Typography>
                <Typography variant="h2" className="text-white font-medium">
                  {service.title}
                </Typography>
              </div>

              <Typography
                variant="smallText"
                className="text-gray-600 font-normal max-w-lg leading-6s text-right leading-5"
              >
                {service.details}
              </Typography>

              <AnimatePresence>
                {hoveredIndex === index && (
                  <motion.img
                    key="hover-img"
                    src={service.image}
                    alt={service.title}
                    style={{ transformStyle: "preserve-3d", perspective: 1000 }}
                    initial={{ opacity: 0, x: 50, rotateY: 10 }}
                    animate={{ opacity: 1, x: 0, rotateY: 30 }}
                    exit={{ opacity: 0, x: 50, rotateY: 10 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="absolute bottom-[-10px] h-[300px] right-[30%]  w-[300px] border-[20px] object-cover border-gray-800 rounded-lg shadow-lg z-10"
                  />
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Service;
