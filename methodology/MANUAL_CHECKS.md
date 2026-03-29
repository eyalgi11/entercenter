# Manual Checks

Use this file when a human can verify behavior directly in a web page, app, or other UI.

## Current Ready-To-Check Item
- Scope: `MyDay` two-screen home assignment web app
- Why manual review matters: Confirm the UI polish and flow feel coherent beyond automated checks
- Status: ready for human QA
- Manual-test readiness:
  - `cold-start verified`
- Cold-start gate:
  - Verified from zero running processes? yes
  - Expected first-success output: Vite serves `http://127.0.0.1:4173/` and the page shows the `MyDay` heading

## Prerequisites
- Required services: none
- Quick preflight check for each dependency: `node -v && npm -v`
- Required env vars / config: none
- Expected local ports: `4173`
- Common host/device or local networking traps: a prior Vite process may still own `4173`

## How To Open It
- URL / app / screen: `http://127.0.0.1:4173/`
- Startup command: `npm run dev -- --host 127.0.0.1 --port 4173`
- App health-check command: open `/` and confirm `MyDay` is visible
- Login or test account: none
- Test data / seed data: starter tasks are built in on first load

## What To Check
1. Open the main screen and confirm the title, summary cards, seeded tasks, and add-task CTA all render cleanly on desktop and a narrow viewport.
2. Add a new task from the add-task screen and confirm it appears at the top of the main list after save.
3. Toggle the new task to completed, refresh the browser, and confirm the task plus its status persist.

## Manual QA Handoff
- What changed: Added the complete `MyDay` React app, local task persistence, automated tests, and submission docs.
- Files changed: app source under `src/`, verification under `tests/e2e/`, and repo docs under `README.md`, `AI_USAGE.md`, `specs/`, and `methodology/`.
- Artifact links: `specs/myday-home-assignment.md`, `AI_USAGE.md`
- What was already verified: `npm run lint`, `npm run test`, `npm run build`, `npm run test:e2e`
- Exact commands to run: `npm install`, then `npm run dev -- --host 127.0.0.1 --port 4173`
- What the human should focus on: visual polish, clarity of completed vs incomplete states, and whether the add flow feels smooth

## Expected Result
- The app should feel polished, the flows should work without confusion, and refresh should preserve task data.

## Likely First Failure Modes
- Port `4173` is already occupied by a stale Vite process.
- Browser storage is disabled or cleared between checks.
- Expected severity if this fails: low

## What To Report Back
- Bugs:
- UX issues:
- Confusing behavior:
- Pass / fail:
- Screenshot / log collection guidance:
