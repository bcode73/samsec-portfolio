import Link from "next/link";
import { cn } from "@/lib/utils";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full text-sm font-medium transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-accent-400 disabled:opacity-50 disabled:pointer-events-none";

const variants = {
  primary:
    "bg-ink-950 text-white hover:bg-ink-800 dark:bg-white dark:text-ink-950 dark:hover:bg-ink-100",
  secondary:
    "bg-transparent text-ink-950 border border-ink-200 hover:border-ink-950 dark:text-ink-50 dark:border-ink-600 dark:hover:border-ink-200",
  ghost: "bg-transparent text-ink-600 hover:text-ink-950 dark:text-ink-300 dark:hover:text-white",
};

const sizes = {
  default: "h-11 px-6",
  sm: "h-9 px-4 text-[13px]",
};

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
  disabled?: boolean;
  external?: boolean;
}

export function Button({
  children,
  href,
  variant = "primary",
  size = "default",
  className,
  type = "button",
  onClick,
  disabled,
  external,
}: ButtonProps) {
  const classes = cn(base, variants[variant], sizes[size], className);

  if (href) {
    if (external) {
      return (
        <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {children}
    </button>
  );
}
