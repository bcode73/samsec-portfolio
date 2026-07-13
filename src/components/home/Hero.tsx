import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/lib/site.config";

export function Hero() {
  return (
    <div className="relative overflow-hidden">
      <Container size="wide" className="pt-16 pb-20 sm:pt-24 sm:pb-28">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="animate-fade-up">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent-500 dark:text-accent-300 mb-6">
              AI Security Engineer · Founder, SamSec
            </p>
            <h1 className="font-display text-4xl sm:text-5xl md:text-[3.4rem] font-medium leading-[1.08] tracking-tight text-ink-950 dark:text-white text-balance">
              Building AI-powered cybersecurity products for the next generation of security operations.
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-ink-500 dark:text-ink-300 text-balance">
              {siteConfig.person.name} is an AI Security Engineer, Security Researcher and Founder building
              intelligent cybersecurity infrastructure through SamSec.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Button href="/samsec" size="default">
                Explore SamSec
                <ArrowRight className="size-4" />
              </Button>
              <Button href="/research" variant="secondary" size="default">
                Read Research
              </Button>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-sm lg:max-w-none animate-fade-up [animation-delay:120ms]">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl border border-ink-100 dark:border-ink-700 bg-ink-900">
              <Image
                src={siteConfig.person.image}
                alt={siteConfig.person.name}
                fill
                priority
                sizes="(min-width: 1024px) 420px, 320px"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-5 -left-5 hidden sm:flex items-center gap-3 rounded-2xl border border-ink-100 dark:border-ink-700 bg-white/90 dark:bg-ink-900/90 backdrop-blur px-5 py-4 shadow-sm">
              <div className="size-2 rounded-full bg-accent-500 animate-pulse" />
              <p className="text-xs font-mono text-ink-600 dark:text-ink-300">Building SamSec Ops — in active development</p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
