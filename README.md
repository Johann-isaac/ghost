# SAHAY

**Let’s make digital services simple.**

SAHAY is an accessibility-first guidance prototype that helps people aged 60+ understand essential digital services one step at a time. It is a hackathon demonstration, not a government authority or replacement for official services.

## Problem statement

Essential public and digital services are increasingly online, but many interfaces use small text, unfamiliar terminology, long processes, and unclear document instructions. This can leave people unsure of what to do next or afraid of making a mistake.

The problem is not that older adults cannot use technology. It is that many systems are not designed around their needs.

## Target demographic

People aged 60+, including people with varied levels of digital confidence. SAHAY is designed to preserve independence, choice, and dignity rather than making assumptions about ability.

## Research and problem definition

The prototype includes a clearly labelled representative persona, Meena (67), and a before/after journey. They are design tools, not claims of completed research or universal user experience. The focus is reducing cognitive load while people navigate essential digital tasks.

## Solution

SAHAY is a guidance layer:

- Users choose a goal in everyday language.
- Service guides explain what a task is, who might need it, and what documents may be relevant.
- A guided workflow shows one step at a time, with a clear back action and progress.
- “Explain this” turns confusing wording into a plain-language explanation.
- Users continue to a verified official source only when ready.

SAHAY does **not** submit applications, collect identity documents, handle payments, or claim to provide official requirements.

## Key features

- Searchable service directory with five fictional, clearly labelled demonstration guides.
- Step-by-step guides, expandable document explanations, and official-source callouts.
- Local demo AI explanation endpoint that remains functional without API credentials.
- Help assistant with ten example questions and an “Explain more simply” option.
- Browser-based Read Aloud controls (play, pause, stop) via the Web Speech API.
- English, Tamil, and Hindi interface labels.
- Research, design-principles, accessibility documentation, audit, and about pages.

## Accessibility features

- Persistent, visible Accessibility panel.
- Normal, Large, and Extra Large text settings.
- High Contrast mode.
- Simple Mode that reduces secondary choices and visual clutter.
- Reduced Motion setting plus `prefers-reduced-motion` support.
- Keyboard-visible focus states, semantic headings, labelled controls, large touch targets, and responsive layouts.
- Settings persist in browser `localStorage` only.

## AI architecture

`app/api/explain/route.ts` is the provider boundary. It currently returns safe local demo explanations, so the app works without a key. `lib/ai.ts` contains the reusable accessibility system instruction and prompt templates.

To connect an AI provider, use server-side environment variables and replace the local branch in the route with a provider adapter. Never expose API keys to the browser.

The prompt instructions require the model to:

- Use plain language and short sentences.
- Explain unfamiliar words and break down steps.
- Distinguish official requirements, SAHAY explanations, and helpful suggestions.
- Never invent government rules or claim to be a government authority.

## Accessibility prompts

The app documents reusable templates for terminology explanation, instruction simplification, guide creation, “What does this mean?” questions, and translation. A human reviewer should check all provider-generated output for accuracy, simplicity, missing context, invented claims, and accessibility before publication.

## Accessibility audit

The `/audit` page provides an interactive, internal checklist organised by Perceivable, Operable, Understandable, and Robust. Its score is a working team metric, not an official accessibility certification.

## Technology stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React
- Web Speech API

## Install and run locally

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment variables

Copy `.env.example` to `.env.local` if connecting an AI provider:

```bash
AI_PROVIDER=openai
OPENAI_API_KEY=
OPENAI_MODEL=
```

These values are optional. The local demonstration response works without them.

## Production build

```bash
pnpm build
pnpm start
```

The project is configured for GitHub-to-Vercel deployment. Add any real AI provider secrets through Vercel’s Environment Variables settings; never commit them.

## Team

The About page contains placeholder roles for Product & Research, Design & Accessibility, and Engineering. Replace them with the hackathon team before submission.

## Safety and privacy

SAHAY uses fictional demonstration data. It does not ask for real identity documents, passwords, OTPs, banking credentials, or sensitive personal information. Users are reminded to verify official sites and to avoid unexpected payment or information requests.
