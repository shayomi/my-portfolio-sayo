interface SectionLabelProps {
  index: string;
  label: string;
  className?: string;
}

export default function SectionLabel({ index, label, className = "" }: SectionLabelProps) {
  return (
    <p className={`flex items-center gap-3 font-sans text-xs uppercase tracking-[0.3em] ${className}`}>
      <span className="font-serif text-base normal-case italic tracking-normal">({index})</span>
      <span className="h-px w-10 bg-current opacity-40" />
      {label}
    </p>
  );
}
