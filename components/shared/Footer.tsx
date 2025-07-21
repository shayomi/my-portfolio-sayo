"use client";

import { Typography } from "@/components/ui/typography";
import FooterContact from "./Footercontact";
import { Separator } from "@/components/ui/separator";
import Contact from "../custom/Contact";
import { motion } from "framer-motion";
import { fadeIn } from "./Variant";
import Link from "next/link";

const Footer = () => {
  return (
    <motion.section className="footer-bg  w-full ">
      <div className="mx-auto max-w-[1800px] w-full ">
        <motion.div
          variants={fadeIn("up", "spring", 0.4, 0.7)}
          initial="hidden"
          whileInView="show"
          exit="show"
        >
          <Contact />
        </motion.div>
        <div className=" px-6 sm:px-12 w-full">
          <div className="flex flex-col sm:flex-row gap-12 sm:gap-8 xl:gap-12 justify-between pb-12 w-full">
            <div className="sm:max-w-[220px] lg:max-w-[290px] xl:max-w-[350px]">
              <img
                src="/images/footer-logo.svg"
                alt="my Logo"
                className="w-[400px]"
              />

              <Typography variant="p" className="text-white">
                Self driven and Highly Motivated developer with 4+ years of
                experience in frontend development using React Js, Next Js ,
                javascript, html/css and UI designs
              </Typography>
            </div>
            <div className=" py-8 text-white">
              <Typography variant="h4" className="text-white">
                Navigation
              </Typography>
              <Separator className="bg-[#9F9F9F]/40 mt-3" />
              <ul className="block text-white mt-8 space-y-5">
                <li>
                  <Link href="/" className="text-white hover:underline">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="#service" className="text-white hover:underline">
                    Service
                  </Link>
                </li>
                <li>
                  <Link href="/work" className="text-white hover:underline">
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-white hover:underline">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#review" className="text-white hover:underline">
                    Review
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="text-white hover:underline">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <FooterContact />
            </div>
          </div>

          <Separator className="bg-[#9F9F9F]/40" />

          <div className="py-4 flex justify-center text-white">
            <Typography variant="smallText" className="text-white font-normal">
              2024 &#169; Sayo Adegoroye. All rights reserved
            </Typography>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Footer;
