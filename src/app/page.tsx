import { buildMetadata } from "@/lib/seo";
import { getAllContent } from "@/lib/content";
import { projects } from "@/lib/projects";
import { Hero } from "@/components/home/Hero";
import { Mission } from "@/components/home/Mission";
import { FeaturedContent } from "@/components/home/FeaturedContent";
import { SamSecTeaser } from "@/components/home/SamSecTeaser";
import { SamSecOpsTeaser } from "@/components/home/SamSecOpsTeaser";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { OpenSourceSection } from "@/components/home/OpenSourceSection";
import { TechStack } from "@/components/home/TechStack";
import { TimelineTeaser } from "@/components/home/TimelineTeaser";
import { NewsletterAndContact } from "@/components/home/NewsletterAndContact";

export const metadata = buildMetadata({
  title: "Samuel Omobusuyi, AI Security Engineer & Founder, SamSec",
  description:
    "Samuel Omobusuyi is an AI Security Engineer, Security Researcher and Founder building intelligent cybersecurity infrastructure through SamSec.",
  path: "/",
});

export default function HomePage() {
  const research = getAllContent("research").slice(0, 3);
  const articles = getAllContent("articles").slice(0, 3);
  const featuredProjects = projects.slice(0, 2);

  return (
    <>
      <Hero />
      <Mission />
      <FeaturedContent
        eyebrow="Featured Research"
        title="Original research on AI-driven security."
        description="Technical work on the intersection of artificial intelligence and cybersecurity, written for practitioners."
        items={research}
        href="/research"
        cta="All research"
      />
      <SamSecTeaser />
      <SamSecOpsTeaser />
      <FeaturedContent
        eyebrow="Latest Articles"
        title="Notes from the field."
        description="Shorter, practical writing on security engineering, tooling, and the day-to-day of building SamSec."
        items={articles}
        href="/articles"
        cta="All articles"
      />
      <FeaturedProjects projects={featuredProjects} />
      <OpenSourceSection />
      <TechStack />
      <TimelineTeaser />
      <NewsletterAndContact />
    </>
  );
}
