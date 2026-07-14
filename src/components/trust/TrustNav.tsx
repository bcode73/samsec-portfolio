"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const items = [
  { href: "/trust", label: "Overview" },
  { href: "/trust/security", label: "Security" },
  { href: "/trust/responsible-disclosure", label: "Responsible Disclosure" },
  { href: "/trust/product-security", label: "Product Security" },
  { href: "/trust/release-philosophy", label: "Release Philosophy" },
  { href: "/trust/changelog", label: "Changelog" },
  { href: "/trust/status", label: "Status" },
  { href: "/trust/engineering-principles", label: "Engineering Principles" },
  { href: "/trust/contact", label: "Contact" },
];

export function TrustNav() {
  const pathname = usePathname();

  return (
    <div className="sticky top-16 z-40 -mx-6 sm:-mx-8 border-b border-ink-100 dark:border-ink-800 bg-paper/90 dark:bg-ink-950/90 backdrop-blur-md">
      <nav className="flex gap-1 overflow-x-auto px-6 sm:px-8 py-3 no-scrollbar" aria-label="Trust Center sections">
        {items.map((item) => {
          const active = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "shrink-0 rounded-full px-3.5 py-1.5 text-sm font-medium transition-colors",
                active
                  ? "bg-ink-950 text-white dark:bg-white dark:text-ink-950"
                  : "text-ink-500 hover:text-ink-950 hover:bg-ink-50 dark:text-ink-300 dark:hover:text-white dark:hover:bg-ink-800"
              )}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
