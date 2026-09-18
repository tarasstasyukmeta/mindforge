# MindForge — Train Your Brain. No AI Allowed.

Brain gym for the LLM era. See [BRAINSTORM.md](BRAINSTORM.md) for full product thinking (problem, 8 faculties, loops, roadmap, business).

## Deploy (static, 1-click)
Ready: `vercel.json`, PWA (`manifest.webmanifest`+`sw.js`+`favicon.svg`, offline, installable). No live URL yet — needs account auth (`vercel login` was not present on devserver).
```bash
vercel --prod            # Vercel (after vercel login)
# or: Netlify Drop — drag this folder to app.netlify.com/drop
# or: GitHub Pages — push folder to a repo > Settings > Pages > main:/root
```
## Daily Workout
Chained `Math(30s)→Pattern(3)→Knowledge(5)→Stroop(30s)→Writing(60s)` with `Daily step n/5`, summary (score/accuracy/time/per-faculty, streak/XP) and 📸 Share-card PNG (`1200×630` canvas download). Tests: `node --test tests/daily.test.mjs`

## Run (no build, no backend)
```bash
python3 -m http.server 8080
# open http://localhost:8080
```
Or just open `index.html` in a browser. Data persists in `localStorage` (`mindforge_v1`).

## What's playable (v1)
| Trainer | Faculty | Mechanic |
|---|---|---|
| Math Blitz | Numeracy | 60s typed arithmetic |
| Pattern Lab | Pattern/Logic | Next-in-sequence (generated) |
| Logic Puzzles | Logic | Syllogisms/deduction bank |
| Memory Vault | Memory | Digit recall, growing length, 6 rounds |
| Word Forge | Language | Anagram + vocab quiz |
| Knowledge Sprint | Knowledge | 10 closed-book Qs (16-bank) w/ explanations |
| Stroop Focus | Attention | Ink-colour vs word, 45s |
| Fermi Estimation | Estimation | Order-of-magnitude w/ worked maths |
| Writing Gym | Writing | 90s prompt, scored on length/diversity/structure |
| Flashcards | Knowledge/Memory | Leitner boxes, 12 facts |
| Daily Workout | All | Streak-protected daily entry (starts Math, chains faculties) |

Dashboard: XP/Level, streak, per-faculty brain map, KPIs, achievements, fact of the day, progress dialog + reset.

## Stack / next steps
Single-file vanilla JS (deliberate: zero deps, deploy anywhere — GitHub Pages/Vercel/static). Next: extract to Vite+TS, server daily seed + accounts, peer writing review — see BRAINSTORM §6.
