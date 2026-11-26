// Deadpan Forecasts for Cities That Do Not Exist — writes one line to /output/entry.txt
// Gate: 138 chars (max 160), one line, no trailing newline.
// Twist: sideways rain at 47 mph, and the puddles are now a public lake.
import { mkdirSync, writeFileSync } from "node:fs";

const PARTS = [
  "Tonight in Port Zizzle, expect",
  "sideways rain at 47 miles",
  "an hour, with the mayor declaring",
  "all puddles a public lake",
  "until further notice.",
];

const LINE = PARTS.join(" ");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
