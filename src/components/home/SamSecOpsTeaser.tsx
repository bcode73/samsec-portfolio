import { ArrowRight } from "lucide-react";
import { Section, Eyebrow } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

const modules = [
  { title: "AI Security Assistant", description: "An AI layer across every workflow, from triage to reporting." },
  { title: "Offensive Security Workspace", description: "Reconnaissance, OSINT, and vulnerability research in one place." },
  { title: "Attack Surface Mapping", description: "Continuous discovery and classification of exposed assets." },
  { title: "Automation Pipelines", description: "Composable, repeatable workflows across security tooling." },
];

export function SamSecOpsTeaser() {
  return (
    <Section>
      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
        <div className="max-w-2xl">
          <Eyebrow>The Flagship Product</Eyebrow>
          <h2 className="font-display text-3xl sm:text-4xl font-medium tracking-tight text-ink-950 dark:text-white text-balance">
            SamSec Ops — the workspace for cybersecurity.
          </h2>
          <p className="mt-5 text-base sm:text-lg leading-relaxed text-ink-500 dark:text-ink-300 text-balance">
            One workspace. One intelligence layer. One security ecosystem. SamSec Ops is being built to become the
            daily operating system for security analysts, penetration testers, researchers, and incident responders.
          </p>
        </div>
        <Button href="/samsec-ops" size="default" className="shrink-0">
          Explore SamSec Ops
          <ArrowRight className="size-4" />
        </Button>
      </div>

      <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {modules.map((module) => (
          <Card key={module.title}>
            <p className="font-display text-lg font-medium text-ink-950 dark:text-white">{module.title}</p>
            <p className="mt-2 text-sm leading-relaxed text-ink-500 dark:text-ink-400">{module.description}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
