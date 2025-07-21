import { notFound } from "next/navigation";
import Image from "next/image";
import { projects } from "@/lib/projectData";
import Header from "@/components/shared/Header";
import { Typography } from "@/components/ui/typography";
import Link from "next/link";

export default function WorkDetail({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) return notFound();

  return (
    <>
      <Header />
      <main className="text-white bg-black relative ">
        <div className="container mx-auto py-56 relative">
          <Link href="/work">
            <Typography
              variant="h6"
              className="text-red-600 px-4 hover:underline cursor-pointer"
            >
              back home
            </Typography>
          </Link>
          <h1 className="text-5xl font-bold mb-6 px-2 mt-12">{project.name}</h1>

          <div className="flex flex-col  md:flex-row gap-6 mb-10 py-10 px-0 md:px-4 h-[600px]">
            <div className="flex flex-col md:flex-row gap-6 justify between">
              <div className="w-full md:w-[50%]">
                <img
                  src={project.image}
                  alt={project.name}
                  className="rounded-md object-cover h-full"
                />
              </div>
              <div className="bg-zinc-900 p-6 border border-gray-800 rounded-md w-full md:w-[50%] text-sm">
                <div className="flex flex-col space-y-6 gap-6">
                  {/* Category */}
                  <div className="flex flex-col gap-4">
                    <Typography variant="h6" className="text-white">
                      Category:
                    </Typography>
                    <Typography variant="h6" className="text-white/80">
                      {project.category}
                    </Typography>
                  </div>

                  {/* Year */}
                  <div className="flex flex-col gap-4">
                    <Typography variant="h6" className="text-white">
                      Year:
                    </Typography>
                    <Typography variant="h6" className="text-white/80">
                      {project.year}
                    </Typography>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-col gap-4">
                    <Typography variant="h6" className="text-white">
                      Tech Stack:
                    </Typography>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {project.techStack.map((tech, i) => (
                        <Typography
                          key={i}
                          variant="smallText"
                          className="bg-zinc-800 px-3 py-1 rounded-md text-white"
                        >
                          {tech}
                        </Typography>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-10 px-0 md:px-6 mt-24 md:mt-6">
            <div>
              <h2 className="text-2xl font-semibold mb-2">The Problem</h2>
              <p className="text-gray-300">{project.problem}</p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-2">The Approach</h2>
              <p className="text-gray-300">{project.approach}</p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-2">The Result</h2>
              <p className="text-green-400">{project.result}</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
