import { cn } from "@/lib/utils";

export function Badge({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-ink-200 dark:border-ink-600 px-3 py-1 font-mono text-[11px] uppercase tracking-wide text-ink-500 dark:text-ink-300",
        className
      )}
    >
      {children}
    </span>
  );
}
