"use client";

import { useState } from "react";

export default function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className="rounded-xl border border-slate-200 px-4 py-2 text-sm font-medium transition hover:border-[#E86AC6] hover:text-[#E86AC6]"
    >
      {copied ? "Copied ✓" : "Copy"}
    </button>
  );
}