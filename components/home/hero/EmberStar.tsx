/** Chunky asterisk that sits behind the portrait. */
export default function EmberStar({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="-50 -50 100 100" className={className} aria-hidden>
      {[0, 45, 90, 135].map((deg) => (
        <rect
          key={deg}
          x={-11}
          y={-50}
          width={22}
          height={100}
          rx={2}
          transform={`rotate(${deg})`}
          className="fill-ember"
        />
      ))}
    </svg>
  );
}
