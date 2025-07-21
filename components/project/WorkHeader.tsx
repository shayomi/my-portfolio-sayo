"use client";

import React from "react";
import Header from "../shared/Header";
import { Typography } from "../ui/typography";
import { motion } from "framer-motion";
import { fadeIn3 } from "../shared/Variant";

const WorkHeader = () => {
  return (
    <motion.section className="bg-black">
      <Header />

      <div className="pt-56 px-12">
        <div className="max-w-xl mx-auto">
          <motion.div
            variants={fadeIn3("up", "tween", 0.2, 0.4)}
            initial="hidden"
            whileInView="show"
            exit="show"
            className="flex flex-col items-start gap-2 justify-center mx-auto"
          >
            <h1 className="background-text text-white">MY</h1>
            <div className="flex flex-row gap-2 items-center">
              <img src="/images/line.png" alt="" className="w-[90px]" />
              <h1 className="background-text text-white">PROJECTS</h1>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default WorkHeader;
