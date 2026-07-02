#!/usr/bin/env node

import { mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { basename, dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const repoRoot = join(__dirname, "..");
const skillName = "slopspeare";
const skillPackageRoot = join(repoRoot, "skills", skillName);
const wellKnownRoot = join(repoRoot, ".well-known", "agent-skills");
const wellKnownSkillRoot = join(wellKnownRoot, skillName);

const files = [
  "SKILL.md",
  "RULES.md",
  "CHECKLIST.md",
  "docs/quick-reference.md",
  "rules.json",
  "CONFLICTS.md",
  "LICENSE",
  "slopspeare.local.example.md",
];

async function readDescription() {
  const skillMd = await readFile(join(skillPackageRoot, "SKILL.md"), "utf8");
  const match = skillMd.match(/^---\n([\s\S]*?)\n---/);
  if (!match) {
    throw new Error("SKILL.md is missing YAML frontmatter.");
  }

  const lines = match[1].split("\n");
  const start = lines.findIndex((line) => line.startsWith("description:"));
  if (start === -1 || !lines[start].match(/^description:\s*>/)) {
    throw new Error("SKILL.md frontmatter is missing a folded description.");
  }

  const descriptionLines = [];
  for (const line of lines.slice(start + 1)) {
    if (line.match(/^[A-Za-z0-9_-]+:/)) {
      break;
    }
    descriptionLines.push(line);
  }

  return descriptionLines
    .map((line) => line.trim())
    .filter(Boolean)
    .join(" ");
}

function sourcePathFor(file) {
  if (file === "SKILL.md") {
    return join(skillPackageRoot, file);
  }

  return join(repoRoot, file);
}

function normalizeText(content) {
  return content.replace(/[ \t]+$/gm, "").replace(/\n+$/, "\n");
}

async function copyFile(file, targetRoot) {
  const target = join(targetRoot, file);
  await mkdir(dirname(target), { recursive: true });
  const content = await readFile(sourcePathFor(file), "utf8");
  await writeFile(target, normalizeText(content));
}

async function copySkillPackageFiles() {
  for (const file of files) {
    if (file === "SKILL.md") {
      continue;
    }

    await copyFile(file, skillPackageRoot);
  }
}

async function copyWellKnownFiles() {
  await rm(wellKnownSkillRoot, { force: true, recursive: true });

  for (const file of files) {
    await copyFile(file, wellKnownSkillRoot);
  }
}

async function writeIndex(description) {
  const index = {
    skills: [
      {
        name: skillName,
        description,
        files,
      },
    ],
  };

  await mkdir(wellKnownRoot, { recursive: true });
  await writeFile(
    join(wellKnownRoot, "index.json"),
    `${JSON.stringify(index, null, 2)}\n`,
  );
}

await copySkillPackageFiles();
await copyWellKnownFiles();
await writeIndex(await readDescription());

console.log(`Wrote ${basename(skillPackageRoot)} and agent-skills/${skillName} with ${files.length} files.`);
