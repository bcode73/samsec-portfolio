import { ArrowRight } from "lucide-react";
import { Section, Eyebrow } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { ContentCard } from "@/components/content/ContentCard";
import type { ContentMeta } from "@/lib/content";

export function FeaturedContent({
  eyebrow,
  title,
  description,
  items,
  href,
  cta,
}: {
  eyebrow: string;
  title: string;
  description: string;
  items: ContentMeta[];
  href: string;
  cta: string;
}) {
  if (items.length === 0) return null;

  return (
    <Section>
      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
        <div className="max-w-2xl">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h2 className="font-display text-3xl sm:text-4xl font-medium tracking-tight text-ink-950 dark:text-white text-balance">
            {title}
          </h2>
          <p className="mt-4 text-base sm:text-lg leading-relaxed text-ink-500 dark:text-ink-300 text-balance">
            {description}
          </p>
        </div>
        <Button href={href} variant="secondary" className="shrink-0">
          {cta}
          <ArrowRight className="size-4" />
        </Button>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
        {items.map((item) => (
          <ContentCard key={item.slug} item={item} />
        ))}
      </div>
    </Section>
  );
}
