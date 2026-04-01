"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const guides = [
  {
    value: "overview",
    label: "Overview",
    content: (
      <>
        <h3 className="font-heading text-2xl font-semibold mb-4">
          What Are We Building With?
        </h3>
        <p className="text-muted-foreground mb-4">
          There are a bunch of different ways to build with AI right now. Here&apos;s the quick mental model:
        </p>
        <ul className="space-y-3 text-muted-foreground">
          <li className="flex gap-3">
            <span className="text-primary font-bold">Chat AI</span>
            <span>— Talk to an AI, get answers. Claude, ChatGPT, etc. Great for brainstorming, writing, and one-off tasks.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-primary font-bold">AI Code Editors</span>
            <span>— Write code with AI help. Cursor, Windsurf. The AI sees your codebase and helps you build.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-primary font-bold">Workflow Automation</span>
            <span>— Connect apps together with AI in the middle. Make, Zapier, n8n. No code needed.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-primary font-bold">APIs & Agents</span>
            <span>— Build AI into your own code. More advanced, but the most flexible.</span>
          </li>
        </ul>
      </>
    ),
  },
  {
    value: "claude",
    label: "Claude / Chat AI",
    content: (
      <>
        <h3 className="font-heading text-2xl font-semibold mb-4">
          Getting Started with Claude
        </h3>
        <ol className="space-y-3 list-decimal list-inside text-muted-foreground">
          <li>Go to <a href="https://claude.ai" target="_blank" rel="noopener noreferrer" className="text-primary underline">claude.ai</a> and create an account</li>
          <li>Start a new conversation and tell Claude what you want to build</li>
          <li>Use <strong>Projects</strong> to give Claude persistent context about your work</li>
          <li>Try asking Claude to help you plan before you build — it&apos;s great at breaking things down</li>
        </ol>
        <div className="mt-6 rounded-lg bg-juice p-4">
          <p className="text-sm font-medium">Pro tip: Be specific about what you want. Instead of &quot;build me a website&quot;, try &quot;I need a landing page with a hero section, signup form, and FAQ — use Next.js and Tailwind.&quot;</p>
        </div>
      </>
    ),
  },
  {
    value: "cursor",
    label: "Cursor / Code Editors",
    content: (
      <>
        <h3 className="font-heading text-2xl font-semibold mb-4">
          Getting Started with Cursor
        </h3>
        <ol className="space-y-3 list-decimal list-inside text-muted-foreground">
          <li>Download Cursor from <a href="https://cursor.sh" target="_blank" rel="noopener noreferrer" className="text-primary underline">cursor.sh</a></li>
          <li>Open a folder or create a new project</li>
          <li>Use <strong>Cmd/Ctrl+K</strong> to edit code inline with AI</li>
          <li>Use <strong>Cmd/Ctrl+L</strong> to chat with AI about your codebase</li>
          <li>Use <strong>Composer</strong> (Cmd/Ctrl+I) for multi-file edits and bigger changes</li>
        </ol>
        <div className="mt-6 rounded-lg bg-juice p-4">
          <p className="text-sm font-medium">Pro tip: Start by describing what you want to build in the Composer. Let it scaffold the project, then iterate from there.</p>
        </div>
      </>
    ),
  },
  {
    value: "make",
    label: "Make / Automation",
    content: (
      <>
        <h3 className="font-heading text-2xl font-semibold mb-4">
          Getting Started with Make
        </h3>
        <ol className="space-y-3 list-decimal list-inside text-muted-foreground">
          <li>Sign up at <a href="https://make.com" target="_blank" rel="noopener noreferrer" className="text-primary underline">make.com</a> (free tier is generous)</li>
          <li>Create a new <strong>Scenario</strong> — this is your workflow</li>
          <li>Add a trigger (what kicks it off — a form, a schedule, a webhook)</li>
          <li>Add an AI step (OpenAI, Claude, or HTTP module to call any AI API)</li>
          <li>Add an output (Slack message, email, Notion page, Google Sheet, etc.)</li>
        </ol>
        <div className="mt-6 rounded-lg bg-juice p-4">
          <p className="text-sm font-medium">Pro tip: Start with the <a href="https://academy.make.com" target="_blank" rel="noopener noreferrer" className="text-primary underline">Make Academy</a> quickstart if you&apos;ve never used it. Takes 10 minutes.</p>
        </div>
      </>
    ),
  },
];

const Guides = () => {
  return (
    <section id="guides" className="bg-juice py-20">
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="font-heading text-4xl font-bold text-center mb-12">
          Getting Started Guides
        </h2>

        <Tabs defaultValue="overview">
          <TabsList className="mb-8 flex w-full flex-wrap justify-center gap-2 bg-transparent">
            {guides.map((g) => (
              <TabsTrigger
                key={g.value}
                value={g.value}
                className="rounded-full border px-4 py-2 text-sm data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                {g.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {guides.map((g) => (
            <TabsContent
              key={g.value}
              value={g.value}
              className="rounded-xl border bg-white p-6 md:p-8"
            >
              {g.content}
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default Guides;
