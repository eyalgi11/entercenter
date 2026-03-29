# Local Environment Contract

Use this file to define the canonical local runtime contract for the project.

## Core Environment
- Canonical dev database name: n/a
- Is the dev database disposable? n/a
- Canonical cache / queue services: none
- Required background services: none
- Expected local ports: `4173` for the Vite dev server
- Port ownership expectations: port `4173` should be free before starting the app
- Required env files / env vars: none

## Runtime Profiles
- Available runtime profiles: `dev`
- Fresh runtime profile: install dependencies, then start Vite
- Warm runtime profile: reuse installed dependencies, then start Vite
- Fresh runtime launch script: `npm install && npm run dev -- --host 127.0.0.1 --port 4173`
- Warm runtime launch script: `npm run dev -- --host 127.0.0.1 --port 4173`
- Runtime profile selection notes: no database or env bootstrapping is required

## Device / UI Expectations
- Browser expectations: Chromium-class browser for manual QA; Playwright for automation
- Emulator / simulator expectations: none
- Native build expectations: none

## Health / Preflight Checks
- Database running check: n/a
- Cache / queue running check: n/a
- API health check: n/a
- Web / mobile shell health check: open `http://127.0.0.1:4173/` and confirm the `MyDay` heading renders

## Cleanup / Reset
- Stale-process cleanup commands: `pkill -f "vite --host 127.0.0.1 --port 4173"`
- Port cleanup commands: `fuser -k 4173/tcp`
- Build-output cleanup commands: `rm -rf dist test-results`
- Emulator / simulator reset commands: n/a
- Dev-only rate-limit or auth-cooldown reset commands: n/a
- Fresh runtime reset command: `rm -rf node_modules package-lock.json dist test-results && npm install`

## Ownership / Permissions
- Expected project user: `eyal`
- Generated directories that must stay editable: `node_modules/`, `dist/`, `test-results/`
- Ownership normalization command: `chown -R eyal:eyal .`

## Schema Mismatch Triage
- Live DB schema check: n/a
- Applied migration history check: n/a
- Expected schema from source check: n/a
- Reset-vs-migrate rule: n/a

## Notes
- If `4173` is already in use, stop the stale Vite server before rerunning automation.
