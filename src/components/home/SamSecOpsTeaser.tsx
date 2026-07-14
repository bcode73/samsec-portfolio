import { ArrowRight } from "lucide-react";
import { Section, Eyebrow } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

const capabilities = [
  { title: "Professional SSH Terminal", description: "Real, direct SSH connections with persistent sessions and Face ID protection." },
  { title: "AI Assistant", description: "Understands the active infrastructure context: commands, errors, logs, and configuration." },
  { title: "SamSec Agent", description: "Describe an operational goal; the agent plans the workflow and asks for authorization before it runs." },
  { title: "Engagement Reports", description: "A durable, searchable record of every autonomous engagement, masked for sensitive data." },
];

export function SamSecOpsTeaser() {
  return (
    <Section>
      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
        <div className="max-w-2xl">
          <Eyebrow>The Flagship Product</Eyebrow>
          <h2 className="font-display text-3xl sm:text-4xl font-medium tracking-tight text-ink-950 dark:text-white text-balance">
            SamSec Ops: AI-powered SSH, DevOps, and infrastructure operations for iPhone.
          </h2>
          <p className="mt-5 text-base sm:text-lg leading-relaxed text-ink-500 dark:text-ink-300 text-balance">
            SamSec&apos;s first product, available today on iPhone, and the starting point for a broader
            AI-powered cybersecurity platform.
          </p>
        </div>
        <Button href="/samsec-ops" size="default" className="shrink-0">
          See SamSec Ops
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
