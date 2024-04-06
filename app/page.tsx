import Image from "next/image";
import Hero from "@/components/custom/Hero";
import Services from "@/components/custom/Services";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen ">
      <Hero />
      <Services />
    </main>
  );
}
