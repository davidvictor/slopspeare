#!/usr/bin/env node
// Generate rules.json from RULES.md so the structured data never drifts from the
// canonical prose. Run from the repo root: `node scripts/build-rules-json.mjs`.
// No dependencies. RULES.md is the source of truth; rules.json is derived.

import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const md = readFileSync(join(root, "RULES.md"), "utf8");
const lines = md.split("\n");

const STRICTNESS = {
  "Hard ban": "hard-ban",
  "Strong default": "strong-default",
  Guideline: "guideline",
};

const rules = [];
const categoriesInOrder = [];
let category = null;
let i = 0;

const catRe = /^##\s+\d+\.\s+(.+)$/;
const ruleRe = /^###\s+([A-Z]+-\d+)\.\s+(.+)$/;
const strictRe = /^\*\*(.+?)\.\*\*$/;
const exampleRe = /^-\s+\*(Avoid|Prefer):\*\s*(.*)$/;

while (i < lines.length) {
  const line = lines[i];

  const cat = line.match(catRe);
  if (cat) {
    category = cat[1].trim();
    if (!categoriesInOrder.includes(category)) categoriesInOrder.push(category);
    i++;
    continue;
  }

  const rule = line.match(ruleRe);
  if (rule) {
    const id = rule[1];
    const title = rule[2].trim();
    i++;

    // strictness is the next non-empty line
    while (i < lines.length && lines[i].trim() === "") i++;
    const strictMatch = (lines[i] || "").match(strictRe);
    const strictness = strictMatch ? STRICTNESS[strictMatch[1].trim()] : null;
    if (!strictness) throw new Error(`Missing/unknown strictness for ${id}: ${lines[i]}`);
    i++;

    // collect body until the next rule or category heading
    const why = [];
    let avoid = "";
    let prefer = "";
    while (i < lines.length && !ruleRe.test(lines[i]) && !catRe.test(lines[i])) {
      const ex = lines[i].match(exampleRe);
      if (ex) {
        if (ex[1] === "Avoid") avoid = ex[2].trim();
        else prefer = ex[2].trim();
      } else {
        why.push(lines[i]);
      }
      i++;
    }

    const whyText = why
      .join("\n")
      .replace(/^>\s?/gm, "") // strip blockquote markers (word lists)
      .replace(/^-\s+/gm, "") // strip remaining list markers (rule-1 variants)
      .replace(/\s+/g, " ")
      .trim();

    rules.push({ id, category, strictness, title, why: whyText, avoid, prefer });
    continue;
  }

  i++;
}

const byCategory = {};
for (const r of rules) byCategory[r.category] = (byCategory[r.category] || 0) + 1;

const out = {
  name: "Slopspeare",
  version: "1.0.0",
  description: "A field guide to removing AI slop from writing.",
  license: "CC-BY-4.0",
  canonicalSource: "RULES.md",
  note: "Generated from RULES.md by scripts/build-rules-json.mjs. Do not edit by hand.",
  strictnessLevels: ["hard-ban", "strong-default", "guideline"],
  categories: categoriesInOrder,
  ruleCount: rules.length,
  rules,
};

writeFileSync(join(root, "rules.json"), JSON.stringify(out, null, 2) + "\n");

console.log(`Wrote rules.json: ${rules.length} rules across ${categoriesInOrder.length} categories`);
for (const c of categoriesInOrder) console.log(`  ${byCategory[c]}\t${c}`);
const hardBans = rules.filter((r) => r.strictness === "hard-ban").map((r) => r.id);
console.log(`Hard bans (${hardBans.length}): ${hardBans.join(", ")}`);
