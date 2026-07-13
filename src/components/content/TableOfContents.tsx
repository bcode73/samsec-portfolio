import type { TocEntry } from "@/lib/content";

export function TableOfContents({ toc }: { toc: TocEntry[] }) {
  if (toc.length === 0) return null;

  return (
    <nav aria-label="Table of contents" className="sticky top-24">
      <p className="font-mono text-xs uppercase tracking-wide text-ink-400 dark:text-ink-500 mb-4">
        On this page
      </p>
      <ul className="space-y-2.5 border-l border-ink-100 dark:border-ink-700">
        {toc.map((entry) => (
          <li key={entry.slug} style={{ paddingLeft: entry.depth === 3 ? "2rem" : "1rem" }}>
            <a
              href={`#${entry.slug}`}
              className="block text-sm text-ink-500 hover:text-ink-950 dark:text-ink-400 dark:hover:text-white transition-colors"
            >
              {entry.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
