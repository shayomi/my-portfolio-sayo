"use client";

import React from "react";
import { reviewData } from "@/lib/data";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Typography } from "../ui/typography";

const Reviews = () => {
  return (
    <section id="reviews" className="mt-24 px-2 sm:px-12">
      <h1 className="background-text text-foreground opacity-15">REVIEWS</h1>
      <Typography variant="h2" className="text-start mt-6">
        {" "}
        Do not take my words for it{" "}
      </Typography>

      <Swiper
        className="w-[95%] pb-[4rem] mt-12 mb-12"
        spaceBetween={40}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {reviewData.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide
              key={index}
              className="bg-[#c2c2c2] text-center p-8 rounded-lg select-none"
            >
              <img
                src={avatar}
                alt="Client Avatar"
                className="mx-auto w-16 h-16 rounded-full overflow-hidden border-4 border-primary-variant"
              />
              <h5 className="client__name">{name}</h5>
              <small className="block text-light font-light w-3/5 mx-auto mt-2 text-foreground">
                {review}
              </small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Reviews;
