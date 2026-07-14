import { ArrowRight } from "lucide-react";
import { Section, Eyebrow } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { TimelineList } from "@/components/TimelineList";

export function TimelineTeaser() {
  return (
    <Section>
      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
        <div className="max-w-2xl">
          <Eyebrow>Timeline</Eyebrow>
          <h2 className="font-display text-3xl sm:text-4xl font-medium tracking-tight text-ink-950 dark:text-white text-balance">
            How this happened, roughly in order.
          </h2>
        </div>
        <Button href="/timeline" variant="secondary" className="shrink-0">
          Full Timeline
          <ArrowRight className="size-4" />
        </Button>
      </div>

      <div className="mt-12">
        <TimelineList limit={4} />
      </div>
    </Section>
  );
}
