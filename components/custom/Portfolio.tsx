import React from "react";
import { portfolioData } from "@/lib/data";
import Image from "next/image";
import { Typography } from "../ui/typography";
import { Button } from "../ui/button";

const Portfolio = () => {
  return (
    <div className="mt-24 px-24">
      <h1 className="background-text">MY WORKS</h1>
      <Typography variant="h3" className="text-background mt-12">
        Selected Works
      </Typography>
      <div className=" grid grid-cols-3 mt-12 gap-6 items-center justify-center mx-auto">
        {portfolioData.map((portfolio, index) => {
          return (
            <div key={index} className=" ">
              <div className="port-banner-bg w-96 h-96 shadow-2xl rounded-lg ">
                <Image
                  alt="portfolio-image"
                  src={portfolio.icon}
                  className="  px-12 py-12"
                  width={500}
                  height={500}
                />
              </div>
              <div className="flex flex-row justify-between items-center  mt-6">
                <Typography variant="p" className="text-background text-[10px]">
                  {portfolio.title}
                </Typography>
                <div className="flex flex-row gap-2 items-center mr-[48px]">
                  <p className="text-background text-[8px] border-[1px] border-gray-600 px-2 py-1 rounded-lg">
                    {portfolio.tags}
                  </p>
                  <Button variant="default">Github</Button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Portfolio;
