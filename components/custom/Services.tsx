"use client";

import React, { useEffect } from "react";
import { Typography } from "../ui/typography";
import Portfolio from "./Portfolio";
import About from "./About";
import { motion, useScroll, useTransform } from "framer-motion";
import { fadeIn } from "../shared/Variants2";

const Services = () => {
  return (
    <motion.section className="bg-black mt-24" id="services">
      {/* <Portfolio /> */}
      <About />
    </motion.section>
  );
};

export default Services;
