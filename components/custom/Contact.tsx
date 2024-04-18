"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Typography } from "../ui/typography";
import ContactForm from "./ContactForm";
import ContactSocials from "./ContactSocial";
import ContactMail from "./ContactMail";

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [slide, setSlide] = useState(false);

  const handleGetInTouchClick = () => {
    setIsVisible(!isVisible);
  };

  const handleMouseEnter = () => {
    setSlide(true);
  };

  const handleMouseLeave = () => {
    setSlide(false);
  };

  return (
    <section
      id="contact"
      className="mt-24 px-6 sm:px-12 mb-24"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className=" ">
        <h1 className="background-text text-foreground opacity-15">CONTACT</h1>
        <Typography
          variant="h2"
          className="mt-12 text-[24px] sm:text-[38px] md:text-[42px]"
        >
          I&apos;m positive you want to work me
        </Typography>
        <div className="mt-6 relative">
          <h1
            className="text-foreground text-center font-bold text-[50px] sm:text-[70px] md:text-[100px] lg:text-[130px] xl:text-[180px] tracking-tighter cursor-pointer relative"
            onClick={handleGetInTouchClick}
          >
            GET IN TOUCH
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: slide ? "100%" : 0 }}
              transition={{ duration: 0.3 }}
              className="absolute bottom-0 left-0 bg-foreground h-4 z-0"
            ></motion.div>
          </h1>
        </div>
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: isVisible ? "auto" : 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 ml-0 sm:ml-16 md:ml-48 overflow-hidden"
        >
          <ContactForm />
          <div className="flex flex-row gap-4">
            <ContactMail />
            <ContactSocials />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
