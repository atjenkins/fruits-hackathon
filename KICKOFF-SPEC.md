# Kickoff Deck Spec

Edit this file, then hand it back. I'll rebuild the slides to match.

For each slide: edit the copy directly, add notes in `> blockquotes`, or delete things you don't want. If a layout isn't working, describe what you want instead.

---

## Slide overview

1. **The Big Squeeze** — Title card. Logo, name, date.
2. **It's a conversation. Not coding.** — Reframe AI as collaboration, not programming.
3. **Models vs Surfaces** — Left: the AI brains (Claude, GPT-4o, Gemini). Right: the 5 surface categories.
4. **Your Surface Options** — Each surface broken out with specific tools + what it's good for.
5. **Skills, Commands & Plugins** — Three flavors of "give AI more tools."
6. **MCP: Model Context Protocol** — Hub-and-spoke: one standard to connect everything.
7. **How Prompting Works** — The sandwich: system prompt, context, user prompt, response.
8. **Context Windows & Tokens** — The glass analogy: how much fits, when quality drops.
9. **Prompt Tips: The 2-Minute Version** — Six practical tips in a grid.
10. **Recommended App Stacks** — Three paths: web, mobile, no-code.
11. **Example: AI Email Drafter** — Starter project. Zero code, instant payoff.
12. **Example: Content Pipeline** — Intermediate project. Chaining AI with other tools.
13. **Example: Full App with Claude Code** — Ambitious project. Build an app through conversation.
14. **The juice is in the doing.** — Send-off. Schedule, resources, demos at 4pm.

---

## Deck-wide notes

- **Tone:** Fun, chill, educational. Not corporate. You're talking to friends who are excited but maybe nervous.
- **Audience:** Mixed skill levels. Some code daily, some have never opened a terminal. The deck needs to land for both.
- **Flow:** Start with mindset (slides 1-2), build vocabulary (3-6), teach mechanics (7-9), give options (10), show examples (11-13), send them off (14).
- **Visual system:** Cream background, orange accent, Fredoka headings, Geist body. Every visual is code — no images.
- **Anthropic-forward:** This presentation leans on the Anthropic ecosystem (Claude, Claude Code, Claude Projects) for examples and guidance. Alternatives are mentioned and viable, but focusing on one system lets us give concrete, specific advice instead of hedging across five platforms. Call this out honestly — "I use this daily, so I can help you with it today."

### Sizing & scaling

Slides are designed at a **1920x1080** fixed canvas, then CSS-scaled to fit whatever viewport they're on. This means:
- Content stays proportional on half a monitor, full screen, or a 65" TV
- All text sizes are "presentation-sized" — readable from across a room
- Rough text scale: headlines ~60-80px, subheads ~32-40px, body ~24-28px, small labels ~18-20px
- No text smaller than ~16px equivalent at 1080p

---

## Slide 1 — Title

**Layout:** Everything centered vertically and horizontally. This is the screen people see while settling in.

| Element | Copy |
|---------|------|
| Eyebrow | Neural Nectar Presents |
| Logo | Large orange slice (matches hero on main site) |
| Headline | **The Big** Squeeze |
| Tagline | One Day. Pure Juice. |
| Footer | April 11, 2026 · AI Hackathon Kickoff |

> The headline splits "The Big" (orange) and "Squeeze" (dark) on the same line. Should this be two lines like the main site hero instead?

---

## Slide 2 — It's a conversation, not code

**Layout:** Big headline top-left. Two-column comparison below filling the rest of the slide.

| Element | Copy |
|---------|------|
| Headline | It's a conversation. Not coding. |
| Sub-headline | And anyone can have a conversation. |

**Left column (muted, de-emphasized):**
- Label: "Not this"
- Visual: Fake Google search bar with "how do I write a cold email" typed in
- Caption: Type query → get answer

**Right column (orange accent, emphasized):**
- Label: "But this"
- Visual: A chat thread showing iteration:
  - User: "I need a cold email for a SaaS founder selling to mid-market..."
  - AI: "Here's a draft focusing on the pain point..."
  - User: "Shorter, more casual, add a P.S."
  - AI: "Done — tighter version with a personal sign-off..."
