import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { buildMetadata, breadcrumbSchema } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Callout } from "@/components/mdx/Callout";
import { TrustNav } from "@/components/trust/TrustNav";

export const metadata = buildMetadata({
  title: "Security",
  description:
    "SamSec's engineering philosophy around security: least privilege, responsible AI, human oversight, secure authentication, privacy by design, and continuous improvement.",
  path: "/trust/security",
});

const principles = [
  {
    title: "Security-First Engineering",
    description:
      "Security is designed in from the first architecture decision, not reviewed in at the end. The same rigor applied to correctness and performance applies to how a system can fail or be abused.",
  },
  {
    title: "Least Privilege",
    description:
      "Every capability, human or AI, gets the narrowest access that lets it do its job. Access beyond what's strictly necessary is attack surface with no corresponding benefit.",
  },
  {
    title: "Responsible AI",
    description:
      "AI is built to assist and augment, not to act unsupervised. Where AI can take action, as in SamSec Agent, that action is planned, classified by risk, and confirmed by a person before it runs.",
  },
  {
    title: "Human Oversight",
    description:
      "Automation reduces repetitive work. It doesn't remove the person responsible for the outcome. High-risk and destructive actions always require explicit human confirmation.",
  },
  {
    title: "Secure Authentication",
    description:
      "Access to sensitive functionality, like an active SSH session, is protected with platform-native authentication such as Face ID, without interrupting legitimate use.",
  },
  {
    title: "Privacy By Design",
    description:
      "Data handling defaults to collecting only what a feature needs to function, not everything that could conceivably be useful later.",
  },
  {
    title: "Continuous Improvement",
    description:
      "Security posture is treated as something that's never finished. Each new capability is expected to hold up under real use, and lessons from that use feed back into how the next one is built.",
  },
  {
    title: "Transparent Communication",
    description:
      "This Trust Center exists because security claims are only useful when they're specific and checkable. If something material changes, this page changes with it.",
  },
];

export default function TrustSecurityPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Trust Center", path: "/trust" },
          { name: "Security", path: "/trust/security" },
        ])}
      />

      <PageHeader
        eyebrow="Trust Center · Security"
        title="Security-first engineering, not a checklist run before launch."
        description="How SamSec approaches security as a discipline that shapes every decision, not a review pass added at the end."
      />

      <TrustNav />

      <Section border={false} className="pt-10">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          {principles.map((principle) => (
            <div key={principle.title} className="border-t border-ink-100 dark:border-ink-700 pt-6">
              <p className="font-display text-lg font-medium text-ink-950 dark:text-white">{principle.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-ink-500 dark:text-ink-400">{principle.description}</p>
            </div>
          ))}
        </div>

        <p className="mt-10 text-sm leading-relaxed text-ink-500 dark:text-ink-400 max-w-2xl">
          The Human Oversight and Responsible AI principles above are formalized as{" "}
          <Link href="/adr" className="text-accent-500 dark:text-accent-300 hover:underline">
            Architecture Decision Records
          </Link>
          , with the reasoning behind them covered in more depth in{" "}
          <Link
            href="/research/human-oversight-in-autonomous-infrastructure"
            className="text-accent-500 dark:text-accent-300 hover:underline"
          >
            Human Oversight in Autonomous Infrastructure
          </Link>
          .
        </p>

        <Callout type="note">
          SamSec does not currently hold formal security certifications, such as SOC 2 or ISO 27001. This page
          describes engineering practice, not a compliance attestation. If that changes, it will be stated
          here directly rather than implied.
        </Callout>

        <div className="mt-10">
          <Button href="/trust/responsible-disclosure" variant="secondary">
            Report a security issue
            <ArrowRight className="size-4" />
          </Button>
        </div>
      </Section>
    </>
  );
}
