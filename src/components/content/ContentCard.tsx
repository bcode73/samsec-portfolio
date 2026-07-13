import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { ContentMeta } from "@/lib/content";
import { formatDate } from "@/lib/date";

export function ContentCard({ item }: { item: ContentMeta }) {
  return (
    <Link
      href={`/${item.type}/${item.slug}`}
      className="group flex flex-col justify-between rounded-2xl border border-ink-100 dark:border-ink-700 p-6 sm:p-7 transition-colors duration-200 hover:border-ink-300 dark:hover:border-ink-500"
    >
      <div>
        <div className="flex items-center justify-between gap-4">
          <span className="font-mono text-[11px] uppercase tracking-wide text-accent-500 dark:text-accent-300">
            {item.category}
          </span>
          <ArrowUpRight className="size-4 text-ink-300 dark:text-ink-500 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
        <h3 className="mt-4 font-display text-xl font-medium leading-snug text-ink-950 dark:text-white text-balance">
          {item.title}
        </h3>
        <p className="mt-2.5 text-sm leading-relaxed text-ink-500 dark:text-ink-400 line-clamp-3">
          {item.description}
        </p>
      </div>
      <div className="mt-6 flex items-center gap-3 text-xs text-ink-400 dark:text-ink-500">
        <time dateTime={item.date}>{formatDate(item.date)}</time>
        <span aria-hidden="true">·</span>
        <span>{item.readingTime}</span>
      </div>
    </Link>
  );
}
