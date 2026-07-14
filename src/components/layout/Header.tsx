"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { siteConfig } from "@/lib/site.config";
import { Container } from "@/components/ui/Container";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/Logo";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-ink-100 dark:border-ink-800 bg-paper/85 dark:bg-ink-950/85 backdrop-blur-md">
      <Container size="wide">
        <div className="flex h-16 items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 font-display text-lg font-medium tracking-tight text-ink-950 dark:text-white"
            onClick={() => setOpen(false)}
          >
            <Logo className="size-6" />
            SamSec
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {siteConfig.nav.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "px-3.5 py-2 text-sm font-medium rounded-full transition-colors",
                    active
                      ? "text-ink-950 dark:text-white"
                      : "text-ink-500 hover:text-ink-950 dark:text-ink-300 dark:hover:text-white"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden lg:flex items-center gap-2">
            <ThemeToggle />
            <Button href="/samsec-ops" size="sm">
              Explore SamSec Ops
            </Button>
          </div>

          <div className="flex items-center gap-1 lg:hidden">
            <ThemeToggle />
            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="inline-flex size-9 items-center justify-center text-ink-950 dark:text-white"
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>
      </Container>

      {open ? (
        <div className="lg:hidden border-t border-ink-100 dark:border-ink-800">
          <Container size="wide" className="py-4 flex flex-col gap-1">
            {siteConfig.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="px-3 py-2.5 text-base font-medium text-ink-800 dark:text-ink-100 rounded-lg hover:bg-ink-50 dark:hover:bg-ink-800"
              >
                {item.label}
              </Link>
            ))}
          </Container>
        </div>
      ) : null}
    </header>
  );
}
