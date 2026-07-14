import Image from "next/image";
import { cn } from "@/lib/utils";
import type { Project } from "@/lib/projects";

export function ProjectIcon({ project, className }: { project: Project; className?: string }) {
  return (
    <div className={cn("relative aspect-square shrink-0 rounded-[22%] shadow-sm ring-1 ring-black/5 dark:ring-white/10", className)}>
      <Image src={project.icon} alt="" fill sizes="64px" className="rounded-[22%]" />
    </div>
  );
}
