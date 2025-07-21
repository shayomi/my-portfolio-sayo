"use client";

import React from "react";
import { reviewData } from "@/lib/data";
import { motion } from "framer-motion";
import { Typography } from "../ui/typography";
import { fadeIn } from "../shared/Variants2";

const Reviews = () => {
  return (
    <motion.section id="reviews" className="container mt-24 px-2 sm:px-12">
      <h1 className="background-text text-foreground opacity-15">REVIEWS</h1>
      <Typography variant="h2" className="text-start mt-6">
        {" "}
        Do not take my words for it{" "}
      </Typography>

      <motion.div className="  pb-[4rem] mt-12 mb-12 flex flex-col gap-4">
        {reviewData.map(({ avatar, name, review }, index) => {
          const paddingClass =
            index === 0
              ? ""
              : index === 1
              ? "ml-10 sm:ml-16 md:ml-20"
              : "ml-[6rem] sm:ml-[8rem] md:ml-[12rem]";
          return (
            <motion.div
              variants={fadeIn("right", "spring", index * 0.2, 0.8)}
              initial="hidden"
              whileInView={"show"}
              exit={"show"}
              key={index}
              className={`bg-[#c2c2c2] w-[75%] text-center p-8 rounded-lg select-none shadow-md ${paddingClass}`}
            >
              <img
                src={avatar}
                alt="Client Avatar"
                className="mx-auto w-16 h-16 rounded-full overflow-hidden border-4 border-primary-variant"
              />
              <h5 className="client__name">{name}</h5>
              <small className="block text-light font-light w-[95%] sm:w-3/5 mx-auto mt-2 text-foreground">
                {review}
              </small>
            </motion.div>
          );
        })}
      </motion.div>
    </motion.section>
  );
};

export default Reviews;