- Caption: Give context → iterate → refine → ship

**Footer (centered):** Treat it like a smart collaborator who needs context.

---

## Slide 3 — Models vs Surfaces

**Layout:** Headline + subhead at top. Two-column split below.

| Element | Copy |
|---------|------|
| Headline | Models vs Surfaces |
| Sub-headline | The model is the brain. The surface is where you use it. |

**Left column — Foundation Models:**
Three stacked cards:

| Model | Company |
|-------|---------|
| Claude | Anthropic |
| GPT-4o | OpenAI |
| Gemini | Google |

Caption below: The AI brains. Trained on massive data. General-purpose. You don't build these — you talk to them.

**Right column — Surface Categories:**
Five rows, each with icon + name + one-liner:

| Icon | Category | One-liner |
|------|----------|-----------|
| Chat | Chat | Talk to AI directly |
| Code | Code Editors | AI sees your codebase |
| Art | No-Code Builders | Describe what you want, get an app |
| Bolt | Automation | Wire tools together |
| Puzzle | Built-In | AI already inside your apps |

**Footer:** Same model, different surface. Claude is Arik's daily driver.

---

## Slide 4 — Your Surface Options

**Layout:** Headline at top. Five rows filling the slide — each surface category with its tools and what it's best for.

| Element | Copy |
|---------|------|
| Headline | Your Surface Options |

**Five rows:**

| Category | Tools | Best for |
|----------|-------|----------|
| Chat | Claude, ChatGPT, Gemini | Writing, brainstorming, research |
| Code Editors | Claude Code, Cursor, Windsurf, VS Code | Building apps with code |
| No-Code Builders | Lovable, Replit, Antigravity, v0 | Building apps without code |
| Automation | Make, Zapier, n8n | Connecting tools and workflows |
| Built-In | Notion AI, Cowork, OpenClaw | Enhancing apps you already use |

**Footer:** Don't overthink it. Arik can help you pick during setup.

---

## Slide 5 — Giving AI More Context

**Layout:** Headline + intro at top. Three columns showing the spectrum from personal to shared. Arik's preference callout at bottom.

| Element | Copy |
|---------|------|
| Headline | Giving AI More Context |
| Intro | You can organize instructions, reference material, and plugins at different levels. They're just markdown files and config — nothing magic. |

**Column 1 — User-level (person icon)**
- What it is: Rules that follow you everywhere. Your defaults.
- In Claude Code: `~/.claude/CLAUDE.md`, custom instructions
- Example: "Always use TypeScript. Prefer functional style."

**Column 2 — Project-level (folder icon)**
- What it is: Instructions scoped to a specific codebase or project. Checked into the repo.
- In Claude Code: `CLAUDE.md` at the project root, project-specific skills
- Example: "This app uses Supabase. Auth is handled by middleware."

**Column 3 — Plugins / Integrations (plug icon)**
- What it is: Pre-built tools you can pull in. Connect external services.
- In Claude Code: MCP servers, slash commands, community plugins
- Example: Supabase MCP, GitHub integration, browser tools

**Arik's take (callout box at bottom):**
"I keep most of mine at the project level, even if I have to remake them across repos. I like being able to see exactly what instructions are active. Less magic, more control."

**Footer:** More context = more useful. Start simple, add as you go.

---

## Slide 6 — MCP: Model Context Protocol

**Layout:** Headline + sub at top. Hub-and-spoke diagram centered. Pills and notes at bottom.

| Element | Copy |
|---------|------|
| Headline | MCP: Model Context Protocol |
| Sub-headline | The new standard for giving AI hands. |
| Explainer | AI models can't do things on their own — they can only read and write text. MCP is an open standard that lets you plug external tools and services into a model so it can actually take actions: read your Google Drive, create GitHub issues, query a database. One protocol, any tool. |

**Diagram:** Hub-and-spoke. Claude node at dead center. Six service nodes arranged in a circle around it. Thick orange spoke lines connecting each node to the center.

> IMPLEMENTATION NOTE: Absolute-position everything in a fixed container. Do NOT use flexbox for the node layout — it causes the spokes and nodes to misalign. Each node gets a hardcoded x/y position. SVG lines connect center to each node's position. Spoke lines should be thick (~3-4px) and use the primary orange color at decent opacity, not the faint 30% that's there now.

