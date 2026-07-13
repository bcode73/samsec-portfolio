import { timeline } from "@/lib/timeline";

export function TimelineList({ limit }: { limit?: number }) {
  const entries = limit ? timeline.slice(-limit) : timeline;

  return (
    <ol className="space-y-0">
      {entries.map((entry) => (
        <li
          key={entry.year}
          className="grid grid-cols-[5rem_1fr] sm:grid-cols-[8rem_1fr] gap-6 py-7 border-t border-ink-100 dark:border-ink-700 last:border-b"
        >
          <span className="font-mono text-sm text-ink-400 dark:text-ink-500 pt-0.5">{entry.year}</span>
          <div>
            <p className="font-display text-lg font-medium text-ink-950 dark:text-white">{entry.title}</p>
            <p className="mt-1.5 text-sm leading-relaxed text-ink-500 dark:text-ink-400 max-w-xl">
              {entry.description}
            </p>
          </div>
        </li>
      ))}
    </ol>
  );
}
