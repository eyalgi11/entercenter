# Commands

<!-- Repeated workflows that the user or team will run regularly should live as bash scripts under project-root `scripts/` and be referenced here. Inline commands are for occasional or one-off use. -->

## Setup
- Install dependencies: `npm install`
- Initialize local environment: none
- Canonical dev database: n/a
- Disposable DB reset command: n/a
- Required background services: none

## Run
- Fresh runtime launch script: `npm install && npm run dev -- --host 127.0.0.1 --port 4173`
- Warm runtime launch script: `npm run dev -- --host 127.0.0.1 --port 4173`
- Start app: `npm run dev -- --host 127.0.0.1 --port 4173`
- Start demo flow: `bash scripts/demo.sh`
- Start backend: n/a
- Start workers: n/a
- Health / preflight command: `node -v && npm -v`

## Test
- Unit tests: `npm run test`
- Integration tests: `npm run build`
- End-to-end tests: `npm run test:e2e`
- Browser automation: `npm run test:e2e`
<!-- Required when changed files touch web UI behavior unless an exception is recorded in PROCESS_EXCEPTIONS.md. Canonical capability: browser automation. Accept playwriter, Playwright, or an equivalent browser automation command. -->
- Mobile automation: n/a
<!-- Required when changed files touch mobile app/device behavior unless an exception is recorded in PROCESS_EXCEPTIONS.md. Canonical capability: mobile automation. This must be a full native Appium command or workflow, not a partial device smoke check. Prefer `appium-mobile` or an equivalent native Appium run command. -->
- Desktop automation: n/a
<!-- Required when changed files touch desktop app behavior unless an exception is recorded in PROCESS_EXCEPTIONS.md. Canonical capability: desktop automation. Use Playwright/Electron for browser-tech desktop apps, or native desktop automation such as Appium Mac2 or Windows driver / WinAppDriver for native desktop apps. -->

## Quality
- Lint: `npm run lint`
- Type-check: `npm run typecheck`
- Format check: n/a

## Build / Release
- Production build: `npm run build`
- Release command: n/a

## Cleanup / Reset
- Stop stale local processes: `pkill -f "vite --host 127.0.0.1 --port 4173"`
- Free expected ports: `fuser -k 4173/tcp`
- Clean generated build output: `rm -rf dist test-results`
- Reset emulator / simulator: n/a
- Reset dev-only rate limits / auth cooldowns: n/a
