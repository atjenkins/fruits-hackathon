import { Badge } from "@/components/ui/badge";

type Idea = { title: string; description: string };

const tiers: { label: string; color: string; badgeBg: string; ideas: Idea[] }[] = [
  {
    label: "Starter",
    color: "text-lime",
    badgeBg: "bg-lime/15 text-lime hover:bg-lime/15",
    ideas: [
      { title: "AI Email Drafter", description: "Build a reusable prompt template for emails you write all the time. No code required." },
      { title: "Notion AI Agent", description: "Set up a Notion database that uses Notion AI to summarize, tag, or generate content." },
      { title: "Automated Workflow", description: "Connect two tools with Make or Zapier and add AI in the middle." },
      { title: "Personal Knowledge Base", description: "Use Claude to organize notes or research into a structured Notion space." },
    ],
  },
  {
    label: "Intermediate",
    color: "text-yellow",
    badgeBg: "bg-yellow/15 text-yellow hover:bg-yellow/15",
    ideas: [
      { title: "Claude-Powered Notion Agent", description: "Use Claude API to build an agent that interacts with a Notion database." },
      { title: "AI Research Assistant", description: "Workflow that takes a topic, searches the web, and produces a structured briefing." },
      { title: "Slack or Discord Bot", description: "A bot that responds to prompts, summarizes threads, or answers questions using AI." },
      { title: "Content Pipeline", description: "Input a URL or transcript, output a blog post, tweet thread, or summary." },
    ],
  },
  {
    label: "Ambitious",
    color: "text-primary",
    badgeBg: "bg-primary/15 text-primary hover:bg-primary/15",
    ideas: [
      { title: "Full App with Cursor", description: "Use Cursor + Claude to build a simple working web app. Pick something small." },
      { title: "MCP Integration", description: "Build a custom MCP server connecting Claude to a tool or data source you use." },
      { title: "Multi-Step AI Agent", description: "AI takes input, breaks it into steps, and executes with tools — web search, APIs, files." },
      { title: "AI Data Analysis", description: "Feed Claude a dataset, generate charts, ask questions, and write a summary automatically." },
    ],
  },
];

const ProjectIdeas = () => {
  return (
    <section id="ideas" className="bg-juice py-20">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="font-heading text-4xl font-bold text-center mb-4">
          Project Ideas
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-xl mx-auto">
          Pick one, remix one, or bring your own. Sorted roughly by difficulty.
        </p>

        <div className="flex flex-col gap-12">
          {tiers.map((tier) => (
            <div key={tier.label}>
              <Badge className={`mb-4 text-sm ${tier.badgeBg}`}>
                {tier.label}
              </Badge>
              <div className="grid gap-4 sm:grid-cols-2">
                {tier.ideas.map((idea) => (
                  <div
                    key={idea.title}
                    className="rounded-xl border bg-white p-5 transition-shadow hover:shadow-md"
                  >
                    <h3 className="font-heading text-lg font-semibold">
                      {idea.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {idea.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectIdeas;
