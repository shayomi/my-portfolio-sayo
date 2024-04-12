"use client";

import React, { useState, useEffect } from "react";
// Component imports
import Nav from "./Navbar";
import Socials from "./Socials";
// Logo import
import logo from "../../public/images/logos.png";
// Motion import
import { motion } from "framer-motion";
// Variant import
import { staggerContainer, fadeIn } from "./Variant";

const headerVariants = {
  hidden: {
    padding: "20px 0 20px 0",
    background: "rgba(0,0,0,0.92)",
  },
  show: {
    padding: "4px 0 4px 0",
    background: "rgba(0,0,0,0.92)",
    transition: {
      type: "spring",
    },
  },
};

export const navVariants = {
  hidden: {
    clipPath: "circle(5.8% at 50% 0)",
    opacity: 0,
    transition: {
      type: "spring",
      delay: 0.2,
      stiffness: 300,
      damping: 140,
    },
  },
  show: {
    opacity: 1,
    clipPath: "circle(130% at 50% 0)",
    transition: {
      type: "spring",
      stiffness: 80,
    },
  },
};

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const [nav, setNav] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setIsActive(true) : setIsActive(false);
    });
  }, []);

  return (
    <motion.header
      variants={headerVariants}
      initial="hidden"
      animate={isActive ? "show" : ""}
      className="fixed w-full max-w-[1800px] z-50 py-4"
    >
      <motion.div
        variants={staggerContainer({ staggerChildren: 0.3, delayChildren: 1 })}
        initial="hidden"
        animate={"show"}
        className="container mx-auto"
      >
        <div className="flex justify-between mx-auto lg:ml-32 items-center px-4 lg:px-0 relative text-white">
          {/* Menu button */}
          <motion.div
            variants={fadeIn("down", "tween", 1, 1.4)}
            className={`${
              nav ? "gap-y-0" : "gap-y-2"
            } flex flex-col items-center justify-center w-12 h-12 p-3 order-2 lg:order-none cursor-pointer border-2 rounded-full`}
            onClick={() => setNav(!nav)}
          >
            <motion.div
              initial={{
                rotate: 0,
              }}
              animate={{ rotate: nav ? -45 : 0, translateY: nav ? 2 : 0 }}
              className="w-full h-[2px] bg-white"
            ></motion.div>
            <motion.div
              initial={{
                rotate: 0,
              }}
              animate={{ rotate: nav ? 45 : 0 }}
              className="w-full h-[2px] bg-white"
            ></motion.div>
          </motion.div>
          {/* Logo */}
          <motion.div
            variants={fadeIn("down", "tween", 1.2, 1.4)}
            className="lg:ml-[11rem]"
          >
            <a href="#">
              {/* If header is active, make logo 90x90px; else 107x107px */}
              <img
                className={`${
                  isActive ? "w-[90px] h-[90px]" : "w-[107px] h-[107px]"
                }`}
                src={logo.src}
                alt=""
              />
            </a>
          </motion.div>
          {/* Social icons */}
          <motion.div
            variants={fadeIn("down", "tween", 1.4, 1.4)}
            className="hidden lg:flex"
          >
            <Socials />
          </motion.div>
          <div></div>
          {/* Nav */}
          <motion.div
            variants={navVariants}
            initial="hidden"
            animate={nav ? "show" : " "}
            className="absolute bg-card w-[310px] h-[60vh] right-0 lg:left-0 top-[120px] bottom-0 z-50 rounded-lg shadow-xl"
          >
            <Nav />
          </motion.div>
        </div>
      </motion.div>
    </motion.header>
  );
};

export default Header;
