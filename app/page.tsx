import Image from "next/image";
import Hero from "@/components/custom/Hero";
import Services from "@/components/custom/Services";
import Reviews from "@/components/custom/Reviews";
import Contact from "@/components/custom/Contact";
import Intro from "@/components/custom/Intro";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-background overflow-hidden">
      <Hero />
      <Services />
      <Reviews />
      <Contact />
    </main>
  );
}
