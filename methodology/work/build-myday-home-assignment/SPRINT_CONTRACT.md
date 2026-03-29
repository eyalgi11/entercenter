# Sprint Contract

## Goal
- Deliver a complete and verifiable `MyDay` home assignment implementation.

## In Scope
- Scaffold the React app
- Implement the two required screens
- Add local persistence
- Add automated verification
- Produce submission-ready docs

## Out Of Scope
- Backend services
- Auth, editing, deleting, filtering, due dates
- Production deployment

## Done Means
- The app is runnable locally
- Required flows work
- Docs match the finished implementation
- `npm run lint`, `npm run test`, `npm run build`, and `npm run test:e2e` pass

## Evaluator Checks
- Reviewer can add a task, toggle a task, and refresh without losing data
- UI feels deliberate and not template-default
- Repo contains the required AI usage writeup

## Pass Thresholds
- All required flows verified
- No failing lint, unit, build, or browser checks

## Failure / Return Conditions
- If browser automation fails, do not mark the sprint complete
- If the app requires a backend or env file, cut scope back to client-only
