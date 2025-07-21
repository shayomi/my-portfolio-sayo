import Image from "next/image";
import Hero from "@/components/custom/Hero";
import Services from "@/components/custom/Services";
import Reviews from "@/components/custom/Reviews";
import Contact from "@/components/custom/Contact";
import Intro from "@/components/custom/Intro";
import Brief from "@/components/custom/Brief";
import Service from "@/components/custom/Service";
import SelectedWorks from "@/components/custom/SelectedWorks";
import Review from "@/components/custom/Review";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen w-full  bg-black mx-auto overflow-hidden">
      <Hero />
      <Brief />
      <Service />
      <SelectedWorks />
      <Review />
      <Services />

      {/* <Contact /> */}
    </main>
  );
}
