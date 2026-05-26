---
name: jesse-writing-room
description:
  Use for serious blog and essay drafting, rewriting, or final review in this repo when the user
  asks for a writing room, adversarial readers, editor team, Tobi/CEO/Jesse review,
  publish-readiness review, or help landing a high-voice essay. Coordinates read-only reader and
  editor subagents, preserves Jesse's raw direct voice, and guides the parent agent through
  synthesis, edits, linting, and commits.
---

# Jesse Writing Room

## Core Rule

Subagents review. The parent agent decides and edits.

Never let subagents modify prose files. Use them to surface perspectives, risks, tensions, and
candidate rewrites. The parent agent owns taste, synthesis, file edits, validation, commits, and
pushes.

## Workflow

1. Read the current draft, current diff, and nearby house-style essays before forming opinions.
2. Keep the user's latest edits as the source of truth unless they create a real defect.
3. Spawn read-only panels only when the user asks for the writing room, adversarial agents, readers,
   editors, or a serious final review.
4. Run reader and editor panels separately. Do not let one panel simulate the other.
5. Ask panels for must-fixes, risks, and candidate rewrites. Do not ask them to make files perfect.
6. Synthesize tensions yourself. Apply only edits that improve the piece more than they sand it
   down.
7. Repeat only while changes are materially improving structure, argument, voice, or proof.
8. Stop when remaining concerns are taste, publication risk, or quote-mining risk rather than
   defects.
9. Run `mise run lint -a` after edits. Commit and push only when requested or when the current loop
   has converged and the user asked for commits after loops.

## House Taste

- Prefer raw, direct, high-heat prose over corporate polish.
- Let scenes, mechanisms, and consequences carry meaning before abstract takeaways.
- Preserve useful provocation. Do not neutralize lines merely because they are sharp.
- Avoid consensus prose. The goal is not to please every reviewer.
- Use formatting sparingly. Prefer plain body prose unless emphasis solves a real reading problem.
- Treat public/company examples as evidence, not product tours.
- Protect the central thesis in company-OS-style essays: markets with institutions, distributed
  agency, founder power with receipts, and reality forcing consequence.

## Panels

Load `references/actors.md` when spawning panels or when exact prompt wording would help.

Use two default panels:

- Reader panel: modelled Jesse, Tobi-style founder/operator, CEO reader.
- Editor panel: literary/prose editor, line editor, structure editor, rhetoric editor,
  anti-LinkedIn-slop editor, web/scannability editor, copy chief.

Keep panels read-only and independent. If an agent crosses roles, treat only the relevant part as
valid, close it, and rerun the missing panel cleanly.

## Synthesis Heuristics

- Reader objections are strongest when they identify credibility, audience-fit, or argument defects.
- Editor objections are strongest when they identify rhythm, structure, density, or voice defects.
- A phrase is worth restoring when it compresses a model and adds force without reopening an
  explanatory lap.
- A cut is worth keeping when it preserves the bridge and gets to proof faster.
- A section is done when a broad pass is more likely to make it safer, smoother, and worse.

## Validation

For changed posts, run:

```bash
mise run lint -a
```

If committing, keep commit messages short and specific, then push the active branch when requested.
