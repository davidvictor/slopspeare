# The Slopspeare Rules

A field guide to the patterns that make writing read as machine-generated, and what to do instead.

Each rule names a pattern, explains why it reads as AI "slop," and shows a short before/after. The rules describe *tells*. They are not a ban on the underlying ideas. The goal is writing that reads as a specific human with something to say, rather than the averaged-out voice a language model reaches for by default.

## How to read a rule

Every rule carries a strictness level:

- **Hard ban.** Reads as machine-generated on sight. Remove every instance. There are only a handful of these.
- **Strong default.** Cut it unless you have a specific reason to keep it. The burden of proof is on keeping it.
- **Guideline.** A direction to lean, applied with judgment. Context decides.

Rules have stable IDs (for example `PUNCT-1`) so you can cite them in reviews and pull requests. The same IDs appear in [`rules.json`](rules.json) for tooling.

A note on judgment: a real human writer breaks any of these rules on purpose sometimes, and that is fine. The difference between a choice and a tell is intent. If you can say why you kept a pattern, keep it. If it is there because it was the most probable next token, cut it.

## Categories

1. [Punctuation](#1-punctuation)
2. [Rhetorical tells](#2-rhetorical-tells)
3. [Vocabulary](#3-vocabulary)
4. [Substance and specificity](#4-substance-and-specificity)
5. [Sentence and paragraph craft](#5-sentence-and-paragraph-craft)
6. [Tone and voice](#6-tone-and-voice)
7. [Formatting and mechanics](#7-formatting-and-mechanics)
8. [Revision discipline](#8-revision-discipline)

---

## 1. Punctuation

A few punctuation habits are the loudest tells, and they are also the easiest to fix. The em dash leads the list.

### PUNCT-1. Do not use em dashes or en dashes as in-sentence punctuation
**Hard ban.**

The in-sentence em dash is the most recognizable signature of machine-generated prose. Editors now call it the "ChatGPT dash." It is also the delivery mechanism for other tells: the contrast pivot, the dramatic aside, the tacked-on qualifier. Use a period, a comma, or a colon. If a sentence only holds together because a dash is bridging two halves, that sentence usually wants to be two sentences or wants a colon.

- *Avoid:* The product shipped — and the team moved faster after.
- *Prefer:* The product shipped. The team moved faster after.

### PUNCT-2. Use the dash only as a numeric range separator
**Guideline.**

Between two numbers, a dash is doing typographic range work, not sentence punctuation, so it carries none of the tell. That is the one place it stays.

- *Avoid:* the work ran from 2024 to 2026
- *Prefer:* 2024–2026

### PUNCT-3. Do not use colons or question marks as dramatic reveal devices
**Strong default.**

The dramatic colon reveal and the rhetorical-question reveal both stage a small theatrical pause that machine prose overuses. Weave the point into a normal sentence and the staged drama disappears.

- *Avoid:* The result: a complete mess.
- *Prefer:* It fell apart completely.

### PUNCT-4. Keep exclamation marks rare
**Guideline.**

Frequent exclamation marks read as overenthusiastic marketing and undercut a steady, confident tone. One per page is plenty. Often zero is correct.

- *Avoid:* I love this work! It's the best thing I've built! Take a look!
- *Prefer:* I care about this work. Here is some of it.

---

## 2. Rhetorical tells

These are the structural moves a model reaches for to sound insightful: contrast pivots, thesis stamps, slogan closers, stock openers, and tidy resolutions. Two of them are zero-tolerance. The rest are strong defaults.

### RHET-1. Do not use the "X, not Y" contrast pattern in any form
**Hard ban.**

Defining something by negating a foil performs insight instead of stating it, and it appears far more often in machine text than in human writing. Once a reader notices it, every instance looks manufactured. Catch all the variants:

- the comma form: "a teammate, not a vendor"
- the parenthetical: "a teammate (not a vendor)"
- the paragraph-break form: "Not a vendor. A teammate."
- the soft form: "not just a tool, but a teammate"
- the escalation: "this isn't X, it's Y" / "it's not about X, it's about Y"
- the negated parallel: "they don't want a vendor. They want a teammate."

If a genuine contrast is load-bearing, give each side its own sentence with a real reason. If only one side matters, state it and drop the foil.

- *Avoid:* It's a teammate, not a vendor.
- *Prefer:* It works like a teammate.

### RHET-2. Do not use "I'd rather X than Y" preference framing
**Strong default.**

The rather-than inversion performs taste instead of stating it. It is the same reflex as the contrast pivot. A direct or collaborative claim lands harder.

- *Avoid:* I'd rather raise the ceiling for the people I work with than be the ceiling for them.
- *Prefer:* We all win when we raise the ceiling for each other.

### RHET-3. Do not open by taking down the field
**Strong default.**

The "most people get this wrong, but we…" opener positions the subject by criticizing everyone else. It reads as a generated hot take. Describe what you did and let any comparison stay implicit.

- *Avoid:* Most AI products never publish their accuracy numbers.
- *Prefer:* We publish our accuracy numbers because they hold up.

### RHET-4. Do not open with a numeric thesis stamp
**Strong default.**

Compressed slogan stamps like "Eleven services, one builder" read as marketing-deck positioning rather than substance, especially when one side is an abstraction. Open with the situation as you found it, in plain language.

- *Avoid:* Two problems, one engagement.
- *Prefer:* They had a broken front end and a team that was new to AI.

### RHET-5. Do not open with a stock scene-setter
**Strong default.**

"In today's fast-paced world," "In the ever-evolving landscape of," and "In an era where" are the canonical machine essay openers. They say nothing and signal everything. Start with the actual point.

- *Avoid:* In today's fast-paced digital landscape, teams need better tools.
- *Prefer:* Our support team was answering the same question forty times a day.

### RHET-6. Do not use a rhetorical question followed by its own answer
**Strong default.**

The question-then-answer move is a transition device that machine prose deploys every few paragraphs. Lead with the answer and state the point directly.

- *Avoid:* What does this mean in practice? It means teams need autonomy.
- *Prefer:* Teams need autonomy.

### RHET-7. Drop dramatic reveals and theatrical setups
**Strong default.**

"Here's the thing," "Here's what nobody tells you," "Let's dive in," "Let's unpack this," and "Buckle up" are content-marketing patterns that rarely appear in natural writing. They promise a drumroll the content has to pay off and usually does not. Start with the substance.

- *Avoid:* Here's the thing: most teams get onboarding wrong.
- *Prefer:* Most teams get onboarding wrong.

### RHET-8. Cut slogan resolutions and aphorisms at section ends
**Strong default.**

A tied-bow closer that sums the section up reads as a generated essay ending. The same goes for a labeled "Conclusion:" or "Overall," paragraph. These lines could appear in any piece on any topic. Drop them, or replace them with a sentence that adds new information.

- *Avoid:* AI-assisted, human-directed.
- *Prefer:* (cut it, or end on the last real point)

### RHET-9. Cut justification and contrast tails from declarative sentences
**Strong default.**

Trailing clauses that justify a claim ("which teams actually trust," "instead of pulling apart," "that keeps it from drifting") are the scaffolding that makes prose read as machine-written even when each clause is individually defensible. Trust the reader to infer the why. The test: if you can cut the clause and still mean what you meant, cut it.

- *Avoid:* It keeps the product from drifting between hand-offs, which teams actually trust.
- *Prefer:* It keeps the product from drifting between hand-offs.

### RHET-10. Do not announce that the work matters; show it
**Strong default.**

Meta-language like "load-bearing," "the most opinionated piece," "a pivotal moment," and "a testament to" declares importance instead of demonstrating it. Strip the meta sentence and let the content carry the weight. If the work matters, the reader will see it.

- *Avoid:* This is the load-bearing, most opinionated part of the system.
- *Prefer:* (describe what the part does, and let the reader judge)

### RHET-11. Do not claim the work needed someone with your exact qualifications
**Strong default.**

Framing a task as needing a person with your precise background is a credentialing flourish that brags while pretending to describe. Watch for "only a [role] who," "the rare [role] who," and "it took someone with real taste." Name what the work required, not who was qualified to do it.

- *Avoid:* A designer who could think about both layers had to make the call.
- *Prefer:* I worked the problem from both the design and the data side.

### RHET-12. Do not claim the process hygiene the reader already assumes
**Strong default.**

Describing routine hygiene as if it were an achievement reads as filler, because the reader already assumes it, and it protests too much. Watch for "deduplicated," "rigorously tested," "carefully reviewed," "fully optimized," "production-grade," and "battle-tested." State process only when it is user-relevant, verifiable, and needed to use the thing. Otherwise let the work imply it. This is the process-claim sibling of RHET-10.

- *Avoid:* A deduplicated, rigorously reviewed, production-grade rule set.
- *Prefer:* A rule set. (Or, when it is real and useful: "Where sources disagreed, the call is recorded in CONFLICTS.md.")

---

## 3. Vocabulary

Models favor a recognizable register: inflated abstractions, academic connectors, and corporate buzzwords. These rules name the worst offenders and the underlying habit of reaching for the most probable word.

### VOCAB-1. Cut the sight-words: the highest-signal machine vocabulary
**Hard ban.**

A specific set of words appears at abnormal rates in model output and almost never in unforced human writing. Cut them on sight and rewrite around them:

> delve, tapestry, landscape (figurative), pivotal, underscore, testament, intricate / intricacies, meticulous, multifaceted, embark, spearhead, bolster, garner, interplay, realm, labyrinth, symphony

- *Avoid:* We embarked on a meticulous journey to delve into this intricate tapestry.
- *Prefer:* We started digging into how the pieces fit together.

### VOCAB-2. Use the watchlist words at most once, and only when literal
**Strong default.**

These are real words that humans use, but models overuse them, and clustering or repeating them is itself the tell. Keep one only when it is the plainest accurate word (for example, "comprehensive test coverage" is fine; "comprehensive, robust, cutting-edge solution" is not):

> crucial, robust, comprehensive, vibrant, foster, enhance, leverage, navigate, resonate, illuminate, showcase, enduring, holistic, innovative, dynamic, seamless, cutting-edge, game-changer

- *Avoid:* Leverage this robust, seamless, cutting-edge solution to enhance outcomes.
- *Prefer:* Use this to make the process smoother.

### VOCAB-3. Cut empty corporate buzzwords and founder-deck clichés
**Strong default.**

Words like leverage, utilize, synergy, stakeholder, best practices, deliverables, cross-functional, force multiplier, table stakes, and "passionate about" carry no concrete meaning and read as borrowed marketing language. Replace them with plain action verbs: built, designed, shipped, led, ran.

- *Avoid:* Passionate about leveraging best practices to drive stakeholder synergy.
- *Prefer:* I care about how things work, and I do what makes sense for the problem.

### VOCAB-4. Avoid hand-wave verbs that name no mechanism
**Strong default.**

Transform, empower, enable, leverage, streamline, and optimize gesture at impact without saying what actually changed, so any subject sounds generic. State the real change. If you keep one, attach a concrete result.

- *Avoid:* AI-powered SQL that empowers teams.
- *Prefer:* AI-assisted SQL that cut query-writing time from twenty minutes to two.

### VOCAB-5. Delete phrases that announce instead of doing
**Strong default.**

"In conclusion," "In summary," "It's worth noting that," and "It's important to understand that" are filler that narrate an action rather than perform it. Just conclude, summarize, or state the thing. A literal "Conclusion:" heading on a short piece is the same tell in heading form.

- *Avoid:* It's important to note that the deadline is Friday.
- *Prefer:* The deadline is Friday.

### VOCAB-6. Cut academic connectors used as glue
**Strong default.**

"Furthermore," "Moreover," "Additionally," "Consequently," "Subsequently," and "Hence" cluster in machine text to simulate logical flow. Cap formal transitions at roughly two per piece. Often the cleanest connector is none: just start the next sentence.

- *Avoid:* Furthermore, the migration reduced errors. Moreover, it sped up deploys.
- *Prefer:* The migration reduced errors. It also sped up deploys.

### VOCAB-7. Cut adjective stacks
**Strong default.**

Pairs and triplets of adjectives ("real, measurable profit") inflate prose without adding information. One adjective, or none, usually carries the meaning.

- *Avoid:* real, measurable profit
- *Prefer:* profit

### VOCAB-8. Cut hedges and softeners that draw no real distinction
**Strong default.**

"Start to," "this generation of," "for a stretch," "to some extent," "it could be argued that," "essentially," and "basically" dilute a claim without adding meaning. Keep a qualifier only when it marks a genuine distinction.

- *Avoid:* those layers start to inform each other
- *Prefer:* those layers inform each other

### VOCAB-9. Replace vague-scale quantifiers with the real number
**Strong default.**

"Multiple," "numerous," "several," "a handful," and "some" read as imprecise filler. Use the exact figure when you have it. Use a scaled word (dozens, thousands) only when the precise count is genuinely unverifiable.

- *Avoid:* several backtested bets across multiple prop types
- *Prefer:* 28,000 backtested bets across every prop type

### VOCAB-10. Find and ban your own recurring crutch phrases
**Strong default.**

Any pet phrase that recurs across your drafts becomes its own tell once a reader spots the repetition. A phrase that asserts scope ("every layer in one head") is worse, because it claims rather than shows. Name the actual thing instead.

- *Avoid:* He kept every layer in one head.
- *Prefer:* I owned the design, the build, and the brand.

### VOCAB-11. Prefer the broader universal word when meaning is preserved
**Guideline.**

Insider terms narrow the audience without earning precision. When the plainer word loses nothing, use it.

- *Avoid:* beta build
- *Prefer:* demo

---

## 4. Substance and specificity

Concrete detail is the strongest correction for machine blandness. Models smooth facts into generalities. This category forces named numbers, real mechanisms, and earned claims, and it forbids invented content.

### SUBST-1. Choose specificity over abstraction
**Strong default.**

Models regress to the mean, smoothing facts into vague generalities. Specific figures, proper nouns, named tools, and before/after deltas carry weight that adjectives cannot, and they make writing credible and memorable.

- *Avoid:* improved performance significantly
- *Prefer:* cut load time from 4.2s to 800ms

### SUBST-2. Earn every claim; show a quality instead of asserting it
**Strong default.**

"Thoughtful," "rigorous," "creative," and "passionate" are claims the writing itself has to demonstrate. If you have to say the work is thoughtful, it usually isn't. A concrete project proves the quality better than the adjective.

- *Avoid:* I'm a passionate, creative designer.
- *Prefer:* I designed the embeddable web player widget for Apple Music.

### SUBST-3. The name-swap test: write what only you could write
**Strong default.**

If someone could paste their own name over a sentence and it would still be true, the sentence carries no information. Interchangeable copy is the working definition of slop. Every piece needs at least one detail, belief, or specific that could belong to no one else.

- *Avoid:* A results-driven designer dedicated to crafting user-centered experiences.
- *Prefer:* I design and build products end to end, from research through production React.

### SUBST-4. Name the mechanism, the failure mode, and the trade-off
**Strong default.**

Vague risk language ("problems may arise under certain conditions") and metaphors for difficulty ("the front end couldn't hold the weight") substitute imagery for facts. Name the real constraint, the real failure, and what was given up. "We chose X over Y because Z, and the cost was W" is the standard to aim for.

- *Avoid:* Without this, problems may arise under certain conditions.
- *Prefer:* Without the lock, two workers grab the same job and the customer gets charged twice.

### SUBST-5. Tie a technical claim to an outcome the reader feels
**Strong default.**

An abstract technical description with no stated consequence is filler. Close on what the reader sees, loses, waits for, or can now do.

- *Avoid:* This refactors the caching layer for improved efficiency.
- *Prefer:* This caches the session, so repeat page loads drop from 800ms to 60ms.

### SUBST-6. Show the reasoning behind a decision
**Strong default.**

A list of outcomes reads thin. A list of steps reads like a junior task log. Stating the belief or insight behind a decision shows judgment, which is what reads as a real person. Lead with why before what.

- *Avoid:* Then I made the wireframes, then the mockups, then the prototype.
- *Prefer:* We cut the settings page in half, knowing power users would complain, because new users were drowning in it.

### SUBST-7. Set up the principle, then land it on something concrete
**Strong default.**

The abstract-then-concrete shape is how human writing earns a general claim: state the idea, then ground it in one tangible detail. A general claim left floating reads as generated; the same claim with a specific anchor reads as lived.

- *Avoid:* Good infrastructure is about resilience and reliability at scale.
- *Prefer:* Good infrastructure is boring on purpose. Ours has paged someone twice in two years.

### SUBST-8. Gloss jargon on first use
**Strong default.**

Unexplained jargon makes a non-expert reader bounce, and it can signal copy-pasted padding. Give every specialized term a one-clause plain-language anchor the first time it appears, even when the reader supplied the term.

- *Avoid:* score the row in logit space
- *Prefer:* score the row in log-odds, where adding numbers is meaningful

### SUBST-9. Find the through-line; do not recite a timeline
**Guideline.**

For any narrative about a person or a project, the interesting thing is the thread that connects the events, not the chronology. A list of roles or milestones in order reads as a résumé in paragraph form. Name the question the work keeps answering, and frame a winding path as the asset it usually is.

- *Avoid:* I worked at A, then B, then C, then D.
- *Prefer:* I keep ending up on the same problem at bigger scales: how do you keep software simple as it grows?

### SUBST-10. Never fabricate self-criticism, hindsight, or reflection
**Hard ban.**

Inventing regrets or a "what I'd do differently" the author never expressed is worse than ordinary filler, because it puts false thoughts in a real person's mouth. Omit reflection unless the author asked for it. When reflection is genuine, keep it specific and true rather than a hollow flaw inserted for shape.

- *Avoid:* Looking back, I'd probably have structured the whole thing differently.
- *Prefer:* The biggest surprise was that the data model, not the UI, caused most of the confusion.

### SUBST-11. Do not invent pull-quotes or memorable lines
**Strong default.**

A pull-quote has to be a phrase already in the body or a real attribution, never a manufactured or paraphrased line. Inventing quotable lines from nothing is a hallmark of padded copy. The same applies to transferable aphorisms that could headline any piece.

- *Avoid:* "If the tool is fighting you at hour six, the tool is wrong." (when nobody said it)
- *Prefer:* (quote a line the source actually contains, or cut the pull-quote)

### SUBST-12. Prefer honest proportions over cute symmetry
**Strong default.**

An almost-true clever phrase is worse than the plain proportion. Do not reach for symmetry or decorative math when the real numbers tell a more honest story.

- *Avoid:* at least as many years deep in the work as I have above it
- *Prefer:* many years deep in the work and several above it

### SUBST-13. Quantify only when the number is load-bearing
**Guideline.**

Reflexively attaching a metric to every claim produces hollow vanity numbers that read as padding. Reserve quantification for figures that actually carry weight, and describe qualitative impact otherwise.

- *Avoid:* Improved engagement by 3% and touched 12 user flows.
- *Prefer:* Delivered to more than 10 million users.

### SUBST-14. Leave some thoughts unresolved
**Guideline.**

Not every idea needs a landing. Forced resolution on every point reads as machine tidiness. "I'm still figuring this out" is often the most honest and most compelling option available.

### SUBST-15. Do not anchor on arbitrary or non-functional numbers
**Strong default.**

A count cited for authority ("79 rules," "10x engineers," "trusted by thousands") reads as scale-flexing, and it goes stale the moment the thing changes. Cite a number only when it changes a decision, marks a real constraint, or the reader needs it to understand the thing. This sharpens SUBST-13, and it is the counterweight to SUBST-1: keep the load-bearing number, drop the vanity one.

- *Avoid:* A guide with 79 rules across 8 categories.
- *Prefer:* A guide to the patterns that make writing read as AI.

- *Avoid:* Ultimately, balance is what matters most.
- *Prefer:* I still don't know if we made the right call.

---

## 5. Sentence and paragraph craft

Models write at a steady, symmetrical rhythm. Real writing speeds up and slows down. These rules push for varied cadence and active voice while staying clear of the opposite failure, the wall of choppy fragments.

### STRUCT-1. Vary sentence length and opening construction
**Strong default.**

Models pick the most likely pattern, so sentence length comes out uniform and openers repeat. Mix long sentences with short ones, and do not open three sentences or three paragraphs in a row the same way.

- *Avoid:* The plan was solid. The team was ready. The launch went well. The numbers were good.
- *Prefer:* The plan was solid, and after weeks of back-and-forth the team finally felt ready. Then we launched. It worked.

### STRUCT-2. Do not stack fragments for rhythm or punch
**Strong default.**

Strings of clipped fragments ("Real money. Real edge.") read as performative, a crutch rather than a real choice. If a thought is worth saying, give it a full sentence. Default to medium-length sentences that build on each other. Reserve a single short sentence for genuine impact.

- *Avoid:* We shipped it. It worked. Users loved it.
- *Prefer:* We shipped it, and once a few rough edges were sanded down, it held up well enough that people started relying on it.

### STRUCT-3. Vary rhythm on purpose: short to state, longer to illustrate, short to land
**Guideline.**

This is the constructive counterpart to STRUCT-2, not a license for a wall of one-liners. A backbone of short declaratives punctuated by longer sentences that carry the specifics reads as crafted human prose. Uniform length reads mechanically whether it is all short or all long.

- *Avoid:* I build things. Quality matters. I ship work. I have taste. I lead teams.
- *Prefer:* Quality matters. You can only build something great if you design it for someone in particular, which means saying no to almost everyone else. That is the whole job.

### STRUCT-4. Prefer first-person active voice
**Strong default.**

Active voice names who did what and owns the work. Passive voice ("the foundation was rebuilt") hides the actor and reads as evasive résumé-speak. "Was responsible for" is the worst offender.

- *Avoid:* The foundation was rebuilt.
- *Prefer:* I rebuilt the foundation.

### STRUCT-5. Break mirror structures
**Strong default.**

Perfect structural symmetry in back-to-back sentences is a model favorite. Make the second item different in shape, length, or angle. This also applies to matched parallel clauses inside quotes, which read as constructed rather than spoken.

- *Avoid:* Engineers want clarity. Managers want context.
- *Prefer:* Engineers want clarity. For managers it is more about context, the stuff around a decision that you cannot see from outside.

### STRUCT-6. Limit anaphora and rule-of-three triplets
**Strong default.**

Three or more sentences opening with the same word ("No memory. No restraint. No feedback loop.") read as a tic, and so do groups of three nouns or phrases ("research, collaboration, and problem-solving") used for the feel of completeness. A triplet is fine only when the three items are substantively distinct and each is doing real work. Budget at most one such cluster per section.

- *Avoid:* It was vibrant, dynamic, and innovative.
- *Prefer:* It was fast, and people actually used it.

### STRUCT-7. Drop a very short sentence into dense passages
**Guideline.**

A six-word sentence after an inventory, or between a problem and a pivot, gives the reader a beat and breaks a run of long sentences. Place it where a reader is most likely to lose the thread.

- *Prefer:* I rebuilt the foundation. (dropped in after a long list of what was broken)

### STRUCT-8. Start a sentence with "And" or "But" sometimes
**Guideline.**

People write this way when they are not worried about grammar-class rules, and it creates a conversational rhythm that uniformly formal prose cannot reach. Some style guides discourage it; use it anyway, in moderation.

- *Avoid:* However, the result surprised everyone.
- *Prefer:* But it surprised everyone.

---

## 6. Tone and voice

Models default to enthusiasm, balance, and corporate polish. Human writing takes positions, stays measured, and sounds like one specific person. These rules calibrate register away from both press-release gloss and forced casualness.

### TONE-1. Let the author's real opinion show
**Strong default.**

Models hedge to appear balanced and give every perspective equal weight. Human writers have opinions and lean into them. If the text makes an argument, let it argue. State beliefs plainly without "I think" or "perhaps" padding.

- *Avoid:* It could be argued that remote work has some benefits.
- *Prefer:* Remote work made us faster.

### TONE-2. Avoid sycophantic, over-positive tone and obsequious preambles
**Strong default.**

Models default to enthusiasm ("Great question!", "Certainly! Here's…", "This is a fantastic approach!") and to relentless optimism. Humans are more measured and sometimes blunt. Cut the manufactured certainty, and be willing to say what did not work.

- *Avoid:* This was a complete success and a clear win on every dimension.
- *Prefer:* I think this worked, though a couple of the assumptions behind it still make me nervous.

### TONE-3. Never let copy read like a press release
**Strong default.**

If a sentence could appear unchanged in a corporate blog post, it is generic and impersonal. Write like a builder talking to a peer, not a consultant presenting to a client.

- *Avoid:* We are thrilled to leverage our world-class expertise to deliver best-in-class solutions.
- *Prefer:* We built it because the old one kept breaking.

### TONE-4. Do not narrate technical systems with cute metaphors or personification
**Strong default.**

Metaphorical narration of technical behavior ("the CMS absorbed the chaos") performs craft instead of demonstrating it. State plainly what the system does. First-person ownership beats personification.

- *Avoid:* The CMS absorbed the chaos.
- *Prefer:* The CMS queued the incoming requests and processed them in order.

### TONE-5. Drop thought-leadership framing
**Strong default.**

"I learned," "key takeaway," and "here's what this taught me" read as performative content marketing. Tell what happened and what you think. A real lesson earns its place only if it would be news to the reader. If you cannot make the lesson more interesting than the story, cut it.

- *Avoid:* Key takeaway: always trust your team.
- *Prefer:* Flexible tools beat structured ones when the relationship is the product.

### TONE-6. Do not open a bio with "passionate about" or boilerplate
**Strong default.**

Bios that open with "passionate about," product pages that "empower" or "streamline," and the Wikipedia-style "Company X is a leading provider of…" opener are all the averaged-out default that makes the writer sound like everyone else. Lead with what you make.

- *Avoid:* I am a Senior Product Designer passionate about building great products.
- *Prefer:* I build accessible, fast web interfaces, end to end.

### TONE-7. Ground a personal intro in something human before the credential
**Guideline.**

A line about where you live, what you make, or what you keep coming back to reads as a person. A job title alone reads as a record. Put the human detail first.

- *Avoid:* Senior Staff Engineer, 12 years of experience.
- *Prefer:* I'm a maker living in San Francisco, mostly building developer tools.

### TONE-8. Hold warmth and technical precision at once
**Guideline.**

The failure is treating these as a choice: dry spec-speak on one side, fluffy human filler on the other. Strong writing is precise about the facts and warm about the stakes in the same passage. Be exact about what happened and plain about why it mattered.

- *Avoid:* The system achieved a 30% latency reduction across the board.
- *Prefer:* We cut latency by about a third, which is the difference between the page feeling instant and feeling broken.

### TONE-9. Be direct about quality and critique
**Strong default.**

Diplomatic hedging produces vague, non-actionable feedback, and softened findings dilute the point. A bug matters, an edge case matters, and a weak headline is weak. Say so plainly, then fix it.

- *Avoid:* There might potentially be a minor concern worth possibly considering here.
- *Prefer:* This silently drops the error. When the upload fails, the user sees a success message and loses the file.

### TONE-10. Keep genuine reflection observational
**Guideline.**

When you write about a loss or an uncertainty that is real, an over-apologetic tone undercuts the authority that honesty earns you. Calm observation reads as earned perspective. This is the register for true reflection, and it is distinct from the ban on inventing flaws (see SUBST-10).

- *Avoid:* I'm so sorry to admit I completely failed at this and felt terrible.
- *Prefer:* That decision did not hold up, and here is what it taught me.

### TONE-11. Keep a distinct voice; do not over-correct into fake casualness
**Guideline.**

Machine text lacks the quirks, humor, and frustration that signal a person, but overshooting into forced informality ("Fellow humans, am I right?") is worse than the original gloss. Aim for invisible editing, where the reader never thinks about how the text was written.

- *Avoid:* Fellow humans, let's get real for a sec.
- *Prefer:* Anyway, that is roughly how it went.

---

## 7. Formatting and mechanics

Surface formatting also carries machine signals: decorative emoji, compulsive bolding, title-cased headings, and templated parallel section titles. These rules keep the page plain and scannable.

### FORMAT-1. Do not add emojis, hashtags, or engagement bait unless asked
**Strong default.**

Decorative inline emoji, emoji-prefixed bullet lists (✅, 🚀, 💡 leading each item), and hashtag tails are content-marketing decoration that signals performative writing. Add them only on explicit request.

- *Avoid:* This changed everything. 🚀 #growth #buildinpublic
- *Prefer:* This changed how the team shipped.

### FORMAT-2. Do not bold every key term
**Strong default.**

Machine output bolds a phrase in nearly every sentence to look emphatic and scannable. Over-bolding flattens emphasis until none of it lands. Bold a term when it genuinely needs to stand out, and rarely more than once per paragraph.

- *Avoid:* Our **scalable** platform uses **cutting-edge** AI to **streamline** your **workflow**.
- *Prefer:* Our platform uses AI to take the repetitive steps out of your workflow.

### FORMAT-3. Prefer sentence case for headings
**Guideline.**

Title-casing every heading ("How To Improve Your Workflow Today") is a default machine reflex that reads as SEO copy. Sentence case reads as a person wrote it.

- *Avoid:* Five Proven Strategies To Boost Team Productivity
- *Prefer:* Five things that actually sped up our team

### FORMAT-4. Do not editorialize emphasis with heavy italics or drama
**Guideline.**

Italics on more than one or two words, and dashes used for drama, signal performed marketing copy. Let emphasis fall on the single word that carries the claim.

- *Avoid:* This was the one thing that *truly, fundamentally* changed everything.
- *Prefer:* This changed how the team shipped.

### FORMAT-5. Use headers sparingly and weave links into sentences
**Guideline.**

Over-sectioning chops prose into fragments, and a bolted-on list of links reads as scaffolding. Sparse headers and inline links keep the writing flowing.

### FORMAT-6. Vary heading shape; do not reuse a verb or pattern across neighbors
**Guideline.**

Two consecutive headings of the same shape, or the same verb in back-to-back sections, read as a template tic. Matched gerund titles ("Designing for Scale. Building for Speed.") are the marketing-deck version. Lay the headings out in order and change any that echoes its neighbor. A heading should make a claim or name what is in the section, never just label the topic.

- *Avoid:* What the team practices. / What the foundation carries.
- *Prefer:* Pair sessions and review workflows. / Ten palettes on one token system.

### FORMAT-7. Match density to how the text will be read
**Guideline.**

The medium sets the density. Text read on a phone wants short sentences and one-thought-per-line spacing. A long-form essay tolerates longer paragraphs. Keep paragraphs tight, roughly two to four sentences, and avoid walls of text.

### FORMAT-8. End with a concrete ask
**Guideline.**

A trailing "feel free to reach out" or "I hope this helps" is filler. If the piece wants a next step, name it directly.

- *Avoid:* Feel free to reach out if you'd like to chat sometime.
- *Prefer:* If this is your problem too, email me and we'll find 20 minutes.

### FORMAT-9. Do not restate content across documents; link to the source
**Strong default.**

Duplicating the same explanation in several places is a padding pattern, and it guarantees the copies drift out of sync. State a thing once, in its canonical home, and link to it from everywhere else.

---

## 8. Revision discipline

Most slop survives because nobody ran a deliberate pass to remove it. These rules govern the edit: cut filler, preserve voice and meaning, never inflate, and run named checks before delivery.

### REVISE-1. The deletion test: if cutting a sentence loses only rhythm, cut it
**Strong default.**

A sentence that exists purely for cadence is filler. The test isolates substance from ornament and forces the cut. The clause-level version: if you can remove a justification tail and still mean the same thing, remove it (see RHET-9).

- *Avoid:* Made to hold up a year into iteration.
- *Prefer:* (cut it)

### REVISE-2. The name-swap test, applied to the finished draft
**Strong default.**

Before delivering, check that the piece contains at least one detail, belief, or specific that could belong to no one else (see SUBST-3). If a competitor could publish it unchanged, it is too generic.

- *Avoid:* A results-driven professional dedicated to excellence.
- *Prefer:* I keep coming back to the same problem at bigger scales: keeping software simple as it grows.

### REVISE-3. The say-it-aloud test
**Strong default.**

Phrases nobody would say to a friend ("stakeholder alignment," "drove synergy," "world-class results") betray written-for-no-one corporate prose. If you would roll your eyes saying a line aloud, rewrite it.

- *Avoid:* I spearheaded cross-functional stakeholder alignment initiatives.
- *Prefer:* I got the designers and engineers on the same page.

### REVISE-4. Do not fix one cliché with another
**Strong default.**

Avoiding one pattern often pushes you into a fresh repeated crutch, like opening every transition with "That said." This secondary convergence is its own tell. Vary the fix, and sometimes use no transition at all.

- *Avoid:* That said, sales rose. That said, costs fell. That said, we hired.
- *Prefer:* Sales rose. Costs fell. We hired two people in the spring.

### REVISE-5. Edit the surface; never change meaning, facts, or voice
**Strong default.**

Tightening and humanizing edit the words, not the substance. A rewrite keeps the author's vocabulary and cadence, preserves the facts, and never dumbs the writing down. The target is clear and smart, not simplistic.

### REVISE-6. Never inflate; compress and sharpen, and add no buzzwords
**Strong default.**

When editing, the job is to tighten and clarify, never to add accomplishments, grander language, or corporate words the source did not contain. Inflation reads as dishonest marketing. Default to equal or shorter length unless expansion was requested.

### REVISE-7. Edit to the essentials; do not enumerate everything
**Guideline.**

Listing every project, responsibility, and tool reads as undisciplined and dilutes the strong items. Confidence comes from what you leave out. Pick the few that matter.

- *Avoid:* Here are all 14 projects I worked on, in chronological order.
- *Prefer:* Three projects that show what I care about.

### REVISE-8. Do not write a revision against the draft it replaces
**Strong default.**

After a correction, the goal is a cleaner output, not a visible apology for the previous draft. Showing the revision ("instead of calling it a prototype, here is the real version") is performance, and it leaves the same residue the feedback was meant to remove. Write the better version as if the earlier draft never existed.

- *Avoid:* Instead of calling it a prototype, here's the real version: …
- *Prefer:* (just write the better version)

### REVISE-9. For a line that has to land, generate several options, then choose
**Guideline.**

Alignment training buries creative range under the most probable output: the safe metaphor, the obvious beat. For an opening line, a tagline, or any sentence that has to carry weight, draft four or five options ranging from conventional to unexpected, then pick. Skip this for factual or mechanical edits.

### REVISE-10. Strip assistant scaffolding before delivering
**Hard ban.**

Model disclaimers and chat scaffolding must never survive into delivered copy: "As an AI language model," "As of my last knowledge update," "I cannot browse," "I hope this helps," "Let me know if you'd like me to…." They are pure leakage and the most obvious possible tell.

- *Avoid:* As an AI language model, I hope this overview helps. Let me know if you'd like more detail!
- *Prefer:* (cut all of it)

### REVISE-11. Run a final anti-slop pass
**Strong default.**

A concrete checklist catches the recurring tells before they ship. Scanning on every delivery is what keeps the named patterns out of final copy. Use [`CHECKLIST.md`](CHECKLIST.md).
