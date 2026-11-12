/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Typography } from "../../ui/typography";
import { fadeIn } from "../../shared/Variant";
import { projects } from "@/lib/projectData";

type Project = (typeof projects)[number];

interface ProjectCardProps {
  project: Project;
  direction: "left" | "right" | "up";
  delay: number;
  className: string;
  imageClassName: string;
}

const ProjectCard = ({
  project,
  direction,
  delay,
  className,
  imageClassName,
}: ProjectCardProps) => (
  <motion.div
    variants={fadeIn(direction, "tween", delay, 0.7)}
    initial="hidden"
    whileInView="show"
    exit="show"
    className={`bg-gray-800 w-full rounded-md border border-gray-600 p-6 ${className}`}
  >
    <Link href={`/work/${project.slug}`}>
      <div className="flex flex-col gap-4">
        <img
          src={project.image}
          alt={project.name}
          className={`w-full object-cover transition-transform duration-500 ease-in-out hover:scale-95 ${imageClassName}`}
        />
        <Typography variant="h4" className="text-white font-medium">
          {project.name}
        </Typography>
        <div className="flex flex-row gap-4 justify-between">
          <Typography variant="smallText" className="text-white">
            {project.category}
          </Typography>
          <Typography variant="smallText" className="text-white/70 font-normal">
            @{project.year}
          </Typography>
        </div>
      </div>
    </Link>
  </motion.div>
);

export default ProjectCard;
