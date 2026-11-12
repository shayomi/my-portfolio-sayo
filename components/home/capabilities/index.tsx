import RevealText from "../ui/RevealText";
import SectionLabel from "../ui/SectionLabel";
import OrchestrationGraph from "./OrchestrationGraph";

export default function Capabilities() {
  return (
    <section id="capabilities" className="relative overflow-hidden bg-cream px-5 py-28 text-ink md:px-10 md:py-40">
      <div className="mb-16 flex flex-col gap-8 md:mb-24 md:flex-row md:items-end md:justify-between">
        <div>
          <SectionLabel index="03" label="Capabilities" className="mb-8 text-ink/60" />
          <h2 className="font-display uppercase leading-[0.86] text-[15vw] md:text-[9vw]">
            <RevealText text="One engineer." />
            <br />
            <RevealText text="Whole system." className="text-ember" delay={0.15} />
          </h2>
        </div>
        <p className="max-w-sm font-sans text-base text-ink/70">
          I work like an orchestrator — product, interface, agents, data, testing and
          infrastructure wired into one system that ships, and keeps shipping.
        </p>
      </div>
      <OrchestrationGraph />
    </section>
  );
}
