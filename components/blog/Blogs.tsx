"use client";

import Link from "next/link";
import { Typography } from "../ui/typography";

import { motion } from "framer-motion";
import { fadeIn } from "../shared/Variant";
import { blogListData } from "./BlogData";

const Blogs = () => {
  return (
    <motion.section className="mt-48">
      <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-12 items-stretch">
        {blogListData.map((blog) => (
          <Link key={blog.slug} href={`/blog/${blog.slug}`}>
            <motion.div
              variants={fadeIn("up", "spring", 0.2, 0.7)}
              initial="hidden"
              whileInView="show"
              exit="show"
              className="bg-gray-900 h-full w-full rounded-md border border-gray-800 p-6"
            >
              <div className="flex flex-col gap-4">
                <div className="aspect-[16/14] overflow-hidden rounded-md">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover grayscale transition-transform duration-500 ease-in-out hover:scale-95"
                  />
                </div>
                <Typography variant="h4" className="text-white font-medium">
                  {blog.title}
                </Typography>
                <div className="flex flex-row justify-between">
                  <Typography
                    variant="smallText"
                    className="text-red-600 font-normal"
                  >
                    {blog.date}
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

export default Blogs;
