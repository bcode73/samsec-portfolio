import { ArrowRight } from "lucide-react";
import { Section, Eyebrow } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

const capabilities = [
  { title: "AI Security Assistant", description: "Technical security discussions, security concepts, and workflow support." },
  { title: "AI-Assisted Code Analysis", description: "Review snippets, explain behavior, and flag potential security concerns." },
  { title: "Cybersecurity-Focused AI Chat", description: "A chat environment built specifically for security work." },
  { title: "Security Workspace & Notes", description: "A dedicated space for research notes, ideas, and investigations." },
];

export function SamSecOpsTeaser() {
  return (
    <Section>
      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
        <div className="max-w-2xl">
          <Eyebrow>The Flagship Product</Eyebrow>
          <h2 className="font-display text-3xl sm:text-4xl font-medium tracking-tight text-ink-950 dark:text-white text-balance">
            SamSec Ops: an AI-assisted security workspace for iOS.
          </h2>
          <p className="mt-5 text-base sm:text-lg leading-relaxed text-ink-500 dark:text-ink-300 text-balance">
            SamSec&apos;s first product, available today on iOS, and the foundation for a much larger
            AI-powered cybersecurity platform.
          </p>
        </div>
        <Button href="/samsec-ops" size="default" className="shrink-0">
          Explore SamSec Ops
          <ArrowRight className="size-4" />
        </Button>
      </div>

      <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {capabilities.map((capability) => (
          <Card key={capability.title}>
            <Badge>Available now</Badge>
            <p className="mt-4 font-display text-lg font-medium text-ink-950 dark:text-white">{capability.title}</p>
            <p className="mt-2 text-sm leading-relaxed text-ink-500 dark:text-ink-400">{capability.description}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
