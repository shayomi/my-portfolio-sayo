import { FiArrowDown } from "react-icons/fi";

export default function ScrollBadge() {
  return (
    <a
      href="#about"
      aria-label="Scroll to about"
      data-cursor="Scroll"
      className="relative grid h-28 w-28 place-items-center rounded-full bg-ink text-bone md:h-32 md:w-32"
    >
      <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full animate-spin-slow" aria-hidden>
        <defs>
          <path id="badge-circle" d="M50,50 m-37,0 a37,37 0 1,1 74,0 a37,37 0 1,1 -74,0" />
        </defs>
        <text className="fill-current font-sans text-[8.5px] uppercase" letterSpacing="3.2">
          <textPath href="#badge-circle">Scroll down · Scroll down · Scroll down ·</textPath>
        </text>
      </svg>
      <span className="grid h-11 w-11 place-items-center rounded-full bg-ember text-ink md:h-12 md:w-12">
        <FiArrowDown />
      </span>
    </a>
  );
}
