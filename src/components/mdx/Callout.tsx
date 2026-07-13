import { AlertTriangle, Info, Lightbulb } from "lucide-react";
import { cn } from "@/lib/utils";

const variants = {
  note: { icon: Info, classes: "border-accent-400/40 bg-accent-100/50 dark:bg-accent-500/10" },
  warning: { icon: AlertTriangle, classes: "border-amber-400/40 bg-amber-50 dark:bg-amber-500/10" },
  tip: { icon: Lightbulb, classes: "border-ink-300 bg-ink-50 dark:bg-ink-800/60" },
};

export function Callout({
  type = "note",
  children,
}: {
  type?: keyof typeof variants;
  children: React.ReactNode;
}) {
  const { icon: Icon, classes } = variants[type];

  return (
    <div className={cn("not-prose flex gap-3 rounded-xl border px-5 py-4 my-6", classes)}>
      <Icon className="mt-0.5 size-4 shrink-0 text-ink-600 dark:text-ink-300" />
      <div className="text-sm leading-relaxed text-ink-700 dark:text-ink-200 [&>p]:m-0">{children}</div>
    </div>
  );
}
