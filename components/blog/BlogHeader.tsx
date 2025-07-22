"use client";
import React from "react";
import Header from "../shared/Header";
import { Typography } from "../ui/typography";
import { motion } from "framer-motion";
import { fadeIn } from "../shared/Variant";

const BlogHeader = () => {
  return (
    <motion.section className="bg-black">
      <Header />

      <div className="pt-56 px-12">
        <div className="flex flex-col md:flex-row justify-between gap-6 max-w-[1800px]">
          <div className="max-w-xl ">
            <motion.div
              variants={fadeIn("right", "tween", 0.2, 0.4)}
              initial="hidden"
              whileInView="show"
              exit="show"
              className="flex flex-col items-start gap-2 justify-center mx-auto"
            >
              <h1 className="background-text text-white">Blogs</h1>
              <div className="flex flex-row gap-2 items-center">
                <img src="/images/line.png" alt="" className="w-[90px]" />
                <h1 className="background-text text-white">Insights</h1>
              </div>
            </motion.div>
          </div>

          <motion.div
            variants={fadeIn("left", "tween", 0.2, 0.4)}
            initial="hidden"
            whileInView="show"
            exit="show"
            className="flex flex-col gap-2"
          >
            <Typography variant="h4" className="text-white max-w-xl">
              Sometimes i share my mind
            </Typography>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default BlogHeader;
