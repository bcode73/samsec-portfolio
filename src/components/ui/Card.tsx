import { cn } from "@/lib/utils";

export function Card({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={cn(
        "group rounded-2xl border border-ink-100 dark:border-ink-700 bg-white/60 dark:bg-ink-900/40 p-6 sm:p-8 transition-colors duration-200 hover:border-ink-300 dark:hover:border-ink-500",
        className
      )}
    >
      {children}
    </div>
  );
}
