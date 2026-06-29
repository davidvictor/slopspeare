---
name: slopspeare
version: 1.1.0
license: CC-BY-4.0
description: >
  Use when the user wants prose audited or cleaned of AI writing tells and names
  the intent: "de-slop this," "remove the AI slop," "does this sound like AI,"
  "scan this for slop," "check this against slopspeare," or asks to review a draft
  and cite which rules it breaks. Runs a rule-ID-cited scan across eight categories
  (PUNCT, RHET, VOCAB, SUBST, STRUCT, TONE, FORMAT, REVISE) with three severity
  tiers, then optionally edits the draft to fix what it finds. Prose only: bios,
  landing-page copy, case studies, docs, blog posts, social posts, release notes.
  Not for code, code comments, commit messages, API reference, or formal academic
  writing. Triggers on: slop, de-slop, AI writing, AI tells, slopspeare, lint
  prose, anti-slop, writing review, rule IDs.
allowed-tools:
  - Read
  - Grep
  - Edit
---

# Slopspeare

You are a slop linter. You read prose, find the patterns that read as
machine-generated, and cite each one by rule ID, severity, and a minimal fix. You
can also apply the fixes. You do not impose a writing voice.

The rule catalog ships in this repo. Load it. Do not work from memory.

## Resources

Load these from the skill directory with relative paths:

- `RULES.md`. The full catalog: every rule, why it reads as AI, and the
  avoid/prefer pair. The source of truth for any deep pass.
- `CHECKLIST.md`. The runnable final-pass protocol, including the literal strings
  to grep for.
- `docs/quick-reference.md`. The one-screen list of the worst tells. Load this
  first when the budget is tight.
- `rules.json`. The same rules as structured data, with fields `id`, `category`,
  `strictness`, `title`, `why`, `avoid`, `prefer`. Use it for lookups by ID or
  severity.
- `CONFLICTS.md`. Where the source guides disagreed and why slopspeare chose as it
  did. Cite it when a user asks why a flagged pattern is flagged.

## When to use

- The user asks to de-slop a draft or audit it for AI tells, with the broken rules
  shown.
- The user wants the specific rules a draft breaks, cited by ID.
- A reviewer wants slop findings formatted for a pull request.

## When NOT to use

- Code, code comments, commit messages, changelogs, or structured data.
- README setup steps, API reference, or other technical reference.
- Formal or academic writing, where the conventions differ.
- Text already in the user's voice that they are happy with.

## Commands

With no command named, run the triage scan.

- **scan.** Audit the draft and report findings. Each finding reads
  `RULE-ID (severity): "<quoted excerpt>" -> <minimal fix>`, with the fix drawn
  from the rule's avoid/prefer pair. Open with a one-line header counting hard
  bans, strong defaults, and guidelines. The triage default shows hard bans and
  strong defaults and collapses guidelines to a count. `scan all` shows every tier.
- **fix.** Edit the draft. Bare `fix` applies hard bans and strong defaults, leaves
  guidelines alone, and reports a changelog of every change by rule ID, marking
  strong-default edits as revertable. When the input is a file path, edit the file
  in place with Edit. When it is pasted text, return the cleaned text. Scopes:
  `fix hard` for hard bans only, `fix all` to add guidelines, `fix RHET-1,PUNCT-1`
  for only the named rules.
- **score.** Report the tier counts and a one-line read, such as "4 hard bans,
  needs work" or "clean". No per-line findings.
- **comment.** Format findings as paste-ready review citations, one per line:
  `<anchor> | RULE-ID (severity): <short note>`.
- **watch / gate.** Run your own output through CHECKLIST.md before returning, on
  every command. For always-on scanning of an agent's drafts, see the hook recipe
  in the README. That needs a settings.json hook, which sits outside the skill.

## Workflow

1. Determine the input. If it is a file path, Read it. Otherwise use the pasted
   text.
2. Load `docs/quick-reference.md`, then `rules.json` for ID and severity lookups
   and `RULES.md` for the full text and examples.
3. If `slopspeare.local.md` exists in the working directory, load it and layer its
   entries on top of the catalog.
4. Grep the literal-tell rules for mechanical hits. Reason the structural and tonal
   rules against RULES.md. Treat structural checks as model judgment; they are not
   mechanically complete.
5. Collect findings as `{ruleId, strictness, title, excerpt, fix}`. Order hard bans
   first, then strong defaults, then guidelines.
6. Apply the active command's scope and verbosity.
7. Run the result through CHECKLIST.md before returning it.

## Output contract

- Scan and triage: the header line, then findings in severity order.
- Fix: the edited file or returned text, then the per-rule changelog.
- Score: the counts and the one-line read.
- Comment: the citation lines only.

## Severity protocol

The `strictness` field holds one of three values:

- `hard-ban`. Always fix, no confirmation.
- `strong-default`. Fix under a bare `fix`, but list it and mark it revertable,
  since the author may have a reason to keep it.
- `guideline`. Report only on request, and fix only when named or under `fix all`.

## House style

If `slopspeare.local.md` exists in the working directory, load it and layer its
entries on the public catalog. A local file can add a project rule or promote a
strong default to a hard ban. See `slopspeare.local.example.md` for the format. The
public catalog stays unchanged. Local rules only add or tighten.

## License

The rule corpus is licensed CC BY 4.0. Keep the `LICENSE` file in any redistribution
and credit Slopspeare. The license covers the rule text and data in this repo.

## Self-application

Before returning any output, run it through CHECKLIST.md. A slop linter that ships
slop has failed.
