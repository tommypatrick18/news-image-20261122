// news-image-20261122 — "The World in One Day" (Sunday 22 November 2026).
// Node 22, standard library only. The entry is the image beside this file;
// the program copies it to /output/entry.png, deterministically:
// two runs write the same bytes.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

const src = new URL('./entry.png', import.meta.url);
const srcSize = statSync(src).size;
if (srcSize <= 0) throw new Error('entry.png missing or empty beside main.ts');
const out = join(process.env.MAKEFUN_OUTPUT_DIR ?? '/output', 'entry.png');
copyFileSync(src, out);
if (statSync(out).size !== srcSize) throw new Error('copied entry.png size differs from source');
