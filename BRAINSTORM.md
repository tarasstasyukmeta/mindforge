# MindForge — Brain Training for the LLM Era
> **Tagline:** *Use it, or outsource it.* A gym for the mind that LLMs made lazy.

## 1. The problem (why now)
Everyday LLM use offloads exactly the acts that keep cognition sharp:
| Offloaded to GPT | Muscle that atrophies | Evidence pattern |
|---|---|---|
| Drafting / rewriting | Writing, vocabulary retrieval | You recognise good text, can't produce it |
| Arithmetic / spreadsheets | Numeracy, estimation | No gut-check for absurd numbers |
| "Explain / summarise" | Reading, memory encoding | Skim → ask → forget in 1h |
| Coding / debugging hints | Logic, decomposition | Can't start from a blank page |
| Facts on demand | Long-term knowledge, curiosity | Nothing sticks; no mental models to connect new facts to |
| Decision pros/cons | Judgement, argument | Outsourced critical thinking |

This is **cognitive offloading** + **retrieval-practice starvation**: brains strengthen on *effortful recall* (testing effect, desirable difficulty), LLMs remove the effort. GPS did this to navigation; LLMs do it to everything.

**Anti-thesis product:** not "learn faster with AI" — *train without AI, on purpose.* No hint button that solves it, no chatbot. Timed, closed-book, effort-first — then explanation.

## 2. Name / positioning (options considered)
- **MindForge** ✅ — forge = effort/heat, memorable, domain-able. Chosen.
- NoBot Gym / Brains vs Bots — funny, too jokey for retention.
- UseItOrLoseIt, Synapse, CogLab — generic / trademark collisions.
Positioning: *Duolingo × gym × NYT Games for general cognition.* 5 min/day habit, streak-driven, wide not deep.

## 3. Scope — 8 faculties (the wide net the brief asked for)
1. **Numeracy** — mental maths, estimation (Fermi), number sense
2. **Logic** — syllogisms, sequences, truth-tellers, decomposition
3. **Memory** — working memory, recall, spaced repetition (Leitner)
4. **Language** — vocabulary, anagrams, spelling/retrieval
5. **Writing** — timed micro-writing, editing, argument (the most LLM-threatened skill)
6. **Knowledge** — history/science/geography/art — facts *encoded* via quiz, not lookup
7. **Attention** — Stroop, focus under distraction, processing speed
8. **Pattern / Spatial** — sequences, odd-one-out, mental rotation (roadmap)

Design rule per faculty: **Generate, don't just recognise** where possible (type the answer > multiple choice), immediate feedback + *why*, difficulty adapts to you.

## 4. Core loops
- **Daily Workout (hero, 5 min):** 1 exercise per faculty, fixed seed per day → shareable score, streak flame. This is the habit.
- **Free Train:** pick any trainer, endless, level scales.
- **Learn (Flashcards):** Leitner boxes — facts you miss return sooner. Knowledge that *sticks*.
- **Writing Gym:** 90-second constrained prompt, scored locally on output (length, lexical diversity, structure) — no LLM judge (by design; human/peer review is roadmap).
- **Progress:** XP, level, per-faculty bars, Brain Age estimate, achievements. All local-first (privacy, zero cost).

Principles: `No AI inside the workout` · `Effort before explanation` · `60–90s rounds` · `Explain every answer` · `Streak > leaderboard shame`.

## 5. MVP built in this repo (v1)
Single-file web app (`index.html`, no build, no backend, `localStorage`):
Dashboard + Daily Workout + 8 trainers (Math Blitz, Pattern Lab, Logic, Memory Sequence, Word Forge [anagram+vocab], Knowledge Sprint, Stroop Focus, Fermi Estimation, Writing Gym) + Flashcards + Achievements/Stats. See README for run instructions.

## 6. Roadmap
- **v1.1:** Accounts + cloud sync, daily seed server, friends leaderboard, share card (canvas image).
- **v1.2:** Spatial trainer (rotation, tangram), listening/ear trainer, peer-reviewed writing (humans grade humans), Elo per faculty.
- **v2:** Adaptive engine (IRT difficulty), curriculum paths (e.g. "Recover your maths"), classrooms/cohorts, offline PWA, anti-cheat proctored challenges, research mode (pre/post cognitive battery).
- **Business:** Free daily workout; Pro = unlimited trainers, paths, peer writing review, family/classroom seats. B2B: schools & teams worried about skill fade. Never sell "AI coach that solves it".

## 7. Risks / open questions
Retention beyond novelty (→ streaks, social, seasonal leagues) · Writing scoring without LLM (→ constraints + peer review) · Content scale (→ procedural generation for maths/patterns/memory, curated banks for knowledge/logic) · Measuring real transfer (→ validated pre/post tasks, not just game scores).
