"use client";

import Link from "next/link";
import { Typography } from "../ui/typography";
import { projects } from "@/lib/projectData";
import { motion } from "framer-motion";
import { fadeIn } from "../shared/Variant";

const MyWorks = () => {
  return (
    <motion.section className="mt-48">
      <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-12">
        {projects.map((project) => (
          <Link key={project.slug} href={`/work/${project.slug}`}>
            <motion.div
              variants={fadeIn("up", "spring", 0.2, 0.7)}
              initial="hidden"
              whileInView="show"
              exit="show"
              className="bg-gray-900 w-full rounded-md border border-gray-800 p-6"
            >
              <div className="flex flex-col gap-4">
                <div className="aspect-[16/14] overflow-hidden rounded-md">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover grayscale transition-transform duration-500 ease-in-out hover:scale-95"
                  />
                </div>
                <Typography variant="h4" className="text-white font-medium">
                  {project.name}
                </Typography>
                <div className="flex flex-row justify-between">
                  <Typography variant="smallText" className="text-white">
                    {project.category}
                  </Typography>
                  <Typography
                    variant="smallText"
                    className="text-white/70 font-normal"
                  >
                    @{project.year}
                  </Typography>
                </div>
              </div>
            </motion.div>
          </Link>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default MyWorks;
