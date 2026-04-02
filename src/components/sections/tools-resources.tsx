import { ExternalLink } from "lucide-react";

type Tool = { name: string; description: string; price: string; url: string };

const categories: { title: string; description?: string; tools: Tool[] }[] = [
  {
    title: "Surfaces",
    description: "Where you interact with AI. A surface can use different models under the hood.",
    tools: [
      { name: "Claude Code (VS Code)", description: "Recommended. VS Code is free — Claude Code runs inside it. Arik's daily driver.", price: "$20/mo or $100/mo", url: "https://marketplace.visualstudio.com/items?itemName=anthropics.claude-code" },
      { name: "Claude", description: "Anthropic's chat interface. Great for reasoning, writing, and agents.", price: "Free / $20/mo Pro", url: "https://claude.ai" },
      { name: "ChatGPT", description: "OpenAI's chat interface. Solid for general tasks.", price: "Free / $20/mo Plus", url: "https://chat.openai.com" },
      { name: "Antigravity", description: "Browser-based AI app builder. No local setup needed.", price: "Free beta", url: "https://antigravity.dev" },
      { name: "Cursor", description: "AI-powered code editor. Supports multiple models.", price: "Free tier / $20/mo", url: "https://cursor.sh" },
      { name: "Windsurf", description: "Another AI code editor, worth trying.", price: "Free tier / $15/mo", url: "https://windsurf.com" },
      { name: "Codex", description: "OpenAI's cloud coding agent. Runs tasks in a sandbox.", price: "Included with ChatGPT Pro", url: "https://openai.com/index/introducing-codex/" },
    ],
  },
  {
    title: "Models",
    description: "The AI brains behind the surfaces. Some surfaces lock you to one model, others let you choose.",
    tools: [
      { name: "Claude (Anthropic)", description: "Strong at reasoning, code, and following instructions.", price: "Via Claude, Claude Code, Cursor, etc.", url: "https://anthropic.com" },
      { name: "GPT-4o / o3 (OpenAI)", description: "Versatile, widely supported across surfaces.", price: "Via ChatGPT, Cursor, Codex, etc.", url: "https://openai.com" },
      { name: "Gemini (Google)", description: "Large context window, good Google ecosystem integration.", price: "Via Gemini, Cursor, etc.", url: "https://deepmind.google/technologies/gemini/" },
    ],
  },
  {
    title: "No-Code App Builders",
    description: "Build full apps in the browser — no local setup required.",
    tools: [
      { name: "Lovable", description: "Describe what you want and get a working app. Very beginner-friendly.", price: "Free tier / from $20/mo", url: "https://lovable.dev" },
      { name: "Replit", description: "Online IDE with AI agent. Code or prompt your way to an app.", price: "Free tier / from $15/mo", url: "https://replit.com" },
      { name: "v0", description: "Vercel's AI UI generator. Great for quickly scaffolding frontend components.", price: "Free tier / from $20/mo", url: "https://v0.dev" },
    ],
  },
  {
    title: "Workflow & Automation",
    tools: [
      { name: "Notion", description: "Docs, databases, and built-in AI agents. Great for no-code projects.", price: "Free tier / $10/mo", url: "https://notion.so" },
      { name: "Make", description: "Visual workflow builder. Connects hundreds of apps with AI steps.", price: "Free tier / from $9/mo", url: "https://make.com" },
      { name: "Zapier", description: "More beginner-friendly than Make. Good for simple automation.", price: "Free tier / from $20/mo", url: "https://zapier.com" },
      { name: "n8n", description: "Open-source, self-hostable, very powerful. Steeper learning curve.", price: "Free (self-hosted)", url: "https://n8n.io" },
    ],
  },
  {
    title: "Docs & Learning",
    tools: [
      { name: "Claude Code Docs", description: "Get started with Claude Code.", price: "Free", url: "https://docs.anthropic.com/en/docs/claude-code" },
      { name: "Claude Docs", description: "Official Anthropic documentation.", price: "Free", url: "https://docs.anthropic.com" },
      { name: "Make Academy", description: "Learn Make from scratch.", price: "Free", url: "https://academy.make.com" },
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
              <h3 className="font-heading text-xl font-semibold mb-1">
                {cat.title}
              </h3>
              {cat.description && (
                <p className="text-sm text-muted-foreground mb-4">
                  {cat.description}
                </p>
              )}
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
                    <p className="mt-auto pt-3 text-xs font-medium text-primary">
                      {tool.price}
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
