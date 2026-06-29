# Slopspeare local overrides (example)

Copy this file to `slopspeare.local.md` in your project root. Slopspeare loads it
and layers these entries on top of the public catalog. Local entries only add rules
or tighten existing ones. They never loosen the public catalog.

## Added rules

Give each a project-local ID, a strictness (`hard-ban`, `strong-default`, or
`guideline`), and an avoid/prefer pair.

- `LOCAL-1` (`hard-ban`). Never use the word "delve". Prefer "dig into" or "go
  through".
- `LOCAL-2` (`strong-default`). Do not open a paragraph with "In today's world".
  Open with the specific claim.

## Promotions

Raise a public rule to a stricter tier for this project.

- `PUNCT-3` to `hard-ban`. In this project the dramatic colon reveal is always
  removed.
