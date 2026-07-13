import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <Container className="flex min-h-[60vh] flex-col items-center justify-center text-center py-24">
      <p className="font-mono text-sm text-accent-500 dark:text-accent-300">404</p>
      <h1 className="mt-4 font-display text-3xl sm:text-4xl font-medium tracking-tight text-ink-950 dark:text-white">
        This page doesn&apos;t exist.
      </h1>
      <p className="mt-4 max-w-md text-ink-500 dark:text-ink-400">
        The page you&apos;re looking for may have moved or never existed.
      </p>
      <div className="mt-8">
        <Button href="/">
          Back to home
          <ArrowRight className="size-4" />
        </Button>
      </div>
    </Container>
  );
}
