import { notFound } from "next/navigation";
import { blogListData } from "@/components/blog/BlogData";
import Header from "@/components/shared/Header";
import { Typography } from "@/components/ui/typography";

export default function Page({ params }: { params: { slug: string } }) {
  const blog = blogListData.find((p) => p.slug === params.slug);

  if (!blog) return notFound();

  return (
    <>
      <section className="blog-bg h-[600px] items-start">
        <Header />
      </section>

      <section className="bg-black py-2 px-4 text-white mt-[-58px]">
        <div className="max-w-4xl mx-auto space-y-8">
          <Typography variant="h2" className="font-bold">
            {" "}
            {blog.title}
          </Typography>

          <Typography variant="p">{blog.paragraph1}</Typography>
          <Typography variant="p">{blog.paragraph2}</Typography>
          <Typography variant="p">{blog.paragraph3}</Typography>
          <Typography variant="p" className="text-white/80">
            {blog.conclusion}
          </Typography>
        </div>
      </section>
    </>
  );
}
