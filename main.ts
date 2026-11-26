// Five Seconds to Explain the Glass — make.fun one-liner entry.
// Writes the house cat's excuse (one sentence) to $MAKEFUN_OUTPUT_DIR/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "You parked a full glass on my runway, so, acting as your pilot, I cleared it for departure.";

function outputDir(): string {
  const fromEnv = process.env.MAKEFUN_OUTPUT_DIR;
  return fromEnv && fromEnv.length > 0 ? fromEnv : "./output";
}

function main(): void {
  const dir = outputDir();
  mkdirSync(dir, { recursive: true });
  const target = join(dir, "entry.txt");
  writeFileSync(target, LINE + "\n", "utf8");
  console.log(`wrote ${target}`);
}

main();
