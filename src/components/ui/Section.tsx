import { cn } from "@/lib/utils";
import { Container } from "./Container";

export function Section({
  className,
  containerClassName,
  containerSize,
  children,
  id,
  border = true,
}: {
  className?: string;
  containerClassName?: string;
  containerSize?: "default" | "narrow" | "wide";
  children: React.ReactNode;
  id?: string;
  border?: boolean;
}) {
  return (
    <section id={id} className={cn("py-20 sm:py-28", border && "border-t border-ink-100 dark:border-ink-700", className)}>
      <Container size={containerSize} className={containerClassName}>
        {children}
      </Container>
    </section>
  );
}

export function Eyebrow({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <p
      className={cn(
        "font-mono text-xs uppercase tracking-[0.18em] text-accent-500 dark:text-accent-300 mb-4",
        className
      )}
    >
      {children}
    </p>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      <h2 className="font-display text-3xl sm:text-4xl font-medium tracking-tight text-ink-950 dark:text-ink-50 text-balance">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base sm:text-lg leading-relaxed text-ink-500 dark:text-ink-300 text-balance">
          {description}
        </p>
      ) : null}
    </div>
  );
}
