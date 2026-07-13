import { Section, Eyebrow } from "@/components/ui/Section";

const stack = [
  { category: "Languages", items: ["TypeScript", "Python", "Go", "Rust"] },
  { category: "AI & ML", items: ["LLM Orchestration", "AI Agents", "RAG Pipelines", "Model Evaluation"] },
  { category: "Infrastructure", items: ["Cloud Security", "Kubernetes", "Terraform", "Edge Computing"] },
  { category: "Security", items: ["Offensive Tooling", "OSINT", "Attack Surface Mapping", "Threat Intel"] },
];

export function TechStack() {
  return (
    <Section>
      <Eyebrow>Technology</Eyebrow>
      <h2 className="font-display text-3xl sm:text-4xl font-medium tracking-tight text-ink-950 dark:text-white text-balance max-w-2xl">
        The stack behind the work.
      </h2>

      <div className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {stack.map((group) => (
          <div key={group.category}>
            <p className="text-xs font-mono uppercase tracking-wide text-ink-400 dark:text-ink-500 mb-3">
              {group.category}
            </p>
            <ul className="space-y-2">
              {group.items.map((item) => (
                <li key={item} className="text-sm text-ink-700 dark:text-ink-200">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
