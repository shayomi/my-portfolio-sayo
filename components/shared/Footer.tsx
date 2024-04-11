"use client";

import { Typography } from "@/components/ui/typography";
import FooterContact from "./Footercontact";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <section className="bg-background ">
      <div className="px-6 sm:px-12">
        <div className="flex flex-col sm:flex-row gap-12 sm:gap-8 xl:gap-12 justify-between pb-12">
          <div className="sm:max-w-[220px] lg:max-w-[290px] xl:max-w-[350px]">
            <img
              src="/images/footer-logo.svg"
              alt="my Logo"
              className="w-[400px]"
            />

            <Typography variant="p" className="text-foreground">
              Self driven and Highly Motivated developer with 4+ years of
              experience in frontend development using React Js, Next Js ,
              javascript, html/css and UI designs
            </Typography>
          </div>
          <div className=" py-8">
            <Typography variant="h4" className="text-foreground">
              Navigation
            </Typography>
            <Separator className="bg-[#9F9F9F]/40 mt-3" />
            <ul className="block  text-foreground mt-8 space-y-5">
              <li>Home</li>
              <li>Service</li>
              <li>Portfolio</li>
              <li>About</li>
              <li>Review</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <FooterContact />
          </div>
        </div>

        <Separator className="bg-[#9F9F9F]/40" />

        <div className="py-4 flex justify-center">
          <Typography
            variant="smallText"
            className="text-foreground font-normal"
          >
            2024 &#169; Sayo Adegoroye. All rights reserved
          </Typography>
        </div>
      </div>
    </section>
  );
};

export default Footer;
