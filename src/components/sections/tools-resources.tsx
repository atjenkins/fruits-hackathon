import { ExternalLink } from "lucide-react";

type Tool = { name: string; description: string; url: string };

const categories: { title: string; tools: Tool[] }[] = [
  {
    title: "AI Assistants",
    tools: [
      { name: "Claude", description: "Great for reasoning, writing, code, and agents. Arik's daily driver.", url: "https://claude.ai" },
      { name: "ChatGPT", description: "Solid for general tasks.", url: "https://chat.openai.com" },
      { name: "Cursor", description: "AI-powered code editor. Free tier available.", url: "https://cursor.sh" },
      { name: "Windsurf", description: "Alternative to Cursor, worth trying.", url: "https://windsurf.com" },
    ],
  },
  {
    title: "Workflow Automation",
    tools: [
      { name: "Make", description: "Visual workflow builder. Connects hundreds of apps with AI steps.", url: "https://make.com" },
      { name: "Zapier", description: "More beginner-friendly than Make. Good for simple automation.", url: "https://zapier.com" },
      { name: "n8n", description: "Open-source, self-hostable, very powerful. Steeper learning curve.", url: "https://n8n.io" },
    ],
  },
  {
    title: "Docs & Learning",
    tools: [
      { name: "Claude Docs", description: "Official Anthropic documentation.", url: "https://docs.anthropic.com" },
      { name: "Make Academy", description: "Learn Make from scratch.", url: "https://academy.make.com" },
      { name: "Cursor Docs", description: "Get started with Cursor.", url: "https://docs.cursor.com" },
    ],
  },
];

const ToolsResources = () => {
  return (
    <section id="tools" className="py-20">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="font-heading text-4xl font-bold text-center mb-12">
          Tools & Resources
        </h2>

        <div className="flex flex-col gap-10">
          {categories.map((cat) => (
            <div key={cat.title}>
              <h3 className="font-heading text-xl font-semibold mb-4">
                {cat.title}
              </h3>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {cat.tools.map((tool) => (
                  <a
                    key={tool.name}
                    href={tool.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col rounded-xl border bg-white p-5 transition-all hover:border-primary/30 hover:shadow-md"
                  >
                    <div className="flex items-center justify-between">
                      <h4 className="font-heading text-lg font-semibold group-hover:text-primary">
                        {tool.name}
                      </h4>
                      <ExternalLink
                        size={16}
                        className="text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100"
                      />
                    </div>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {tool.description}
                    </p>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolsResources;
