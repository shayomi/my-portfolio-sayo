"use client";

import React, { useState } from "react";
import { Typography } from "../ui/typography";
import { motion, AnimatePresence } from "framer-motion";
import { fadeIn } from "../shared/Variant";

const services = [
  {
    id: "[01]",
    title: "Web Design & Development",
    details:
      "/ Responsive design / High-performing websites / Custom designs / Automations",
    image: "/images/webdev.png",
  },
  {
    id: "[02]",
    title: "AI Agents & Automations",
    details:
      "/ Workflow automation / AI integration / Personalized agent design / Business optimization",
    image: "/images/aiagent.webp",
  },
  {
    id: "[03]",
    title: "UI/UX Design",
    details:
      "/ User-centric approach / Seamless navigation / Intuitive interfaces",
    image: "/images/uiux.jpg",
  },
  {
    id: "[04]",
    title: "Tech Strategy",
    details:
      "/ Scalable architecture / Technology stack planning / Strategic consultation",
    image: "/images/strategy.jpg",
  },
  {
    id: "[05]",
    title: "No-Code Specialist",
    details:
      "/ Fast MVP development / Webflow, Framer, Bubble expertise / Cost-effective delivery",
    image: "/images/nocode.jpg",
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
              className="relative flex flex-row gap-6 justify-between items-start border-b-[1px] border-gray-700 pb-12"
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
                className="text-gray-600 font-normal max-w-lg leading-6s text-right"
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
