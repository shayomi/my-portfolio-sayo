"use client";

import React, { useEffect } from "react";
import { Typography } from "../ui/typography";
import Portfolio from "./Portfolio";
import About from "./About";
import { motion, useAnimation } from "framer-motion";

const Services = () => {
  const controls1 = useAnimation();
  const controls2 = useAnimation();

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const windowHeight = window.innerHeight;
    const div1 = document.getElementById("div1");
    const div2 = document.getElementById("div2");

    if (div1 && div2) {
      const div1Top = div1.getBoundingClientRect().top;
      const div2Top = div2.getBoundingClientRect().top;

      if (div1Top <= windowHeight * 0.2) {
        controls1.start({ y: 0 });
      } else {
        controls1.start({ y: -scrollTop * 0.5 }); // Adjust the speed of scrolling
      }

      if (div2Top <= windowHeight * 0.3) {
        controls2.start({ opacity: 0 });
      } else {
        controls2.start({ opacity: 1 });
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="service-banner-bg" id="services">
      <div className="mt-20 px-12">
        <h1 className="background-text">SERVICES</h1>

        {/* for web development */}
        <motion.div
          id="div1"
          className="border-t-[1px] border-background mt-12 flex flex-col md:flex-nowrap md:flex-row"
        >
          <div className=" basis-full sm:basis-6/12 py-12 space-y-6 ">
            <h1 className="text-background text-[24px] sm:text-[36px] md::text-[48px] ">
              WEB DEVELOPMENT
            </h1>
            <div className=" hidden md:flex flex-col space-y-6">
              <h1 className="text-background text-[24px] sm:text-[36px] md::text-[48px] opacity-55 ">
                WEB DEVELOPMENT
              </h1>
              <h1 className="text-background text-[24px] sm:text-[36px] md::text-[48px] opacity-35 ">
                WEB DEVELOPMENT
              </h1>
              <h1 className="text-background text-[24px] sm:text-[36px] md::text-[48px] opacity-15 ">
                WEB DEVELOPMENT
              </h1>
              <h1 className="text-background text-[24px] sm:text-[36px] md::text-[48px] opacity-5 ">
                WEB DEVELOPMENT
              </h1>
            </div>
          </div>
          <div className="basis-full sm:basis-6/12 py-8">
            <Typography variant="p" className="text-background">
              Unlock your digital potential with my expert web development
              services. From sleek designs to seamless functionality, I
              specialize in crafting custom solutions tailored to your needs.
              Trust me to elevate your online presence and captivate your
              audience. Let&apos;s build your digital masterpiece together.
            </Typography>

            <ul className="block list-disc text-background  mt-8 space-y-5">
              <li>
                Tailored web solutions, from design to implementation, ensuring
                a personalized online presence.
              </li>
              <li>
                Specializing in seamless user experiences and responsive designs
                for optimal engagement.
              </li>
              <li>
                Expertise in maximizing accessibility and engagement across all
                devices for a cohesive digital experience.
              </li>
            </ul>
          </div>
        </motion.div>

        {/*for  UI UX */}
        <motion.div
          id="div2"
          className="border-t-[1px] border-background mt-24 flex flex-col md:flex-nowrap md:flex-row"
        >
          <div className=" basis-full sm:basis-6/12 py-12 space-y-6 ">
            <h1 className="text-background text-[24px] sm:text-[36px] md::text-[48px] ">
              UIUX Designs
            </h1>
            <div className=" hidden md:flex flex-col space-y-6">
              <h1 className="text-background text-[24px] sm:text-[36px] md::text-[48px] opacity-55 ">
                UIUX Designs
              </h1>
              <h1 className="text-background text-[24px] sm:text-[36px] md::text-[48px] opacity-35 ">
                UIUX Designs
              </h1>
              <h1 className="text-background text-[24px] sm:text-[36px] md::text-[48px] opacity-15 ">
                UIUX Designs
              </h1>
              <h1 className="text-background text-[24px] sm:text-[36px] md::text-[48px] opacity-5 ">
                UIUX Designs
              </h1>
            </div>
          </div>
          <div className="basis-full sm:basis-6/12 py-8">
            <Typography variant="p" className="text-background">
              Experience the power of our top-notch UI/UX design services,
              unlocking your digital potential. From elegant interfaces to
              seamless user journeys, we specialize in tailoring custom
              solutions to your specifications. Entrust us to elevate your
              online presence, captivating your audience with captivating
              design. Let&apos;s collaborate on crafting your digital
              masterpiece.
            </Typography>

            <ul className="block list-disc text-background  mt-8 space-y-5">
              <li>
                Crafting tailored UI/UX solutions from start to finish,
                guaranteeing a distinct online presence aligned with your brand
                identity.
              </li>
              <li>
                Specializing in captivating designs and seamless user
                experiences across devices, we prioritize accessibility and
                engagement for a unified digital journey.
              </li>
              <li>
                With expertise in maximizing accessibility and engagement, we
                ensure cohesive digital experiences that transcend platforms,
                delivering impactful results.
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
      <Portfolio />
      <About />
    </section>
  );
};

export default Services;