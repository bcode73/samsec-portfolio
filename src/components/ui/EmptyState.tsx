import { Button } from "./Button";

export function EmptyState({
  title,
  description,
  ctaLabel,
  ctaHref,
}: {
  title: string;
  description: string;
  ctaLabel?: string;
  ctaHref?: string;
}) {
  return (
    <div className="rounded-2xl border border-dashed border-ink-200 dark:border-ink-700 px-8 py-16 text-center">
      <p className="font-display text-xl font-medium text-ink-950 dark:text-white">{title}</p>
      <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-ink-500 dark:text-ink-400">{description}</p>
      {ctaLabel && ctaHref ? (
        <div className="mt-6">
          <Button href={ctaHref} variant="secondary" size="sm">
            {ctaLabel}
          </Button>
        </div>
      ) : null}
    </div>
  );
}
