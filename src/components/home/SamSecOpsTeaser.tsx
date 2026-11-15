import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/lib/site.config";

const capabilities = [
  { title: "Professional SSH Terminal", description: "Real, direct SSH connections with persistent sessions and Face ID protection." },
  { title: "AI Assistant", description: "Understands the active infrastructure context: commands, errors, logs, and configuration." },
  { title: "SamSec Agent", description: "Describe an operational goal; the agent plans the workflow and asks for approval before anything changes system state." },
  { title: "Engagement Reports", description: "A durable, searchable record of every autonomous engagement, masked for sensitive data." },
];

const transcript = `user@web-01 ~ $ samsec agent run "check disk, logs, failed services"
[1/4] df -h
[2/4] journalctl -p err --since "1 hour ago"
[3/4] systemctl --failed
✓ done : no failed services, /var at 81%, rotate logs in 2 days
user@web-01 ~ $ _`;

export function SamSecOpsTeaser() {
  return (
    <Section>
      <div className="grid grid-cols-1 gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div className="order-2 lg:order-1">
          <h2 className="font-display text-3xl sm:text-4xl font-medium tracking-tight text-ink-950 dark:text-white text-balance">
            SamSec Ops: AI-powered SSH, DevOps, and infrastructure operations for iPhone.
          </h2>
          <p className="mt-5 text-base sm:text-lg leading-relaxed text-ink-500 dark:text-ink-300 text-balance">
            SamSec&apos;s first product, live on the App Store today, and the starting point for a broader
            AI-powered cybersecurity platform.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button href={siteConfig.product.appStoreUrl} size="default" external>
              Download on the App Store
            </Button>
            <Button href="/samsec-ops" variant="secondary" size="default">
              See SamSec Ops
            </Button>
          </div>
        </div>

        <div className="order-1 lg:order-2 overflow-hidden rounded-xl border border-ink-800 bg-ink-950 shadow-sm">
          <div className="flex items-center gap-1.5 border-b border-ink-800 px-4 py-3">
            <span className="size-2.5 rounded-full bg-ink-700" />
            <span className="size-2.5 rounded-full bg-ink-700" />
            <span className="size-2.5 rounded-full bg-ink-700" />
          </div>
          <pre className="whitespace-pre-wrap break-words p-5 font-mono text-[12px] sm:text-[13px] leading-relaxed text-ink-200">
            <code>{transcript}</code>
          </pre>
        </div>
      </div>

      <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {capabilities.map((capability) => (
          <div key={capability.title} className="border-t border-ink-100 dark:border-ink-700 pt-6">
            <p className="font-display text-lg font-medium text-ink-950 dark:text-white">{capability.title}</p>
            <p className="mt-2 text-sm leading-relaxed text-ink-500 dark:text-ink-400">{capability.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
