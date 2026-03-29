# Project Brief

## Work Type

- product

## Business Owner

- Assignment reviewer / submitter review loop

## Strategic Goal / Why Now

- Deliver a complete, polished implementation of the `MyDay` home assignment within the requested submission window.

## Hypothesis

- A focused, local-first web app with clear UX and reliable verification will create a stronger assignment submission than a broader but less-finished scope.

## Customer Evidence

- The assignment brief in `spec/מטלת בית תכנות AI.docx`.

## Problem

- The repository had no runnable product implementation for the required two-screen task-management assignment.

## Target User

- The assignment reviewer and anyone opening the app to assess implementation quality.

## Success Metric

- The reviewer can run the app locally and successfully demo the required flows without defects.

## Leading Metric

- Local verification passes: `npm run lint`, `npm run test`, `npm run build`, and `npm run test:e2e`.

## Guardrail Metrics

- Keep the solution client-only, maintainable, and free of unnecessary backend/setup complexity.

## Assumptions To Test

- The assignment is best served by a responsive web app rather than a mobile-native implementation.
- `localStorage` persistence is sufficient for the requested scope.

## Expected Business Impact

- Improve the quality and credibility of the assignment submission.

## Priority / Bet Size

- Small but important delivery bet.

## Confidence

- High, because the assignment scope is narrow and explicitly defined.

## Estimated Effort / Complexity

- Low to medium: new frontend scaffold, UI implementation, persistence, and tests.

## Launch Window / Deadline

- Assumed review/submission window: by 2026-04-05.

## Decision Deadline

- 2026-04-05.

## Constraints

- Must satisfy the exact two-screen assignment requirements.
- Should remain simple to run locally.
- No backend or external services should be required.

## Stakeholders / Approvers

- Primary stakeholder: Eyal
- Reviewer: ENTER assignment evaluator

## Non-Goals

- Production deployment
- Multi-user collaboration
- Authentication, editing, deletion, due dates, or analytics

## If This Succeeds

- The repository becomes a complete submission artifact and a usable demo surface.

## If This Fails

- Cut scope back to the assignment minimum and remove any non-essential polish.

## Kill Criteria

- If required flows cannot be implemented and verified within the submission window, prioritize only the mandated behaviors.

## Review Date

- 2026-04-05
