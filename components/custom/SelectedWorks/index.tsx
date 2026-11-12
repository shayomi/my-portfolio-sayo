/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Typography } from "../../ui/typography";
import { fadeIn } from "../../shared/Variant";
import { Button } from "../../ui/button";
import { projects } from "@/lib/projectData";
import ProjectCard from "./ProjectCard";

const TALL = "h-[400px] md:h-[750px]";
const SHORT = "h-[400px]";

const SelectedWorks = () => {
  // First 5 entries in projectData map to the card positions below. Order matters.
  const [featured, a, b, c, d] = projects.slice(0, 5);

  return (
    <motion.section className="bg-black mt-36">
      <div className="px-12">
        {/* Section Title */}
        <motion.div
          variants={fadeIn("down", "tween", 0.6, 0.4)}
          initial="hidden"
          whileInView="show"
          exit="show"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex flex-col items-start gap-2 ">
              <h1 className="background-text text-white">SELECTED</h1>
              <div className="flex flex-row gap-2 items-center">
                <img src="/images/line.png" alt="" className="w-[80px]" />
                <h1 className="background-text text-white">WORKS</h1>
              </div>
            </div>

            <div className="flex flex-col gap-3 items-start">
              <Typography variant="h4" className="font-medium text-white">
                More production case studies
              </Typography>
              <Link href="/work">
                <Button variant="default" size="lg">
                  View all
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Featured full-width card */}
        <div className="mt-36">
          <ProjectCard
            project={featured}
            direction="up"
            delay={0.6}
            className=""
            imageClassName="h-[400px] md:h-[600px]"
          />
        </div>

        <div className="flex flex-col md:flex-row gap-6 items-end justify-between mt-36">
          <ProjectCard project={a} direction="right" delay={0.6} className="md:w-[40%]" imageClassName={TALL} />
          <ProjectCard project={b} direction="left" delay={0.8} className="md:w-[60%]" imageClassName={SHORT} />
        </div>

        <div className="flex flex-col md:flex-row gap-6 items-start justify-between mt-36">
          <ProjectCard project={c} direction="left" delay={0.8} className="md:w-[60%]" imageClassName={SHORT} />
          <ProjectCard project={d} direction="right" delay={0.6} className="md:w-[40%]" imageClassName={TALL} />
        </div>
      </div>
    </motion.section>
  );
};

export default SelectedWorks;
