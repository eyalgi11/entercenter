# Feature Spec

## Why Now
- This repository exists to deliver the `MyDay` home assignment as a complete, easy-to-demo submission.

## Customer Evidence
- Linked request, ticket, interview, bug trend, analytics signal, or incident: `spec/מטלת בית תכנות AI.docx`

## Design Basis
- Stitch required for this work? yes
- Stitch prompt or design direction: Mobile-first editorial task manager with warm neutrals, mint accent, clear completed vs incomplete task states, and a practical add-task flow.
- Stitch screen or project reference: `projects/18233468677641299676`, main screen `projects/18233468677641299676/screens/26aa76cc3eb14aa785b8c60899e4376c`, add-task screen `projects/18233468677641299676/screens/76625c3fd3b848f69f26fa4f981d8156`
- Existing design system or product constraints to preserve: Two-screen assignment scope, standard HTML form controls, no backend.
- Intentional deviations from the Stitch-generated design: Removed bottom navigation, kept the UI focused on the two required screens, and translated category handling into one flexible secondary text field.

## User Story
- As a person managing day-to-day work
- I want to view tasks, add a new one, and mark tasks as completed
- So that I can keep my daily list organized in one lightweight place

## Scope
- In scope: responsive web app, seeded starter tasks, add task flow, completion toggling, `localStorage` persistence, test coverage, submission docs
- Out of scope: backend, authentication, edit/delete, due dates, filtering, drag-and-drop, analytics

## Success Metric
- Primary outcome: The reviewer can run the app and complete every required assignment flow without defects.
- Leading indicator or proxy: `lint`, `test`, `build`, and `test:e2e` all pass locally.

## Risk Classification
- Risk class: `R1`
- Why this class fits: This is a small client-only UI feature with no production systems, user accounts, or sensitive data.

## Experiment Plan
- Hypothesis: A polished but simple local-first implementation will satisfy the assignment better than expanding scope with backend complexity.
- Baseline: No working app exists in the repository.
- Success threshold: Required flows work reliably and are demo-ready.
- Time-to-signal: Immediate through local verification.
- Max budget / max runs: One implementation pass with automated checks.
- Stop rule: Stop adding scope once the assignment requirements and verification path are complete.
- Promotion gate:
  - Do not promote this to standard behavior until it beats the baseline and is recorded in `EXPERIMENT_LOG.md`.

## Release / Rollout
- Launch owner: Eyal / assignment submitter
- Release risk: low
- Rollout type: full
- Rollout plan: Submit the repository and demo artifact after local verification.
- Rollback plan: Revert to the previous local-only state or remove the feature if the assignment direction changes.
- Blast radius if this fails: Limited to the local assignment submission.
- Customer-facing communication needed: Only the assignment handoff/demo.

## Edge Cases
- Blank task name should not save.
- Invalid or missing `localStorage` data should fall back to starter tasks.
- Added tasks should remain visible after refresh.
- Completion toggling should update both UI state and persisted state.

## Architecture / Data Impact
- Architecture, API, schema, or migration impact: New Vite + React + TypeScript frontend with local-only task persistence.
- Data sensitivity / privacy / compliance impact: Tasks are stored only in browser `localStorage`; no external services or sensitive data flows are introduced.
- Support / migration notes: None.

## AI / Agent Evaluation
- Model / provider / version: OpenAI Codex / GPT-5 coding agent
- Golden task or eval set: Main screen renders, add-task form works, task completion toggles, persistence survives reload.
- Pass threshold: All local checks pass and the browser-flow automation succeeds.
- Fallback behavior: If browser storage is unavailable or malformed, load starter tasks.
- Max cost / latency budget: Keep implementation local and fast; no remote runtime dependencies beyond package install.
- Allowed tools: repo editing, `npm`, Stitch MCP, Vitest, Playwright
- Confirmation-required tools: none used

## Acceptance Criteria
- A `MyDay` web app exists in this repository.
- The main screen shows a title, task list, per-task completion state, and a path to the add-task screen.
- The add-task screen includes a task name field, a description/category field, and a save action.
- Saving a task returns to the main screen and shows the new task immediately.
- Toggling a task updates its completion state.
- Tasks persist across refreshes.
- Delivery docs for code usage and AI usage exist.

## Evaluator Criteria
- UI / design quality: Warm, deliberate, and readable rather than template-default.
- Originality / deliberate choices: Clear visual direction anchored in the Stitch design basis.
- Craft / technical polish: Small, typed, and test-covered codebase.
- Usability / task clarity: Required actions are obvious and friction is low.
- Product depth: Focused assignment scope with sensible persistence and validation.
- Functionality: All spec flows work.
- Code quality: Clean React structure and local data layer.
- Runtime reliability: App starts and tests pass from a clean install.

## Verification Plan
- Tests: `npm run test`
- Integration hardening checks: `npm run lint`, `npm run build`
- Local environment assumptions: Node 25+, npm 11+, no database or env file required
- Manual checks:
  - Readiness label: `cold-start verified`
  - Cold-start verified from zero running processes: yes
  - Expected first-success output: Vite serves `http://127.0.0.1:4173/`
  - Prerequisites: `npm install`
  - Dependency preflight checks: `node -v`, `npm -v`
  - App health-check: open `/` and confirm `MyDay` heading is visible
  - Expected local ports: `4173`
  - Likely networking traps: a stale process may already own port `4173`
  - Human/manual check instructions to give the user: start the app, add a task, toggle it, refresh, and confirm the task persists
- Browser / web automation checks:
  - Canonical capability: browser automation.
  - Browser automation run: `npm run test:e2e`
  - Note: `playwriter` extension was unavailable locally, so Playwright was used to satisfy browser-flow verification.
- Mobile / device checks:
  - Canonical capability: mobile automation.
  - Not applicable for this web-only assignment.
- Desktop app automation checks:
  - Canonical capability: desktop automation.
  - Not applicable.
- Observability or logging checks: none required
- Release / post-release checks: verify the submitted demo covers list view, add flow, toggle flow, and persisted refresh
- Follow-up stabilization task needed after feature-complete? no

## Sprint Contract Guidance
- For the next implementation chunk, create or refresh `methodology/work/<task-slug>/SPRINT_CONTRACT.md`.
- The sprint contract should define:
  - sprint goal
  - in-scope vs out-of-scope work
  - what done means for this chunk
  - evaluator test plan
  - pass thresholds
  - failure / return conditions

## Post-Launch Review
- Review date: 2026-04-05
- Review owner: Eyal
- Expected metrics after launch: Assignment demo works cleanly in one sitting.
- Actual metrics after launch: Pending external review.
- Incidents or regressions seen after launch: none
- Support / customer feedback: pending
- Decision: keep / iterate / rollback / sunset
