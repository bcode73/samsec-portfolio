import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/lib/site.config";

export function Hero() {
  return (
    <div className="relative overflow-hidden">
      <Container size="wide" className="pt-16 pb-20 sm:pt-24 sm:pb-28">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="animate-fade-up">
            <h1 className="font-display text-4xl sm:text-5xl md:text-[3.4rem] font-medium leading-[1.08] tracking-tight text-ink-950 dark:text-white text-balance">
              Building AI-powered infrastructure and security products, starting with SamSec Ops.
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-ink-500 dark:text-ink-300 text-balance">
              {siteConfig.person.name} is an AI Security Engineer, Security Researcher, and Founder. SamSec
              Ops, his first product, is live on the App Store today.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Button href="/samsec" size="default">
                About SamSec
              </Button>
              <Button href="/research" variant="secondary" size="default">
                Read Research
              </Button>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-sm lg:max-w-none animate-fade-up [animation-delay:120ms]">
            <div
              aria-hidden="true"
              className="absolute inset-x-8 top-10 bottom-10 rounded-full bg-accent-100 dark:bg-accent-500/10 blur-3xl"
            />
            <div className="relative aspect-[900/1201] w-full">
              <Image
                src={siteConfig.person.image}
                alt={`${siteConfig.person.name}, AI Security Engineer and founder of SamSec`}
                fill
                priority
                sizes="(min-width: 1024px) 420px, 320px"
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
