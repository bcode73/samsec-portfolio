"use client";

import { useEffect, useState } from "react";
import { Link2, Check } from "lucide-react";

export function ShareButtons({ title }: { title: string }) {
  const [copied, setCopied] = useState(false);
  const [url, setUrl] = useState("");

  useEffect(() => {
    setUrl(window.location.href);
  }, []);

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(url || window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard API unavailable; nothing to fall back to.
    }
  }

  const xShareHref = `https://x.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`;

  return (
    <div className="flex items-center gap-5">
      <button
        type="button"
        onClick={copyLink}
        className="inline-flex items-center gap-1.5 text-sm font-medium text-ink-500 hover:text-ink-950 dark:text-ink-400 dark:hover:text-white transition-colors"
      >
        {copied ? <Check className="size-3.5" /> : <Link2 className="size-3.5" />}
        {copied ? "Copied" : "Copy link"}
      </button>
      <a
        href={xShareHref}
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm font-medium text-ink-500 hover:text-ink-950 dark:text-ink-400 dark:hover:text-white transition-colors"
      >
        Share on X
      </a>
    </div>
  );
}
