"use client";

import { useState } from "react";
import { FiCheck, FiCopy } from "react-icons/fi";
import { EMAIL } from "@/lib/siteData";

export default function CopyEmail() {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${EMAIL}`;
    }
  };

  return (
    <div className="flex flex-wrap items-center gap-3">
      <a
        href={`mailto:${EMAIL}`}
        data-cursor="Write"
        className="break-all font-sans text-xl font-medium underline decoration-ink/30 underline-offset-8 transition-colors hover:decoration-ink md:text-3xl"
      >
        {EMAIL}
      </a>
      <button
        type="button"
        onClick={copy}
        aria-label="Copy email address"
        className="flex items-center gap-2 rounded-full bg-ink px-4 py-2 font-sans text-xs uppercase tracking-[0.2em] text-bone"
      >
        {copied ? <FiCheck /> : <FiCopy />}
        {copied ? "Copied" : "Copy"}
      </button>
    </div>
  );
}
