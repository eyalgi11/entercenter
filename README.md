# MyDay

`MyDay` is a small daily task manager built as a two-screen home assignment app.

## What is included

- Main task list screen with seeded starter tasks
- Task completion toggle
- Add-task screen with validation
- `localStorage` persistence across refreshes
- Responsive layout inspired by the Stitch design basis
- Unit and integration coverage with Vitest
- Browser-flow coverage with Playwright

## Run locally

```bash
npm install
npm run dev -- --host 127.0.0.1 --port 4173
```

Open `http://127.0.0.1:4173`.

## Demo command

```bash
bash scripts/demo.sh
```

This starts the app and prints the exact demo checklist in the terminal.

## Verification

```bash
npm run lint
npm run test
npm run build
npm run test:e2e
```

## Submission notes

- Assignment source: `spec/מטלת בית תכנות AI.docx`
- Feature spec: `specs/myday-home-assignment.md`
- AI usage writeup: `AI_USAGE.md`
