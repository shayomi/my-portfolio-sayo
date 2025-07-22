import AboutHeader from "@/components/about/AboutHeader";
import AboutMe from "@/components/about/AboutMe";
import BlogHeader from "@/components/blog/BlogHeader";
import Blogs from "@/components/blog/Blogs";
import React from "react";

const page = () => {
  return (
    <div>
      <BlogHeader />
      <Blogs />
    </div>
  );
};

export default page;
