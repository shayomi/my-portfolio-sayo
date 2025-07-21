"use client";

import React from "react";
import Marquee from "react-fast-marquee";
import { Typography } from "../ui/typography";
import { reviewData } from "@/lib/data";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";

const Review = () => {
  return (
    <section className="testimonial-bg mt-48 py-20">
      <div className=" mx-auto">
        {/* Section Title */}
        <div className="max-w-xl px-6 lg:px-24 mb-12">
          <div className="flex flex-col items-start gap-2">
            <Typography variant="h1" className="text-white text-6xl font-bold">
              CLIENT'S
            </Typography>
            <div className="flex flex-row gap-2 items-center">
              <img src="/images/line.png" alt="line" className="w-[80px]" />
              <Typography
                variant="h1"
                className="text-white text-6xl font-bold"
              >
                WORD
              </Typography>
            </div>
          </div>
        </div>

        {/* Moving Testimonials */}
        <div className="mt-40 px-6 mb-40">
          <Marquee speed={30} pauseOnHover gradient={false}>
            {reviewData.map((item, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-md min-w-[320px] max-w-[360px] mx-4 border border-white/10"
              >
                <Typography
                  variant="smallText"
                  className="text-white text-base mb-4"
                >
                  {item.review}
                </Typography>
                <div className="flex items-center gap-4 mt-6">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <Typography
                      variant="smallText"
                      className="text-white font-semibold"
                    >
                      {item.name}
                    </Typography>
                    <Typography
                      variant="smallText"
                      className="text-gray-400 text-sm ml-6"
                    >
                      {item.title}
                    </Typography>
                  </div>
                </div>
              </div>
            ))}
          </Marquee>
        </div>

        {/* Footer Text */}
        <div className="text-center mt-16 flex flex-col items-center gap-6">
          <Typography variant="h3" className="text-white">
            Together, We create something extraordinary!
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
        </div>
      </div>
    </section>
  );
};

export default Review;
