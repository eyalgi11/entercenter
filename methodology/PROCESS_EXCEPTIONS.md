# Process Exceptions

## Exceptions

- Date: 2026-03-29
- Exception: Single-agent execution used for a meaningful implementation task
- Reason: Tooling policy in this environment only allows spawning sub-agents when the user explicitly requests delegation
- Risk level: low
- Compensating control: Added layered verification with Vitest, production build, and Playwright end-to-end coverage
- Owner: Codex
- Status: waived
- Approved by: platform policy / tool restriction
- Expires on: 2026-03-29
- CI fail after expiry: no
- Backfill required by: n/a
- Evidence of backfill: n/a
- Related task / spec: Build MyDay home assignment / `specs/myday-home-assignment.md`
- Related release / incident: n/a
