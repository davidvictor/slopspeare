```
                                       
     _                                 
 ___| |___ ___ ___ ___ ___ ___ ___ ___ 
|_ -| | . | . |_ -| . | -_| .'|  _| -_|
|___|_|___|  _|___|  _|___|__,|_| |___|
          |_|     |_|                  
```

# Slopspeare

A field guide to removing AI slop from writing.

Slopspeare is a set of rules for spotting the patterns that make text read as machine-generated, and for replacing them with writing that reads as a specific human. It covers prose: bios, landing-page copy, case studies, docs, blog posts, social posts, release notes, and anything else where the writing should sound like a person.

The name is a joke about the gap between the two. The rules are not.

## Why this exists

Language models reach for the most probable next word, so their writing converges on a recognizable register: inflated vocabulary, contrast pivots, tidy three-part lists, em dashes everywhere, and conclusions that wrap every thought in a bow. Each tell is small. Together they make writing feel generic and unearned, and readers now spot the pattern fast.

Plenty of good advice about this is scattered across style guides, editing forums, and the prompt files people use with their own AI tools. Slopspeare gathers it into one place and explains the reason behind each rule, so you can apply judgment instead of following a list blindly.

## What's here

| File | What it is |
| --- | --- |
| [`RULES.md`](RULES.md) | Each rule, why it reads as AI, and how to fix it. The source of truth. |
| [`CHECKLIST.md`](CHECKLIST.md) | A printable final-pass checklist. Run it before you deliver anything. |
| [`docs/quick-reference.md`](docs/quick-reference.md) | A one-screen cheat sheet of the worst tells and instant fixes. |
| [`CONFLICTS.md`](CONFLICTS.md) | Where the source material disagreed, and how the guide resolved it. |
| [`rules.json`](rules.json) | The same rules in machine-readable form, for linters and other tooling. |
| [`CONTRIBUTING.md`](CONTRIBUTING.md) | How to propose a new rule or change an existing one. |

## Install

Slopspeare is also an installable agent skill for Claude Code and compatible agents. Install it with the [`skills` CLI](https://github.com/vercel-labs/skills), which adds agent-skill packages to your local AI tool:

```bash
npx skills add davidvictor/slopspeare
```

Global, no prompts:

```bash
npx -y skills add davidvictor/slopspeare -g -y
```

Preview without installing:

```bash
npx skills add davidvictor/slopspeare --list
```

## How to use it

**Writing or editing your own work.** Read [`RULES.md`](RULES.md) once to learn the patterns. After that, draft freely and run [`CHECKLIST.md`](CHECKLIST.md) before you publish. Most of the tells are findable with a text search, and the checklist lists the strings to grep for.

**Reviewing someone else's work.** Cite rule IDs in your comments. "This is `RHET-1`" is faster than re-explaining the contrast pattern every time, and it points the writer at the reasoning.

**Editing with an AI assistant.** Paste [`RULES.md`](RULES.md) or [`CHECKLIST.md`](CHECKLIST.md) into the system prompt, or point your agent at this repo. The rules are written to be machine-followable, and [`rules.json`](rules.json) gives a structured version a tool can consume directly.

## Use as a skill

Once installed, point it at any prose draft. It cites each tell by rule ID,
severity, and a minimal fix, and it can apply the fixes.

Commands:

- **scan** (default). Audit the draft and report findings by rule ID and severity.
  The triage default shows hard bans and strong defaults; `scan all` adds
  guidelines.
- **fix.** Edit the draft. Bare `fix` applies hard bans and strong defaults and
  reports a per-rule changelog. `fix hard`, `fix all`, and `fix RHET-1,PUNCT-1` set
  the scope. Given a file path, it edits in place.
- **score.** The tier counts and a one-line read.
- **comment.** Findings as paste-ready review citations for a pull request.
- **watch / gate.** The skill runs its own output through the final-pass checklist before returning.

For project-specific rules, drop a `slopspeare.local.md` in your repo and the skill
layers it on top of the public catalog. See `slopspeare.local.example.md`.

For always-on scanning of an agent's own drafts, add a `Stop` hook in your
`settings.json` that runs the skill. The skill activates on request, so the hook is
what makes it run on every turn.

## The strictness model

Every rule carries one of three levels, because not all tells are equal.

- **Hard ban.** Reads as machine-generated on sight. Remove every instance. There are only a handful.
- **Strong default.** Cut it unless you have a specific reason to keep it. The burden is on keeping it.
- **Guideline.** A direction to lean, applied with judgment.

A real writer breaks any of these on purpose sometimes. The difference between a choice and a tell is intent: if you can say why you kept a pattern, keep it.

## Scope

Slopspeare is about written prose. It does not cover visual design, code style, or the structure of a specific document type. It is general-purpose by design, so it avoids any one person's house style. If you keep a house style, adopt Slopspeare as the base layer and add your specifics on top.

## Build in public

Slopspeare started as a private correction loop. The same handful of tells kept showing up in my own drafts and in everything my AI tools wrote for me: the em dash bridging every other sentence, the "X, not Y" contrast reflex, the puffed-up vocabulary that turns any sentence into a press release. I would fix them, and they would come back in the next draft.

So I wrote the rules down. Then I noticed the same guidance was scattered across my notes, my portfolio repo, and a stack of installed tools, often disagreeing with itself. This repo pulls all of it into one place, generalized so anyone can use it.

## Credits and sources

This guide is a synthesis. It draws on:

- Public catalogs of AI writing tells, including Wikipedia's "Signs of AI writing," GPTZero's overused-vocabulary research, and community editing notes.
- A design-leader copywriting style guide modeled on the public writing of designers and founders.
- Document-generation and review tooling that ships its own slop-scan rules.
- A working portfolio writing system maintained across many drafts and manual edits.

Where these sources conflicted, [`CONFLICTS.md`](CONFLICTS.md) records the call and the reasoning.

Curated and maintained by [David Victor](https://davidvictor.me).

## License

[CC BY 4.0](LICENSE). Use it, adapt it, build tooling on it. Just credit Slopspeare.

## Contributing

Rules earn their place by being real, recurring tells with a clear reason. See [`CONTRIBUTING.md`](CONTRIBUTING.md) for the format and the bar.
