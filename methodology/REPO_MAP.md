# Repo Map

## Purpose
- Deliver the `MyDay` home assignment as a runnable web app plus submission documentation.

## Key Directories
- `src/`: React app source, pages, styles, local data layer, and unit tests
- `app/`: not used
- `backend/`: not used
- `tests/`: Playwright end-to-end coverage under `tests/e2e/`

## Entrypoints
- Main app entrypoint: `src/main.tsx`
- Main backend entrypoint: n/a
- Background workers / jobs: none

## Important State
- Config files: `package.json`, `vite.config.ts`, `playwright.config.ts`, `tsconfig*.json`
- Environment variables: none required
- External services: none
- Persistent data stores: browser `localStorage` using key `myday.tasks.v1`

## Feature Placement Rules
- Where should new UI features go? under `src/pages/` or adjacent component files in `src/`
- Where should new API routes go? n/a
- Where should shared types or utilities go? under `src/` in focused modules such as `src/types.ts` and `src/tasks.ts`