Nodes (clockwise from top-left):
- Google Drive (top-left)
- GitHub (top-center)
- Notion (top-right)
- APIs (bottom-right)
- Databases (bottom-center)
- Slack (bottom-left)

**Bottom-left pill:** Think USB-C for AI — one plug, works everywhere.

**Bottom-right note:** Build your own MCP server → hackathon project idea

---

## Slide 7 — How Prompting Works (The Sandwich)

**Layout:** Headline + sub at top. Two-column split filling the middle. Footer centered.

| Element | Copy |
|---------|------|
| Headline | How Prompting Works |
| Sub-headline | The sandwich model. |

**Left column — Sandwich stack diagram:**

| Layer | Label | Annotation |
|-------|-------|------------|
| Bread (amber) | SYSTEM PROMPT | ← Set once. Cached. |
| Blue | CONTEXT | ← Retrieved per request |
| Green | USER PROMPT | ← What you typed |
| Bread (amber) | RESPONSE | ← What AI sends back |

**Right column — Explainers:**

**System prompt (cached)**
Personality, rules, instructions. Set once, reused every call.
_"You are a helpful email assistant that writes in Arik's voice."_

**Context (dynamic)**
Fetched per request — recent emails, docs, database records — injected before the model sees the user prompt.

**User prompt**
What the user actually typed.

**Response**
What AI sends back.

**Footer:** Caching the static parts means you don't re-pay for them every call. Dynamic context is where the magic happens.

---

## Slide 8 — Context Windows & Tokens

**Layout:** Headline top-left. Two-column split below.

| Element | Copy |
|---------|------|
| Headline | Context Windows & Tokens |

**Left column — Glass graphic:**
A tall glass shape filled with orange juice at varying opacity levels. Labels on the left side:
- Top: Max window
- ~95%: Context rot
- ~70%: Drifting
- ~50% and below: Sharp
(Juice filled to about 70% to show "this is about as much as you want to load")

**Right column — Definitions + model comparison:**

**Token** — ~3/4 of a word (~3-4 characters). The AI's unit of currency.

**Context window** — Short-term memory. Everything in + out must fit.

**Model context limits:**

| Model | Context window | That's roughly... |
|-------|---------------|-------------------|
| Claude Haiku 4.5 | 200k tokens | ~2 full novels |
| Claude Sonnet 4.6 | 200k tokens | ~2 full novels |
| Claude Opus 4.6 | 1M tokens | ~the entire Bible, three times over |

**Context rot** — Quality degrades well before the max. Stay under ~50-70% for best results. Start a fresh chat when things get weird.

**Pricing** — API = per token in/out. Chat apps (Claude Pro, ChatGPT Plus) = flat monthly fee.

---

## Slide 9 — Prompt Tips: The 2-Minute Version

**Layout:** Headline top-left. Orange callout below. 2x3 grid of tip cards filling the rest.

| Element | Copy |
|---------|------|
| Headline | Prompt Tips: The 2-Minute Version |
| Callout | AI is really good at understanding examples and patterns. Use that. |

**Tip cards (numbered 1-6):**

| # | Title | Description |
|---|-------|-------------|
| 1 | Be specific | "Cold email for a SaaS founder" beats "write an email" |
| 2 | Give examples | Show what "good" looks like. This is the biggest unlock. |
| 3 | Say what NOT to do | "No corporate jargon" — constraints are powerful. |
| 4 | Ask for structure | Bullets, JSON, a table — tell it the format you want. |
| 5 | When stuck, reset | New chat, smaller problem. Context rot is real. |
| 6 | Show, don't tell | Paste an example of the output you want. |

---

## Slide 10 — Getting Started

**Layout:** Headline + sub at top. Four path cards below matching the site's Getting Started tabs. Big callout pointing to the site for step-by-step setup.

| Element | Copy |
|---------|------|
| Headline | Pick Your Path |
| Sub-headline | The site has step-by-step setup for each one. |

