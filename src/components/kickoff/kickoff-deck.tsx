"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import { Slide } from "./slide";
import { SlideTitle, SlideEyebrow } from "./slide-title";
import { OrangeSliceLogo } from "./orange-slice-logo";
import { Pill } from "./pill";
import { FlowNode } from "./flow-node";
import { StatCard } from "./stat-card";
import { ExampleSlideContent } from "./example-slide";
import { OverviewGrid } from "./overview-grid";

const TOTAL = 14;

export const KickoffDeck = () => {
  const [current, setCurrent] = useState(1);
  const [showOverview, setShowOverview] = useState(false);
  const scrolling = useRef(false);

  /** Navigate to slide n, clamped to valid range */
  const goTo = useCallback((n: number) => {
    const s = Math.max(1, Math.min(n, TOTAL));
    setCurrent(s);
    setShowOverview(false);
    scrolling.current = true;
    document
      .getElementById(`slide-${s}`)
      ?.scrollIntoView({ behavior: "smooth" });
    setTimeout(() => {
      scrolling.current = false;
    }, 800);
  }, []);

  /* Init from ?slide=N */
  useEffect(() => {
    const p = new URLSearchParams(window.location.search);
    const s = parseInt(p.get("slide") || "1", 10);
    if (s >= 1 && s <= TOTAL) {
      setCurrent(s);
      document.getElementById(`slide-${s}`)?.scrollIntoView();
    }
  }, []);

  /* Sync URL on slide change */
  useEffect(() => {
    const url = new URL(window.location.href);
    url.searchParams.set("slide", String(current));
    window.history.replaceState({}, "", url.toString());
  }, [current]);

  /* Keyboard nav */
  useEffect(() => {
    const handle = (e: KeyboardEvent) => {
      if (showOverview && e.key !== "Escape") return;
      switch (e.key) {
        case "ArrowRight":
        case " ":
        case "PageDown":
          e.preventDefault();
          goTo(current + 1);
          break;
        case "ArrowLeft":
        case "PageUp":
          e.preventDefault();
          goTo(current - 1);
          break;
        case "Home":
          e.preventDefault();
          goTo(1);
          break;
        case "End":
          e.preventDefault();
          goTo(TOTAL);
          break;
        case "Escape":
          e.preventDefault();
          setShowOverview((v) => !v);
          break;
      }
    };
    window.addEventListener("keydown", handle);
    return () => window.removeEventListener("keydown", handle);
  }, [current, showOverview, goTo]);

  /* Track visible slide via scroll */
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        if (scrolling.current) return;
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const n = parseInt(entry.target.id.replace("slide-", ""), 10);
            if (!isNaN(n)) setCurrent(n);
          }
        }
      },
      { threshold: 0.5 },
    );
    for (let i = 1; i <= TOTAL; i++) {
      const el = document.getElementById(`slide-${i}`);
      if (el) obs.observe(el);
    }
    return () => obs.disconnect();
  }, []);

  return (
    <div className="h-screen overflow-y-auto snap-y snap-mandatory">
      {showOverview && (
        <OverviewGrid
          current={current}
          onSelect={goTo}
          onClose={() => setShowOverview(false)}
        />
      )}

      {/* ——— SLIDE 1: Title ——— */}
      <Slide id="slide-1" number={1} total={TOTAL}>
        <div className="flex flex-1 flex-col items-center justify-center text-center">
          <SlideEyebrow>Neural Nectar Presents</SlideEyebrow>
          <OrangeSliceLogo className="my-[1.5vw] h-[8vw] w-[8vw]" />
          <h1 className="font-heading text-[5vw] font-bold leading-none">
            <span className="text-primary">The Big</span>{" "}
            <span className="text-foreground">Squeeze</span>
          </h1>
          <p className="mt-[1vw] font-heading text-[1.6vw] font-medium text-muted-foreground">
            One Day. Pure Juice.
          </p>
          <div className="mt-[2vw] flex items-center gap-[0.8vw] text-[1vw] text-muted-foreground">
            <span>April 11, 2026</span>
            <span className="text-primary">·</span>
            <span>AI Hackathon Kickoff</span>
          </div>
        </div>
      </Slide>

      {/* ——— SLIDE 2: It's a conversation ——— */}
      <Slide id="slide-2" number={2} total={TOTAL}>
        <SlideTitle className="text-[3.2vw] leading-tight">
          It&apos;s a conversation.
          <br />
          Not coding.
        </SlideTitle>
        <p className="mt-[0.5vw] text-[1.35vw] text-muted-foreground">
          And anyone can have a conversation.
        </p>
        <div className="mt-[1.5vw] grid flex-1 grid-cols-2 gap-[2vw]">
          {/* Left — search (muted) */}
          <div className="flex flex-col rounded-xl bg-white/40 p-[1.5vw] opacity-60">
            <p className="mb-[1vw] text-[0.9vw] font-semibold uppercase tracking-wider text-muted-foreground">
              Not this
            </p>
            <div className="flex items-center gap-[0.5vw] rounded-full border bg-white px-[1vw] py-[0.6vw]">
              <span className="text-[1.1vw] text-muted-foreground">🔍</span>
              <span className="text-[1vw] italic text-muted-foreground">
                how do I write a cold email
              </span>
            </div>
            <p className="mt-auto pt-[1vw] text-[0.95vw] text-muted-foreground">
              Type query → get answer
            </p>
          </div>
          {/* Right — conversation (accent) */}
          <div className="flex flex-col rounded-xl border-2 border-primary/30 bg-white/60 p-[1.5vw]">
            <p className="mb-[1vw] text-[0.9vw] font-semibold uppercase tracking-wider text-primary">
              But this
            </p>
            <div className="space-y-[0.4vw]">
              <div className="ml-auto w-4/5 rounded-2xl rounded-br-sm bg-primary/10 px-[0.7vw] py-[0.4vw] text-[0.95vw]">
                I need a cold email for a SaaS founder selling to mid-market…
              </div>
              <div className="w-4/5 rounded-2xl rounded-bl-sm border bg-white px-[0.7vw] py-[0.4vw] text-[0.95vw]">
                Here&apos;s a draft focusing on the pain point…
              </div>
              <div className="ml-auto w-4/5 rounded-2xl rounded-br-sm bg-primary/10 px-[0.7vw] py-[0.4vw] text-[0.95vw]">
                Shorter, more casual, add a P.S.
              </div>
              <div className="w-4/5 rounded-2xl rounded-bl-sm border bg-white px-[0.7vw] py-[0.4vw] text-[0.95vw]">
                Done — tighter version with a personal sign-off…
              </div>
            </div>
            <p className="mt-auto pt-[1vw] text-[0.95vw] font-medium text-primary">
              Give context → iterate → refine → ship
            </p>
          </div>
        </div>
        <p className="mt-[0.8vw] text-center text-[1vw] text-muted-foreground">
          Treat it like a smart collaborator who needs context.
        </p>
      </Slide>

      {/* ——— SLIDE 3: Models vs Surfaces ——— */}
      <Slide id="slide-3" number={3} total={TOTAL}>
        <SlideTitle>Models vs Surfaces</SlideTitle>
        <p className="mt-[0.3vw] text-[1.25vw] text-muted-foreground">
          The model is the brain. The surface is where you use it.
        </p>
        <div className="mt-[1.5vw] grid flex-1 grid-cols-2 gap-[3vw]">
          {/* Left — Foundation Models */}
          <div className="flex flex-col">
            <h3 className="mb-[1vw] font-heading text-[1.4vw] font-semibold">
              Foundation Models
            </h3>
            <div className="flex flex-col gap-[0.7vw]">
              {[
                { name: "Claude", company: "Anthropic" },
                { name: "GPT-4o", company: "OpenAI" },
                { name: "Gemini", company: "Google" },
              ].map((m) => (
                <div
                  key={m.name}
                  className="flex items-center gap-[1vw] rounded-xl bg-white/80 px-[1.5vw] py-[0.8vw] shadow-sm"
                >
                  <span className="font-heading text-[1.5vw] font-bold">
                    {m.name}
                  </span>
                  <span className="text-[1vw] text-muted-foreground">
                    {m.company}
                  </span>
                </div>
              ))}
            </div>
            <p className="mt-[1.2vw] text-[1vw] text-muted-foreground">
              The AI brains. Trained on massive data. General-purpose. You
              don&apos;t build these — you talk to them.
            </p>
          </div>
          {/* Right — Surface Categories */}
          <div className="flex flex-col">
            <h3 className="mb-[1vw] font-heading text-[1.4vw] font-semibold">
              Surfaces
            </h3>
            <div className="flex flex-col gap-[0.6vw]">
              {[
                { icon: "💬", name: "Chat", desc: "Talk to AI directly" },
                {
                  icon: "💻",
                  name: "Code Editors",
                  desc: "AI sees your codebase",
                },
                {
                  icon: "🎨",
                  name: "No-Code Builders",
                  desc: "Describe what you want, get an app",
                },
                { icon: "⚡", name: "Automation", desc: "Wire tools together" },
                {
                  icon: "🧩",
                  name: "Built-In",
                  desc: "AI already inside your apps",
                },
              ].map((s) => (
                <div
                  key={s.name}
                  className="flex items-center gap-[0.8vw] rounded-lg bg-white/60 px-[1.2vw] py-[0.6vw]"
                >
                  <span className="text-[1.4vw]">{s.icon}</span>
                  <span className="font-heading text-[1.1vw] font-semibold">
                    {s.name}
                  </span>
                  <span className="text-[0.95vw] text-muted-foreground">
                    — {s.desc}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Slide>

      {/* ——— SLIDE 4: Your Surface Options ——— */}
      <Slide id="slide-4" number={4} total={TOTAL}>
        <SlideTitle>Your Surface Options</SlideTitle>
        <div className="mt-[1vw] grid flex-1 grid-cols-4 gap-[1vw]">
          {[
            {
              icon: "💻",
              title: "Code Editors",
              desc: "AI sees your codebase",
              tools: [
                {
                  name: "Cursor",
                  detail: "AI-native editor",
                  price: "Free / $20/mo",
                },
                {
                  name: "Windsurf",
                  detail: "Another solid option",
                  price: "Free / $15/mo",
                },
                {
                  name: "VS Code",
                  detail: "With Copilot or extensions",
                  price: "Free",
                },
              ],
            },
            {
              icon: "🎨",
              title: "No-Code Builders",
              desc: "Describe what you want, get an app",
              tools: [
                {
                  name: "Lovable",
                  detail: "Very beginner-friendly",
                  price: "Free / $20/mo",
                },
                {
                  name: "Replit",
                  detail: "Online IDE with AI agent",
                  price: "Free / $15/mo",
                },
                {
                  name: "Antigravity",
                  detail: "Browser-based builder",
                  price: "Free beta",
                },
                {
                  name: "v0",
                  detail: "Vercel's UI generator",
                  price: "Free / $20/mo",
                },
              ],
            },
            {
              icon: "⚡",
              title: "Automation",
              desc: "Wire tools together visually",
              tools: [
                {
                  name: "Make",
                  detail: "Visual workflow builder",
                  price: "Free / $9/mo",
                },
                {
                  name: "Zapier",
                  detail: "Beginner-friendly",
                  price: "Free / $20/mo",
                },
                {
                  name: "n8n",
                  detail: "Open-source, powerful",
                  price: "Free (self-hosted)",
                },
              ],
            },
            {
              icon: "🧠",
              title: "Full-Service",
              desc: "AI does it all — writes, runs, fixes",
              tools: [
                {
                  name: "Claude App",
                  detail: "Chat + Projects + artifacts",
                  price: "Free / $20/mo Pro",
                },
                {
                  name: "Claude Code",
                  detail: "Arik's daily driver",
                  price: "$20/mo or $100/mo",
                },
                {
                  name: "Codex",
                  detail: "OpenAI's cloud agent",
                  price: "ChatGPT Pro",
                },
              ],
            },
          ].map((cat) => (
            <div key={cat.title} className="flex flex-col">
              <div className="mb-[0.6vw] text-center">
                <span className="text-[1.6vw]">{cat.icon}</span>
                <h3 className="font-heading text-[1.15vw] font-semibold">
                  {cat.title}
                </h3>
                <p className="text-[0.8vw] text-muted-foreground">{cat.desc}</p>
              </div>
              <div className="flex flex-1 flex-col gap-[0.5vw]">
                {cat.tools.map((tool) => (
                  <div
                    key={tool.name}
                    className="flex flex-col rounded-xl border border-border/50 bg-white p-[0.7vw]"
                  >
                    <h4 className="font-heading text-[1vw] font-semibold">
                      {tool.name}
                    </h4>
                    <p className="text-[0.8vw] text-muted-foreground">
                      {tool.detail}
                    </p>
                    <p className="mt-auto pt-[0.2vw] text-[0.75vw] font-medium text-primary">
                      {tool.price}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <p className="mt-[0.5vw] text-center text-[0.9vw] text-muted-foreground">
          Don&apos;t overthink it. Arik can help you pick during setup. Full
          list at thebigsqueeze.vercel.app
        </p>
      </Slide>

      {/* ——— SLIDE 5: Giving AI More Context ——— */}
      <Slide id="slide-5" number={5} total={TOTAL}>
        <SlideTitle>Giving AI More Context</SlideTitle>
        <p className="mt-[0.3vw] text-[1.1vw] text-muted-foreground">
          You can organize instructions, reference material, and plugins at
          different levels. They&apos;re just markdown files and config —
          nothing magic.
        </p>
        <div className="mt-[1.5vw] grid flex-1 grid-cols-3 gap-[1.5vw]">
          {[
            {
              icon: "👤",
              title: "User-level",
              what: "Rules that follow you everywhere. Your defaults.",
              where: "~/.claude/CLAUDE.md, custom instructions",
              example: '"Always use TypeScript. Prefer functional style."',
            },
            {
              icon: "📁",
              title: "Project-level",
              what: "Instructions scoped to a specific codebase. Checked into the repo.",
              where: "CLAUDE.md at the project root, project-specific skills",
              example:
                '"This app uses Supabase. Auth is handled by middleware."',
            },
            {
              icon: "🔌",
              title: "Plugins / Integrations",
              what: "Pre-built tools you can pull in. Connect external services.",
              where: "MCP servers, slash commands, community plugins",
              example: "Supabase MCP, GitHub integration, browser tools",
            },
          ].map((col) => (
            <div
              key={col.title}
              className="flex flex-col rounded-xl bg-white/60 p-[1.2vw]"
            >
              <span className="text-[1.8vw]">{col.icon}</span>
              <h3 className="mt-[0.5vw] font-heading text-[1.2vw] font-semibold">
                {col.title}
              </h3>
              <p className="mt-[0.4vw] text-[0.95vw] text-muted-foreground">
                {col.what}
              </p>
              <p className="mt-[0.6vw] text-[0.9vw]">
                <span className="font-semibold">In Claude Code:</span>{" "}
                <span className="font-mono text-muted-foreground">
                  {col.where}
                </span>
              </p>
              <p className="mt-auto pt-[0.6vw] text-[0.9vw] italic text-primary/80">
                {col.example}
              </p>
            </div>
          ))}
        </div>
        {/* Arik's take callout */}
        <div className="mt-[1vw] rounded-lg bg-primary/10 px-[1.5vw] py-[0.7vw]">
          <p className="text-[0.95vw] text-foreground">
            <span className="font-semibold">Arik&apos;s take:</span> &quot;I
            keep most of mine at the project level, even if I have to remake
            them across repos. I like being able to see exactly what
            instructions are active. Less magic, more control.&quot;
          </p>
        </div>
      </Slide>

      {/* ——— SLIDE 6: MCP ——— */}
      <Slide id="slide-6" number={6} total={TOTAL}>
        <SlideTitle>MCP: Model Context Protocol</SlideTitle>
        <p className="mt-[0.3vw] text-[1.1vw] text-muted-foreground">
          AI models can&apos;t do everything on their own — they can only read
          and write text. MCP is an open standard that lets you plug external
          tools and services into a model so it can actually take actions. One
          protocol, any tool.
        </p>
        {/* Hub-and-spoke — absolute positioned */}
        <div className="relative mx-[4vw] flex-1">
          {/* SVG connector lines */}
          <svg
            className="absolute inset-0 h-full w-full"
            style={{ overflow: "visible" }}
          >
            {[
              { x: "18%", y: "22%" },
              { x: "50%", y: "12%" },
              { x: "82%", y: "22%" },
              { x: "82%", y: "78%" },
              { x: "50%", y: "88%" },
              { x: "18%", y: "78%" },
            ].map((pos, i) => (
              <line
                key={i}
                x1="50%"
                y1="50%"
                x2={pos.x}
                y2={pos.y}
                stroke="currentColor"
                strokeWidth="3.5"
                strokeOpacity="0.5"
                className="text-primary"
              />
            ))}
          </svg>
          {/* Center node */}
          <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
            <FlowNode
              variant="primary"
              className="px-[1.5vw] py-[0.7vw] text-[1.2vw]"
            >
              🍊 Claude
            </FlowNode>
          </div>
          {/* Surrounding nodes */}
          {[
            { label: "Google Drive", x: "18%", y: "22%" },
            { label: "GitHub", x: "50%", y: "12%" },
            { label: "Notion", x: "82%", y: "22%" },
            { label: "APIs", x: "82%", y: "78%" },
            { label: "Databases", x: "50%", y: "88%" },
            { label: "Slack", x: "18%", y: "78%" },
          ].map((node) => (
            <div
              key={node.label}
              className="absolute z-10 -translate-x-1/2 -translate-y-1/2"
              style={{ left: node.x, top: node.y }}
            >
              <FlowNode>{node.label}</FlowNode>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-between">
          <Pill variant="orange" className="text-[0.95vw]">
            Think USB-C for AI — one plug, works everywhere.
          </Pill>
          <span className="text-[0.9vw] text-muted-foreground">
            Build your own MCP server → hackathon project idea 🔴
          </span>
        </div>
      </Slide>

      {/* ——— SLIDE 7: Prompting Sandwich ——— */}
      <Slide id="slide-7" number={7} total={TOTAL}>
        <SlideTitle>How Prompting Works</SlideTitle>
        <p className="mt-[0.3vw] text-[1.15vw] text-muted-foreground">
          The sandwich model.
        </p>
        <div className="mt-[1vw] grid flex-1 grid-cols-2 gap-[2.5vw]">
          {/* Left — sandwich diagram */}
          <div className="flex flex-col justify-center gap-[0.3vw]">
            {[
              {
                emoji: "🍞",
                label: "SYSTEM PROMPT",
                note: "← Set once. Cached.",
                bg: "bg-amber-200/80",
                rounded: "rounded-t-xl",
              },
              {
                emoji: "📎",
                label: "CONTEXT",
                note: "← Retrieved per request",
                bg: "bg-sky-100/80",
                rounded: "",
              },
              {
                emoji: "🥬",
                label: "USER PROMPT",
                note: "← What you typed",
                bg: "bg-green-100/80",
                rounded: "",
              },
              {
                emoji: "🍞",
                label: "RESPONSE",
                note: "← What AI sends back",
                bg: "bg-amber-200/80",
                rounded: "rounded-b-xl",
              },
            ].map((layer) => (
              <div
                key={layer.label}
                className={`${layer.bg} ${layer.rounded} px-[1.2vw] py-[0.8vw]`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-[1vw] font-semibold">
                    {layer.emoji} {layer.label}
                  </span>
                  <span className="text-[0.85vw] text-muted-foreground">
                    {layer.note}
                  </span>
                </div>
              </div>
            ))}
          </div>
          {/* Right — explainers */}
          <div className="flex flex-col justify-center gap-[1.2vw]">
            <div>
              <h4 className="font-heading text-[1.05vw] font-semibold">
                System prompt (cached)
              </h4>
              <p className="text-[0.95vw] text-muted-foreground">
                Personality, rules, instructions. Set once, reused every call.
              </p>
              <p className="mt-[0.3vw] font-mono text-[0.9vw] text-primary/80">
                &quot;You are a helpful email assistant that writes in
                Arik&apos;s voice.&quot;
              </p>
            </div>
            <div>
              <h4 className="font-heading text-[1.05vw] font-semibold">
                Context (dynamic)
              </h4>
              <p className="text-[0.95vw] text-muted-foreground">
                Fetched per request — recent emails, docs, database records —
                injected before the model sees the user prompt.
              </p>
            </div>
            <div>
              <h4 className="font-heading text-[1.05vw] font-semibold">
                User prompt
              </h4>
              <p className="text-[0.95vw] text-muted-foreground">
                What the user actually typed.
              </p>
            </div>
            <div>
              <h4 className="font-heading text-[1.05vw] font-semibold">
                Response
              </h4>
              <p className="text-[0.95vw] text-muted-foreground">
                What AI sends back.
              </p>
            </div>
          </div>
        </div>
        <p className="mt-[0.5vw] text-center text-[0.9vw] text-muted-foreground">
          Caching the static parts means you don&apos;t re-pay for them every
          call. Dynamic context is where the magic happens.
        </p>
      </Slide>

      {/* ——— SLIDE 8: Context Windows & Tokens ——— */}
      <Slide id="slide-8" number={8} total={TOTAL}>
        <SlideTitle>Context Windows &amp; Tokens</SlideTitle>
        <div className="mt-[1vw] grid flex-1 grid-cols-2 gap-[2.5vw]">
          {/* Left — glass graphic */}
          <div className="flex items-center justify-center pl-[4vw]">
            <div className="relative flex h-[28vw] w-[16vw] flex-col overflow-hidden rounded-b-[2vw] rounded-t-lg border-2 border-primary/30 bg-white">
              {/* Empty top — above max */}
              <div className="relative flex-[5]">
                <span className="absolute left-[0.8vw] top-[0.2vw] text-[0.8vw] text-muted-foreground">
                  Max window
                </span>
              </div>
              {/* Context rot zone */}
              <div className="relative flex-[25] border-t-2 border-dashed border-primary/30 bg-primary/5">
                <span className="absolute left-[0.8vw] top-[0.3vw] text-[0.9vw] font-medium">
                  🥴 Context rot
                </span>
                <span className="absolute right-[0.8vw] top-[0.3vw] text-[0.75vw] text-muted-foreground">
                  70-100% full
                </span>
              </div>
              {/* Drifting zone */}
              <div className="relative flex-[20] border-t-2 border-dashed border-primary/30 bg-primary/15">
                <span className="absolute left-[0.8vw] top-[0.3vw] text-[0.9vw] font-medium">
                  ⚠️ Starting to drift
                </span>
                <span className="absolute right-[0.8vw] top-[0.3vw] text-[0.75vw] text-muted-foreground">
                  50-70% full
                </span>
              </div>
              {/* Sharp zone — filled with juice */}
              <div className="relative flex-[50] border-t-2 border-dashed border-primary/30 bg-primary/30">
                <span className="absolute left-[0.8vw] top-[0.3vw] text-[0.9vw] font-medium">
                  ✅ Sharp &amp; reliable
                </span>
                <span className="absolute right-[0.8vw] top-[0.3vw] text-[0.75vw] text-muted-foreground">
                  0-50% full
                </span>
                <span className="absolute bottom-[0.5vw] left-1/2 -translate-x-1/2 text-[0.8vw] font-medium text-primary">
                  🧃 Stay in this zone
                </span>
              </div>
            </div>
          </div>
          {/* Right — definitions + model table */}
          <div className="flex flex-col justify-center gap-[1vw]">
            <div>
              <h4 className="font-heading text-[1.05vw] font-semibold">
                Token
              </h4>
              <p className="text-[0.95vw] text-muted-foreground">
                ~¾ of a word (~3-4 characters). The AI&apos;s unit of currency.
              </p>
            </div>
            <div>
              <h4 className="font-heading text-[1.05vw] font-semibold">
                Context window
              </h4>
              <p className="text-[0.95vw] text-muted-foreground">
                Short-term memory. Everything in + out must fit.
              </p>
            </div>
            {/* Model comparison table */}
            <div className="rounded-lg bg-white/80 p-[0.8vw]">
              <table className="w-full text-[0.9vw]">
                <thead>
                  <tr className="border-b text-left font-heading font-semibold">
                    <th className="pb-[0.3vw]">Model</th>
                    <th className="pb-[0.3vw]">Window</th>
                    <th className="pb-[0.3vw]">That&apos;s roughly…</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  <tr className="border-b border-border/50">
                    <td className="py-[0.3vw]">Haiku 4.5</td>
                    <td>200k</td>
                    <td>~2 full novels</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-[0.3vw]">Sonnet 4.6</td>
                    <td>200k</td>
                    <td>~2 full novels</td>
                  </tr>
                  <tr>
                    <td className="py-[0.3vw] font-medium text-foreground">
                      Opus 4.6
                    </td>
                    <td className="font-medium text-foreground">1M</td>
                    <td>~the entire Bible, 3x over</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div>
              <h4 className="font-heading text-[1.05vw] font-semibold">
                Context rot
              </h4>
              <p className="text-[0.95vw] text-muted-foreground">
                Quality degrades well before the max. Stay under ~50-70%. Start
                a fresh chat when things get weird.
              </p>
            </div>
            <div>
              <h4 className="font-heading text-[1.05vw] font-semibold">
                Pricing
              </h4>
              <p className="text-[0.95vw] text-muted-foreground">
                API = per token in/out. Chat apps (Claude Pro, ChatGPT Plus) =
                flat monthly fee.
              </p>
            </div>
          </div>
        </div>
      </Slide>

      {/* ——— SLIDE 9: Prompt Tips ——— */}
      <Slide id="slide-9" number={9} total={TOTAL}>
        <SlideTitle>Prompt Tips: The 2-Minute Version</SlideTitle>
        <p className="mt-[0.5vw] rounded-lg bg-primary/10 px-[1.2vw] py-[0.5vw] text-[1vw] font-medium text-primary">
          AI is really good at understanding examples and patterns. Use that.
        </p>
        <div className="mt-[1.2vw] grid flex-1 grid-cols-3 gap-[1vw] content-start">
          <StatCard
            number={1}
            title="Be specific"
            description="Narrow the scope. Give it a role, audience, and goal."
            bad="Write me an email"
            good="Write a cold email for a SaaS founder selling to mid-market HR teams"
          />
          <StatCard
            number={2}
            title="Give examples"
            description="Show what 'good' looks like. This is the biggest unlock."
            bad="Make it sound professional"
            good="Here's an email I liked: [paste]. Match this tone."
          />
          <StatCard
            number={3}
            title="Say what NOT to do"
            description="Constraints are just as useful as instructions."
            bad="Write a bio for me"
            good="Write a bio. No buzzwords, no 'passionate', under 50 words."
          />
          <StatCard
            number={4}
            title="Ask for structure"
            description="Tell it the format you want back."
            bad="Summarize this article"
            good="Summarize this as 3 bullets, a one-line takeaway, and a tweet"
          />
          <StatCard
            number={5}
            title="When stuck, reset"
            description="New chat, smaller problem. Context rot is real."
            bad="(keeps going in a 200-message thread)"
            good="Start fresh: 'I need help with just the auth middleware.'"
          />
          <StatCard
            number={6}
            title="Show, don't tell"
            description="Paste an example of the output you want."
            bad="Make a nice table"
            good="Format it like this: | Name | Role | Status |"
          />
        </div>
      </Slide>

      {/* ——— SLIDE 10: Pick Your Path ——— */}
      <Slide id="slide-10" number={10} total={TOTAL}>
        <SlideTitle>Pick Your Path</SlideTitle>
        <p className="mt-[0.3vw] text-[1.15vw] text-muted-foreground">
          The site has step-by-step setup for each one.
        </p>
        <div className="mt-[1.5vw] grid flex-1 grid-cols-2 gap-[1vw] content-start">
          {[
            {
              icon: "🛠️",
              title: "Full Stack",
              tools: "VS Code + Claude Code + GitHub + Vercel + Supabase",
              note: "The recommended web app stack. What this site is built with.",
            },
            {
              icon: "💬",
              title: "Chat AI",
              tools: "Claude (or ChatGPT)",
              note: "No code. Just conversation. Start here if you're new.",
            },
            {
              icon: "💻",
              title: "Cursor / Windsurf",
              tools: "AI-native code editors",
              note: "If you prefer a different editor than VS Code.",
            },
            {
              icon: "⚡",
              title: "Automation",
              tools: "Make, Zapier, n8n",
              note: "Wire tools together visually. No code needed.",
            },
          ].map((path) => (
            <div
              key={path.title}
              className="flex flex-col rounded-xl bg-white/80 p-[1.2vw] shadow-sm"
            >
              <div className="flex items-center gap-[0.5vw]">
                <span className="text-[1.5vw]">{path.icon}</span>
                <h3 className="font-heading text-[1.2vw] font-semibold">
                  {path.title}
                </h3>
              </div>
              <p className="mt-[0.4vw] text-[0.9vw] font-mono text-muted-foreground">
                {path.tools}
              </p>
              <p className="mt-auto pt-[0.5vw] text-[0.95vw] text-muted-foreground">
                {path.note}
              </p>
            </div>
          ))}
        </div>
        {/* Callout to site */}
        <div className="mt-[1vw] rounded-lg bg-primary/10 px-[1.5vw] py-[0.7vw] text-center">
          <p className="text-[1.1vw]">
            <a
              href="https://thebigsqueeze.vercel.app/#guides"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-primary underline underline-offset-2"
            >
              thebigsqueeze.vercel.app → Getting Started
            </a>
            <span className="text-muted-foreground">
              {" "}— setup instructions, links, and pro tips for each path.
            </span>
          </p>
        </div>
        <p className="mt-[0.5vw] text-center text-[0.9vw] text-muted-foreground">
          Arik can help you pick during setup. Don&apos;t install everything —
          just pick one path.
        </p>
      </Slide>

      {/* ——— SLIDE 11: Example — Email Drafter ——— */}
      <Slide id="slide-11" number={11} total={TOTAL}>
        <SlideTitle>Example: AI Email Drafter</SlideTitle>
        <ExampleSlideContent
          visual={
            <div className="w-full rounded-xl border bg-white shadow-sm">
              <div className="flex items-center gap-[0.4vw] border-b px-[0.8vw] py-[0.4vw]">
                <div className="h-[0.6vw] w-[0.6vw] rounded-full bg-red-400" />
                <div className="h-[0.6vw] w-[0.6vw] rounded-full bg-yellow-400" />
                <div className="h-[0.6vw] w-[0.6vw] rounded-full bg-green-400" />
                <span className="ml-[0.5vw] text-[0.8vw] text-muted-foreground">
                  Claude Projects
                </span>
              </div>
              <div className="space-y-[0.5vw] p-[1vw]">
                <div className="rounded bg-muted px-[0.7vw] py-[0.4vw] font-mono text-[0.85vw]">
                  System: You are Arik&apos;s email assistant. Match his tone:
                  friendly, direct, no fluff.
                </div>
                <div className="ml-auto w-3/4 rounded-xl bg-primary/10 px-[0.7vw] py-[0.4vw] text-[0.9vw]">
                  Write a follow-up to the venue about pricing
                </div>
                <div className="w-3/4 rounded-xl border bg-white px-[0.7vw] py-[0.4vw] text-[0.9vw]">
                  Hey Sarah, just following up on the space rental quote…
                </div>
              </div>
            </div>
          }
          difficulty={{
            label: "Starter",
            emoji: "🟢",
            color: "bg-lime/15 text-lime",
          }}
          time="~15 minutes"
          tools="Claude"
          whatYouBuild="A reusable prompt template for emails you write all the time — work replies, cold outreach, event RSVPs."
          whyItsGreat="Zero code. Instant payoff. You'll use it tomorrow."
        />
      </Slide>

      {/* ——— SLIDE 12: Example — Content Pipeline ——— */}
      <Slide id="slide-12" number={12} total={TOTAL}>
        <SlideTitle>Example: Content Pipeline</SlideTitle>
        <ExampleSlideContent
          visual={
            <div className="flex w-full flex-col items-center gap-[0.6vw]">
              <FlowNode className="w-[14vw]">URL / Transcript</FlowNode>
              <svg
                className="h-[1.5vw] text-primary"
                viewBox="0 0 2 20"
                fill="none"
              >
                <line
                  x1="1"
                  y1="0"
                  x2="1"
                  y2="20"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              </svg>
              <FlowNode variant="primary" className="w-[14vw]">
                AI Processing
              </FlowNode>
              <svg
                className="h-[1.5vw] w-[14vw] text-primary"
                viewBox="0 0 100 20"
                fill="none"
              >
                <line
                  x1="50"
                  y1="0"
                  x2="10"
                  y2="20"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <line
                  x1="50"
                  y1="0"
                  x2="50"
                  y2="20"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <line
                  x1="50"
                  y1="0"
                  x2="90"
                  y2="20"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
              </svg>
              <div className="flex gap-[0.8vw]">
                <FlowNode>Blog Post</FlowNode>
                <FlowNode>Tweet Thread</FlowNode>
                <FlowNode>Summary</FlowNode>
              </div>
            </div>
          }
          difficulty={{
            label: "Intermediate",
            emoji: "🟡",
            color: "bg-amber-100 text-amber-600",
          }}
          time="2–3 hours"
          tools="Make + Claude, or Claude Projects"
          whatYouBuild="Input a URL or transcript, output a formatted blog post, tweet thread, or summary."
          whyItsGreat="Shows the power of chaining AI with other tools."
        />
      </Slide>

      {/* ——— SLIDE 13: Example — Full App ——— */}
      <Slide id="slide-13" number={13} total={TOTAL}>
        <SlideTitle>Example: Full App with Claude Code</SlideTitle>
        <ExampleSlideContent
          visual={
            <div className="w-full overflow-hidden rounded-xl border border-white/10 bg-[#1e1e1e] shadow-sm">
              <div className="flex items-center gap-[0.4vw] border-b border-white/10 px-[0.8vw] py-[0.4vw]">
                <div className="h-[0.6vw] w-[0.6vw] rounded-full bg-red-400" />
                <div className="h-[0.6vw] w-[0.6vw] rounded-full bg-yellow-400" />
                <div className="h-[0.6vw] w-[0.6vw] rounded-full bg-green-400" />
                <span className="ml-[0.5vw] text-[0.8vw] text-white/50">
                  VS Code — timer-app
                </span>
              </div>
              <div className="grid grid-cols-2 divide-x divide-white/10">
                <div className="p-[0.7vw] font-mono text-[0.8vw] leading-relaxed text-green-400">
                  <div className="text-white/30">
                    {"// Generated by Claude Code"}
                  </div>
                  <div>
                    <span className="text-purple-400">const</span> Timer = ()
                    =&gt; {"{"}
                  </div>
                  <div className="pl-[0.8vw]">
                    <span className="text-sky-400">const</span> [secs, setSecs]
                    = ...
                  </div>
                  <div className="pl-[0.8vw]">
                    <span className="text-sky-400">return</span> (
                  </div>
                  <div className="pl-[1.5vw] text-orange-300">
                    {"<Timer.Display />"}
                  </div>
                  <div className="pl-[0.8vw]">)</div>
                  <div>{"}"}</div>
                </div>
                <div className="space-y-[0.4vw] bg-[#252526] p-[0.7vw]">
                  <div className="rounded bg-white/10 px-[0.5vw] py-[0.3vw] text-[0.8vw] text-white/70">
                    Build me a timer app with start, stop, reset
                  </div>
                  <div className="rounded bg-primary/20 px-[0.5vw] py-[0.3vw] text-[0.8vw] text-primary">
                    I&apos;ll create a React timer component with those
                    controls…
                  </div>
                </div>
              </div>
            </div>
          }
          difficulty={{
            label: "Ambitious",
            emoji: "🔴",
            color: "bg-primary/15 text-primary",
          }}
          time="4+ hours"
          tools="VS Code + Claude Code"
          whatYouBuild="A working web app, built entirely through conversation."
          whyItsGreat="Shows how far AI-assisted dev has come. Your ceiling just moved."
        />
      </Slide>

      {/* ——— SLIDE 14: Go Build ——— */}
      <Slide id="slide-14" number={14} total={TOTAL}>
        <div className="flex flex-1 flex-col items-center justify-center text-center">
          <h1 className="font-heading text-[4vw] font-bold text-foreground">
            The juice is in the doing.
          </h1>
          <div className="mt-[2.5vw] grid grid-cols-3 gap-[3vw] text-center">
            <div>
              <span className="text-[1.8vw]">🗓️</span>
              <h3 className="mt-[0.5vw] font-heading text-[1.2vw] font-semibold">
                Schedule
              </h3>
              <p className="text-[1vw] text-muted-foreground">Check the site</p>
            </div>
            <div>
              <span className="text-[1.8vw]">🛠️</span>
              <h3 className="mt-[0.5vw] font-heading text-[1.2vw] font-semibold">
                Tools &amp; Resources
              </h3>
              <p className="text-[1vw] text-primary">
                thebigsqueeze.vercel.app
              </p>
            </div>
            <div>
              <span className="text-[1.8vw]">🎤</span>
              <h3 className="mt-[0.5vw] font-heading text-[1.2vw] font-semibold">
                5-min Demos at 4pm
              </h3>
              <p className="text-[1vw] text-muted-foreground">
                Working &gt; perfect
              </p>
            </div>
          </div>
          <OrangeSliceLogo className="mt-[2.5vw] h-[6vw] w-[6vw]" />
          <p className="mt-[1vw] font-heading text-[1.4vw] font-medium text-muted-foreground">
            One Day. Pure Juice.
          </p>
          <p className="mt-[0.5vw] text-[0.95vw] text-muted-foreground">
            Unfinished is totally fine.
          </p>
        </div>
      </Slide>
    </div>
  );
};
