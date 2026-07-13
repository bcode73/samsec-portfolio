import { ArrowRight } from "lucide-react";
import { Section, Eyebrow } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { NewsletterForm } from "@/components/NewsletterForm";

export function NewsletterAndContact() {
  return (
    <Section className="bg-ink-950 dark:bg-black" border={false}>
      <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
        <div>
          <Eyebrow className="text-accent-300">Newsletter</Eyebrow>
          <h2 className="font-display text-2xl sm:text-3xl font-medium tracking-tight text-white text-balance">
            Original research, occasionally. No noise.
          </h2>
          <p className="mt-4 text-sm sm:text-base leading-relaxed text-ink-300 max-w-md">
            Notes on AI security, SamSec Ops development, and long-form research, sent only when there&apos;s
            something worth reading.
          </p>
          <div className="mt-6">
            <NewsletterForm />
          </div>
        </div>

        <div className="lg:border-l lg:border-ink-800 lg:pl-16">
          <Eyebrow className="text-accent-300">Get in touch</Eyebrow>
          <h2 className="font-display text-2xl sm:text-3xl font-medium tracking-tight text-white text-balance">
            Research collaboration, speaking, or press.
          </h2>
          <p className="mt-4 text-sm sm:text-base leading-relaxed text-ink-300 max-w-md">
            For research collaboration, speaking engagements, press inquiries, or partnership discussions,
            reach out directly.
          </p>
          <div className="mt-6">
            <Button href="/contact" variant="secondary" className="border-ink-600 text-white hover:border-white">
              Contact
              <ArrowRight className="size-4" />
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}
