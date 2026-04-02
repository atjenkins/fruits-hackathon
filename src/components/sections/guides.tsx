"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Link = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="text-primary underline">
    {children}
  </a>
);

const Tip = ({ children }: { children: React.ReactNode }) => (
  <div className="mt-6 rounded-lg bg-juice p-4">
    <p className="text-sm font-medium">{children}</p>
  </div>
);

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
          There are a bunch of different ways to build with AI right now.
          Here&apos;s the quick mental model:
        </p>
        <ul className="space-y-3 text-muted-foreground">
          <li className="flex gap-3">
            <span className="text-primary font-bold">Chat AI</span>
            <span>
              — Talk to an AI, get answers. Claude, ChatGPT, etc. Great for
              brainstorming, writing, and one-off tasks.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-primary font-bold">AI Code Editors</span>
            <span>
              — Write code with AI help. VS Code with Claude Code, Cursor, or
              Windsurf. The AI sees your codebase and helps you build.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-primary font-bold">Workflow Automation</span>
            <span>
              — Connect apps together with AI in the middle. Make, Zapier, n8n.
              No code needed.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-primary font-bold">APIs & Agents</span>
            <span>
              — Build AI into your own code. More advanced, but the most
              flexible.
            </span>
          </li>
        </ul>
      </>
    ),
  },
  {
    value: "fullstack",
    label: "VS Code / Full Stack",
    content: (
      <>
        <h3 className="font-heading text-2xl font-semibold mb-4">
          The Full Stack: VS Code + Claude Code + GitHub + Vercel + Supabase
        </h3>
        <p className="text-muted-foreground mb-4">
          This is the recommended stack if you want to build a web app. All free tiers are generous enough for the hackathon.
        </p>
        <ol className="space-y-3 list-decimal list-inside text-muted-foreground">
          <li>
            Download <Link href="https://code.visualstudio.com">VS Code</Link> — free code editor
          </li>
          <li>
            Install the <strong>Claude Code extension</strong> from the VS Code marketplace — this is your AI coding assistant
          </li>
          <li>
            Create a <Link href="https://claude.ai">Claude account</Link> ($20/mo Pro or $100/mo Max — best token value for coding)
          </li>
          <li>
            Create a <Link href="https://github.com">GitHub account</Link> — for version control and deploying
          </li>
          <li>
            Create a <Link href="https://vercel.com">Vercel account</Link> — connect your GitHub repo and your app is live in seconds
          </li>
          <li>
            Create a <Link href="https://supabase.com">Supabase account</Link> — instant Postgres database with auth, storage, and APIs
          </li>
        </ol>
        <Tip>
          Pro tip: Tell Claude Code what you want to build and let it scaffold the project. Then iterate from there. It can create files, run commands, and fix errors for you.
        </Tip>
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
          <li>
            Go to <Link href="https://claude.ai">claude.ai</Link> and create an account
          </li>
          <li>
            Start a new conversation and tell Claude what you want to build
          </li>
          <li>
            Use <strong>Projects</strong> to give Claude persistent context about your work
          </li>
          <li>
            Try asking Claude to help you plan before you build — it&apos;s great at breaking things down
          </li>
        </ol>
        <Tip>
          Pro tip: Be specific about what you want. Instead of &quot;build me a website&quot;, try &quot;I need a landing page with a hero section, signup form, and FAQ — use Next.js and Tailwind.&quot;
        </Tip>
      </>
    ),
  },
  {
    value: "cursor",
    label: "Cursor / Windsurf",
    content: (
      <>
        <h3 className="font-heading text-2xl font-semibold mb-4">
          Getting Started with Cursor
        </h3>
        <ol className="space-y-3 list-decimal list-inside text-muted-foreground">
          <li>
            Download Cursor from <Link href="https://cursor.sh">cursor.sh</Link>
          </li>
          <li>Open a folder or create a new project</li>
          <li>
            Use <strong>Cmd/Ctrl+K</strong> to edit code inline with AI
          </li>
          <li>
            Use <strong>Cmd/Ctrl+L</strong> to chat with AI about your codebase
          </li>
          <li>
            Use <strong>Composer</strong> (Cmd/Ctrl+I) for multi-file edits and bigger changes
          </li>
        </ol>
        <Tip>
          Pro tip: Start by describing what you want to build in the Composer. Let it scaffold the project, then iterate from there. Windsurf works similarly if you prefer it.
        </Tip>
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
          <li>
            Sign up at <Link href="https://make.com">make.com</Link> (free tier is generous)
          </li>
          <li>
            Create a new <strong>Scenario</strong> — this is your workflow
          </li>
          <li>
            Add a trigger (what kicks it off — a form, a schedule, a webhook)
          </li>
          <li>
            Add an AI step (OpenAI, Claude, or HTTP module to call any AI API)
          </li>
          <li>
            Add an output (Slack message, email, Notion page, Google Sheet, etc.)
          </li>
        </ol>
        <Tip>
          Pro tip: Start with the <Link href="https://academy.make.com">Make Academy</Link> quickstart if you&apos;ve never used it. Takes 10 minutes.
        </Tip>
      </>
    ),
  },
];

const beforeYouArrive = {
  everyone: [
    "Bring your laptop, fully charged, charger too",
    "Create a free Claude account → claude.ai",
    "Think of one idea you might want to build",
  ],
  optional: [
    { label: "GitHub account", url: "https://github.com" },
    { label: "VS Code", url: "https://code.visualstudio.com" },
    { label: "Supabase account", url: "https://supabase.com" },
    { label: "Make account", url: "https://make.com" },
  ],
};

const Guides = () => {
  return (
    <section id="guides" className="bg-juice py-20">
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="font-heading text-4xl font-bold text-center mb-12">
          Getting Started
        </h2>

        <div className="rounded-xl border bg-white p-6 md:p-8 mb-10">
          <h3 className="font-heading text-2xl font-semibold mb-4">
            Before You Arrive
          </h3>
          <ul className="space-y-2 text-muted-foreground mb-6">
            {beforeYouArrive.everyone.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="text-primary font-bold">•</span>
                {item}
              </li>
            ))}
          </ul>
          <p className="text-sm font-medium text-muted-foreground mb-3">
            Optional — depends on your project:
          </p>
          <div className="flex flex-wrap gap-2">
            {beforeYouArrive.optional.map((item) => (
              <a
                key={item.label}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border px-3 py-1 text-sm text-primary hover:bg-primary/5 transition-colors"
              >
                {item.label} →
              </a>
            ))}
          </div>
        </div>

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
