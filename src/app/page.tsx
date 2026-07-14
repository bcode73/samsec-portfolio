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
    "Samuel Omobusuyi is an AI Security Engineer, Security Researcher, and Founder. He builds AI-powered security products through SamSec.",
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
        eyebrow="Selected Research"
        title="Research on AI and security."
        description="Technical research on AI and security, written for practitioners."
        items={research}
        href="/research"
        cta="Read Research"
      />
      <SamSecTeaser />
      <SamSecOpsTeaser />
      <FeaturedContent
        eyebrow="Articles"
        title="Shorter pieces, written along the way."
        description="Practical notes on security engineering, tooling, and what building SamSec actually looks like day to day."
        items={articles}
        href="/articles"
        cta="Browse Articles"
      />
      <FeaturedProjects projects={featuredProjects} />
      <OpenSourceSection />
      <TechStack />
      <TimelineTeaser />
      <NewsletterAndContact />
    </>
  );
}
