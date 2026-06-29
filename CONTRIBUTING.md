# Contributing to Slopspeare

Slopspeare grows by adding real, recurring tells with a clear reason, and by sharpening the rules that are already here. This guide explains the bar and the format.

## The bar for a new rule

A rule earns its place when it is:

1. **A real pattern.** It shows up often in machine-generated or low-effort writing. One-off awkwardness is not a rule.
2. **Explainable.** You can say in a sentence or two why it reads as a tell. "It looks bad" is not a reason. "It performs insight instead of stating it, and appears far more in model text than human text" is.
3. **Actionable.** A writer can find it and fix it. The best rules come with a string you can grep for.
4. **General.** It applies across kinds of writing, not just one document type or one person's style. House-style specifics belong in your own layer, not here.

If a proposed rule overlaps an existing one, sharpen the existing rule instead of adding a near-duplicate. The synthesis that built this guide spent most of its effort on dedup, and keeping the set tight is the point.

## The format of a rule

Each rule in [`RULES.md`](RULES.md) follows the same shape:

```
### CATEGORY-N. Imperative title
**Strictness.**

One to three sentences on why it reads as a tell, written so a reader with no
prior context understands the reason. No internal shorthand.

- *Avoid:* a short example of the tell
- *Prefer:* the same idea, rewritten
```

Rules:

- **ID.** A category prefix and the next free number, for example `VOCAB-12`. IDs are stable. Do not renumber existing rules; when you remove one, retire the ID rather than reusing it.
- **Strictness.** One of `Hard ban`, `Strong default`, or `Guideline`. Reserve `Hard ban` for tells that read as machine-generated on sight. Most rules are `Strong default`.
- **Why.** Plain language. Explain the mechanism, not just the verdict.
- **Examples.** Short and concrete. Some structural rules have no clean one-liner, and that is fine.

## Practice what the guide preaches

The rule text itself has to pass the rules. Before you open a pull request, run [`CHECKLIST.md`](CHECKLIST.md) against your own additions. No em dashes in the prose, no "X, not Y" constructions, no inflated importance, no tricolons for rhythm. A guide that commits the slop it warns against has no credibility.

## Regenerate the JSON; do not hand-edit it

[`RULES.md`](RULES.md) is the single source of truth. [`rules.json`](rules.json) is generated from it, so never edit the JSON by hand. After you change a rule, regenerate from the repo root:

```
node scripts/build-rules-json.mjs
```

Commit both files together. The generator reads the `### ID. Title` heading, the `**Strictness.**` line, the body, and the `- *Avoid:*` / `- *Prefer:*` example lines, so keep that format exact. Each rule becomes:

```json
{
  "id": "VOCAB-1",
  "category": "Vocabulary",
  "strictness": "hard-ban",
  "title": "...",
  "why": "...",
  "avoid": "...",
  "prefer": "..."
}
```

The strictness field is one of `hard-ban`, `strong-default`, or `guideline`. A rule with no clean example produces empty `avoid` or `prefer` strings, which is expected.

## Proposing a conflict resolution

If your rule overrides or qualifies an existing one, say so in [`CONFLICTS.md`](CONFLICTS.md). Record the disagreement and the call you are making, the same way the existing entries do. A reader should be able to see why the guide landed where it did and reopen the question with new evidence.

## Changing strictness

Moving a rule between levels is a real change, so explain the reasoning in the pull request. A pattern that legitimate writing needs sometimes (for example, a technical term that happens to be on a watchlist) should not sit at `Hard ban`.