**Four path cards (match the site's guide tabs):**

| Path | Stack / Tools | One-liner |
|------|--------------|-----------|
| Full Stack | VS Code + Claude Code + GitHub + Vercel + Supabase | The recommended web app stack. What this site is built with. |
| Chat AI | Claude (or ChatGPT) | No code. Just conversation. Start here if you're new. |
| Cursor / Windsurf | AI-native code editors | If you prefer a different editor than VS Code. |
| Automation | Make, Zapier, n8n | Wire tools together visually. No code needed. |

**Callout (centered, prominent):**
thebigsqueeze.vercel.app → Getting Started section has setup instructions, links, and pro tips for each path.

**Footer:** Arik can help you pick during setup. Don't install everything — just pick one path.

---

## Slide 11 — Example: AI Email Drafter

**Layout:** Headline top-left. Split layout below: mock UI left, details right.

| Element | Copy |
|---------|------|
| Headline | Example: AI Email Drafter |

**Left — Mock Claude Projects UI:**
- Window chrome (traffic light dots, "Claude Projects" label)
- System prompt bar: "System: You are Arik's email assistant. Match his tone: friendly, direct, no fluff."
- User bubble: "Write a follow-up to the venue about pricing"
- AI bubble: "Hey Sarah, just following up on the space rental quote..."

**Right — Details:**
- Difficulty: Starter (green badge)
- Time: ~15 minutes
- Tools: Claude
- What you build: A reusable prompt template for emails you write all the time — work replies, cold outreach, event RSVPs.
- Why it's great: Zero code. Instant payoff. You'll use it tomorrow.

---

## Slide 12 — Example: Content Pipeline

**Layout:** Headline top-left. Split layout: flow diagram left, details right.

| Element | Copy |
|---------|------|
| Headline | Example: Content Pipeline |

**Left — Flow diagram:**
URL / Transcript → AI Processing → three branches: Blog Post, Tweet Thread, Summary

**Right — Details:**
- Difficulty: Intermediate (yellow badge)
- Time: 2-3 hours
- Tools: Make + Claude, or Claude Projects
- What you build: Input a URL or transcript, output a formatted blog post, tweet thread, or summary.
- Why it's great: Shows the power of chaining AI with other tools.

---

## Slide 13 — Example: Full App with Claude Code

**Layout:** Headline top-left. Split layout: VS Code mock left, details right.

| Element | Copy |
|---------|------|
| Headline | Example: Full App with Claude Code |

**Left — Mock VS Code window:**
- Window chrome (traffic light dots, "VS Code — timer-app")
- Left pane: Syntax-highlighted code snippet (dark background, colored tokens)
- Right pane: Claude Code sidebar with a conversation ("Build me a timer app..." → "I'll create a React timer component...")

**Right — Details:**
- Difficulty: Ambitious (red badge)
- Time: 4+ hours
- Tools: VS Code + Claude Code
- What you build: A working web app, built entirely through conversation.
- Why it's great: Shows how far AI-assisted dev has come. Your ceiling just moved.

---

## Slide 14 — Go Build

**Layout:** Everything centered. This is the send-off.

| Element | Copy |
|---------|------|
| Headline | The juice is in the doing. |

**Three columns below:**

| Icon | Header | Detail |
|------|--------|--------|
| Calendar | Schedule | Check the site |
| Tools | Tools & Resources | thebigsqueeze.vercel.app |
| Mic | 5-min Demos at 4pm | Working > perfect |

**Below the columns:**
- Large orange slice logo
- Tagline: One Day. Pure Juice.
- Small text: Unfinished is totally fine.

---

## Known issues / things to review

- **Alignment:** Some slides have content that doesn't fill the vertical space well — leaves awkward gaps at top or bottom.
- **Wording:** Copy was drafted from the original prompt and may need tightening for spoken delivery.
- **Slide 9 glass graphic:** The labels sit to the left of the glass with `translate` positioning — may look off at different viewport sizes.
- **Slide 7 MCP lines:** SVG connector lines are approximate, not pixel-aligned to the node centers.
- **Slide 14 code mock:** The syntax-highlighted code is minimal/placeholder — could be more realistic.
- **Content density:** Some slides (6, 8) pack a lot of text. May want to trim for a live talk where you're narrating.
