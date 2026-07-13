import { Container } from "./Container";
import { Eyebrow } from "./Section";
import { cn } from "@/lib/utils";

export function PageHeader({
  eyebrow,
  title,
  description,
  className,
  children,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <div className={cn("pt-16 pb-14 sm:pt-24 sm:pb-20", className)}>
      <Container>
        <div className="max-w-3xl animate-fade-up">
          {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-ink-950 dark:text-white text-balance">
            {title}
          </h1>
          {description ? (
            <p className="mt-6 text-lg sm:text-xl leading-relaxed text-ink-500 dark:text-ink-300 text-balance">
              {description}
            </p>
          ) : null}
          {children}
        </div>
      </Container>
    </div>
  );
}
