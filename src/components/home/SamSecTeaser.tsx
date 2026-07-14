import { ArrowRight } from "lucide-react";
import { Section, Eyebrow } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

const areas = [
  "AI Security",
  "Offensive Security",
  "Threat Intelligence",
  "Attack Surface Management",
  "Cloud Security",
  "Application Security",
  "Identity Security",
  "AI Agents for Security",
];

export function SamSecTeaser() {
  return (
    <Section className="bg-ink-950 dark:bg-black" border={false}>
      <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:items-center">
        <div>
          <Eyebrow className="text-accent-300">The Company</Eyebrow>
          <h2 className="font-display text-3xl sm:text-4xl font-medium tracking-tight text-white text-balance">
            SamSec is an AI-first cybersecurity company.
          </h2>
          <p className="mt-5 text-base sm:text-lg leading-relaxed text-ink-300 text-balance">
            Not a penetration testing agency. Not a web development shop. SamSec builds security tooling
            powered by AI, starting with SamSec Ops.
          </p>
          <div className="mt-8">
            <Button href="/samsec" variant="secondary" className="border-ink-600 text-white hover:border-white">
              About SamSec
              <ArrowRight className="size-4" />
            </Button>
          </div>
        </div>

        <div className="flex flex-wrap gap-2.5">
          {areas.map((area) => (
            <Badge key={area} className="border-ink-700 text-ink-300">
              {area}
            </Badge>
          ))}
        </div>
      </div>
    </Section>
  );
}
