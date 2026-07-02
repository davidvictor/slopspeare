# The final-pass checklist

Run this before you deliver anything. It catches the recurring tells in a couple of minutes. Each item links to the rule that explains it in [`RULES.md`](RULES.md).

Search your draft for the literal strings in the "grep" lines. Most slop is findable with a text search.

## Hard bans (zero tolerance)

- [ ] **No em dashes or en dashes inside sentences.** Only between two numbers as a range. (`PUNCT-1`)
  - grep: `—` `–`
- [ ] **No "X, not Y" contrast, in any form,** including "not just X, but Y," "this isn't X, it's Y," and "Not Y. X." (`RHET-1`)
  - grep: `, not ` `not just` `isn't` `it's not about`
- [ ] **No sight-words.** delve, tapestry, pivotal, underscore, testament, intricate, meticulous, multifaceted, embark, spearhead, bolster, garner, realm, labyrinth, symphony. (`VOCAB-1`)
- [ ] **No fabricated reflection, hindsight, or invented pull-quotes.** Reflection only if it is real and asked for. (`SUBST-10`, `SUBST-11`)
- [ ] **No assistant scaffolding.** "As an AI," "I hope this helps," "Let me know if…," knowledge-cutoff disclaimers. (`REVISE-10`)
  - grep: `As an AI` `hope this helps` `Let me know`

## Strong defaults (cut unless you have a reason)

- [ ] **No stock openers.** "In today's fast-paced world," "In the ever-evolving landscape of." (`RHET-5`)
- [ ] **No dramatic reveals.** "Here's the thing," "Let's dive in," "Buckle up." (`RHET-7`)
- [ ] **No announce-the-obvious phrases.** "It's worth noting that," "It's important to understand that," "In conclusion," "Overall." (`VOCAB-5`)
  - grep: `worth noting` `important to` `In conclusion` `In summary`
- [ ] **No academic glue.** Furthermore, Moreover, Additionally, Consequently. Cap at ~2 transitions total. (`VOCAB-6`)
- [ ] **No slogan section-closers or rhetorical-question-then-answer.** (`RHET-8`, `RHET-6`)
- [ ] **No declared importance.** "load-bearing," "pivotal moment," "a testament to." Show it instead. (`RHET-10`)
- [ ] **No press-release voice.** Nothing that could run unchanged in a corporate blog. (`TONE-3`)
- [ ] **No hand-wave verbs without a result.** empower, streamline, optimize, leverage. (`VOCAB-4`)
- [ ] **Every claim has a specific** number, name, mechanism, or detail behind it. (`SUBST-1`, `SUBST-4`)
- [ ] **First-person active voice.** No "was responsible for." (`STRUCT-4`)
- [ ] **Jargon glossed** on first use. (`SUBST-8`)
- [ ] **Opinion shows; hedging cut.** No "it could be argued," no relentless positivity. (`TONE-1`, `TONE-2`)
- [ ] **No emoji, hashtags, or over-bolding** unless requested. (`FORMAT-1`, `FORMAT-2`)
- [ ] **No vanity counts.** Drop "79 rules," "10x," "trusted by thousands" unless the number changes a decision. (`SUBST-15`)
- [ ] **No assumed-hygiene claims.** Drop "deduplicated," "rigorously tested," "production-grade." (`RHET-12`)

## Cadence and shape

- [ ] **Sentence length and openers vary.** No three in a row with the same shape. (`STRUCT-1`)
- [ ] **No stacked fragments for punch** ("Real money. Real edge."). (`STRUCT-2`)
- [ ] **No mirror structures** in back-to-back sentences. (`STRUCT-5`)
- [ ] **No rule-of-three triplets** unless the three items are genuinely distinct. (`STRUCT-6`)
- [ ] **Headings vary** and make a claim, never just label the topic; sentence case. (`FORMAT-6`, `FORMAT-3`)

## The tests

- [ ] **Deletion test.** Every remaining sentence carries information, not just rhythm. (`REVISE-1`)
- [ ] **Name-swap test.** At least one line could belong to no one else. (`REVISE-2`)
- [ ] **Say-it-aloud test.** Nothing you would roll your eyes saying to a friend. (`REVISE-3`)
