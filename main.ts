// The Most Boring Object, Reviewed in One Line.
// Object: the doorstop. The joke is a true observation — a doorstop
// gets kicked every single day and thanked never, yet keeps holding
// the door open as if it were the most important job in the building.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry =
  "The doorstop: kicked every day, thanked never, and still holding the door open like it runs the place.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
