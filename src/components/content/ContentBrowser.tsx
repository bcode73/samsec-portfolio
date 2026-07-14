"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { ContentCard } from "./ContentCard";
import { cn } from "@/lib/utils";
import type { ContentMeta, Difficulty } from "@/lib/content";

const DIFFICULTY_ORDER: Difficulty[] = ["Beginner", "Intermediate", "Advanced"];

export function ContentBrowser({
  items,
  categories,
}: {
  items: ContentMeta[];
  categories: string[];
}) {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [activeDifficulty, setActiveDifficulty] = useState<Difficulty | null>(null);

  const difficulties = useMemo(
    () => DIFFICULTY_ORDER.filter((level) => items.some((item) => item.difficulty === level)),
    [items]
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return items.filter((item) => {
      const matchesCategory = !activeCategory || item.category === activeCategory;
      if (!matchesCategory) return false;
      const matchesDifficulty = !activeDifficulty || item.difficulty === activeDifficulty;
      if (!matchesDifficulty) return false;
      if (!q) return true;
      const haystack = `${item.title} ${item.description} ${item.tags.join(" ")}`.toLowerCase();
      return haystack.includes(q);
    });
  }, [items, query, activeCategory, activeDifficulty]);

  return (
    <div>
      <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative w-full max-w-sm">
          <Search className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-ink-400" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search"
            aria-label="Search"
            className="w-full rounded-full border border-ink-200 dark:border-ink-600 bg-white dark:bg-ink-900 py-2.5 pl-10 pr-4 text-sm text-ink-950 dark:text-white placeholder:text-ink-400 focus:outline-none focus:border-ink-950 dark:focus:border-ink-200 transition-colors"
          />
        </div>

        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setActiveCategory(null)}
            className={cn(
              "rounded-full px-3.5 py-1.5 text-sm font-medium transition-colors",
              activeCategory === null
                ? "bg-ink-950 text-white dark:bg-white dark:text-ink-950"
                : "text-ink-500 hover:text-ink-950 dark:text-ink-300 dark:hover:text-white"
            )}
          >
            All
          </button>
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={cn(
                "rounded-full px-3.5 py-1.5 text-sm font-medium transition-colors",
                activeCategory === category
                  ? "bg-ink-950 text-white dark:bg-white dark:text-ink-950"
                  : "text-ink-500 hover:text-ink-950 dark:text-ink-300 dark:hover:text-white"
              )}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {difficulties.length > 0 ? (
        <div className="mt-4 flex flex-wrap items-center gap-2">
          <span className="font-mono text-xs uppercase tracking-wide text-ink-400 dark:text-ink-500">
            Difficulty
          </span>
          <button
            type="button"
            onClick={() => setActiveDifficulty(null)}
            className={cn(
              "rounded-full border px-3 py-1 text-xs font-medium transition-colors",
              activeDifficulty === null
                ? "border-ink-950 text-ink-950 dark:border-white dark:text-white"
                : "border-ink-200 text-ink-500 hover:text-ink-950 dark:border-ink-600 dark:text-ink-300 dark:hover:text-white"
            )}
          >
            All
          </button>
          {difficulties.map((level) => (
            <button
              key={level}
              type="button"
              onClick={() => setActiveDifficulty(level)}
              className={cn(
                "rounded-full border px-3 py-1 text-xs font-medium transition-colors",
                activeDifficulty === level
                  ? "border-ink-950 text-ink-950 dark:border-white dark:text-white"
                  : "border-ink-200 text-ink-500 hover:text-ink-950 dark:border-ink-600 dark:text-ink-300 dark:hover:text-white"
              )}
            >
              {level}
            </button>
          ))}
        </div>
      ) : null}

      {filtered.length > 0 ? (
        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((item) => (
            <ContentCard key={item.slug} item={item} />
          ))}
        </div>
      ) : (
        <p className="mt-16 text-center text-sm text-ink-400 dark:text-ink-500">
          No results for &ldquo;{query}&rdquo;.
        </p>
      )}
    </div>
  );
}
