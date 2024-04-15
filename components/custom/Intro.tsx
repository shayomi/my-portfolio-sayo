"use client";

import React, { useEffect, useState } from "react";
import { motion, MotionConfig } from "framer-motion";
import { Typography } from "../ui/typography";
import { fadeIn, fadeIn2 } from "../shared/Variant";
import { transition1 } from "../shared/Transition";

const Intro = () => {
  const [animateExit, setAnimateExit] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAnimateExit(true);
    }, 2000); // Adjust the delay as needed (in milliseconds)

    return () => clearTimeout(timeout);
  }, []);
  return (
    <motion.section
      variants={fadeIn2("up", "spring", 2, 2)}
      initial="show"
      animate={animateExit ? "exit" : "show"}
      className="bg-black h-[100vh] absolutely top-0 z-20  "
    >
      <div className="flex items-center justify-center h-[100vh]">
        <motion.div className="flex flex-col text-center items-center justify-center text-white">
          <motion.h2
            className="text-[36px]"
            variants={fadeIn("up", "spring", 0.6, 0.8)}
            initial="hidden"
            whileInView={"show"}
            exit={"show"}
            whileHover={{ scale: 1.1 }}
            transition={transition1}
          >
            Hi there
          </motion.h2>
          <motion.h2
            className="text-[36px]"
            variants={fadeIn("up", "spring", 0.8, 0.8)}
            initial="hidden"
            whileInView={"show"}
            exit={"show"}
            whileHover={{ scale: 1.1 }}
            transition={transition1}
          >
            I&apos;m Sayo Adegoroye
          </motion.h2>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Intro;
