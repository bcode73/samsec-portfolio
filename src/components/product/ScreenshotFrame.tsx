import { cn } from "@/lib/utils";

export function ScreenshotFrame({
  label,
  className,
}: {
  label: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-2xl border border-ink-100 dark:border-ink-700 bg-ink-900",
        className
      )}
    >
      <div className="flex items-center gap-1.5 border-b border-ink-800 px-4 py-3">
        <span className="size-2.5 rounded-full bg-ink-700" />
        <span className="size-2.5 rounded-full bg-ink-700" />
        <span className="size-2.5 rounded-full bg-ink-700" />
      </div>
      <div className="relative flex aspect-video items-center justify-center bg-[linear-gradient(135deg,#111113_0%,#1a1a1d_100%)]">
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
        <p className="relative font-mono text-xs uppercase tracking-[0.16em] text-ink-400">{label}</p>
      </div>
    </div>
  );
}
