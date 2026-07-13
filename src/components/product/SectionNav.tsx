import { cn } from "@/lib/utils";

export function SectionNav({
  items,
  className,
}: {
  items: { id: string; label: string }[];
  className?: string;
}) {
  return (
    <div
      className={cn(
        "sticky top-16 z-40 -mx-6 sm:-mx-8 border-b border-ink-100 dark:border-ink-800 bg-paper/90 dark:bg-ink-950/90 backdrop-blur-md",
        className
      )}
    >
      <nav className="flex gap-1 overflow-x-auto px-6 sm:px-8 py-3 no-scrollbar" aria-label="Product sections">
        {items.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className="shrink-0 rounded-full px-3.5 py-1.5 text-sm font-medium text-ink-500 hover:text-ink-950 hover:bg-ink-50 dark:text-ink-300 dark:hover:text-white dark:hover:bg-ink-800 transition-colors"
          >
            {item.label}
          </a>
        ))}
      </nav>
    </div>
  );
}
