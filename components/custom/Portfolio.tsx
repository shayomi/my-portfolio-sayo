"use client";

import React, { useState, useEffect } from "react";
import { portfolioData } from "@/lib/data";
import Image from "next/image";
import { Typography } from "../ui/typography";
import { Button } from "../ui/button";
import Link from "next/link";
import { UIUXData } from "@/lib/data";
import PortfolioTabs from "./Portfoliotab";
import { motion } from "framer-motion";
import { fadeIn3 } from "../shared/Variant";
import { transition1 } from "../shared/Transition";

interface PortfolioItem {
  icon: string;
  title: string;
  website: string;
  github: string;
  tags: string;
}

const Portfolio = () => {
  const [selectedTab, setSelectedTab] = useState<string>("website");
  const [portfolioDatas, setPortfolioData] =
    useState<PortfolioItem[]>(portfolioData);

  const handleSelectType = (type: string) => {
    setSelectedTab(type);
    setPortfolioData(type === "website" ? portfolioData : UIUXData);
  };

  return (
    <motion.div
      className="container mt-24 mx-auto px-6 md:px-24"
      id="portfolio"
    >
      <h1 className="background-text">MY WORKS</h1>
      <Typography variant="h3" className="text-background mt-12 text-start">
        Selected Works
      </Typography>
      <div className="mt-12">
        <PortfolioTabs
          selectedType={selectedTab}
          onSelectType={handleSelectType}
          portfolio={{ website: portfolioData, UIUX: UIUXData }}
        />
      </div>
      <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {portfolioDatas.map((portfolio: PortfolioItem, index: number) => (
          <motion.div
            variants={fadeIn3("up", "tween", 0.2, 0.4)}
            initial="hidden"
            whileInView="show"
            exit="show"
            whileHover={{ scale: 1.05 }}
            transition={transition1}
            key={index}
            className=""
          >
            <Link href={portfolio.website}>
              <div className="relative overflow-hidden ">
                <img
                  alt="portfolio-image"
                  src={portfolio.icon}
                  width={800}
                  height={800}
                  className="object-cover w-full h-full mx-auto"
                />
              </div>
            </Link>
            <div className="px-4 flex flex-row items-center justify-between mt-4">
              <Typography variant="p" className="text-sm text-background mb-2">
                {portfolio.title}
              </Typography>
              <div className="flex items-center gap-2 flex-end">
                <p className="text-[8px]  text-background border border-gray-600 px-2 py-1 rounded-lg">
                  {portfolio.tags}
                </p>
                {selectedTab === "UIUX" ? "" : ""}
                {selectedTab !== "UIUX" && (
                  <a href={portfolio.github}>
                    <Button variant="default">Github</Button>
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Portfolio;
