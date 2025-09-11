# AGENTS.md — Copilot Coding Agent Instructions

These instructions apply to the **Copilot Coding Agent** when working in this repository.  
Follow these rules before making automated changes, commits, or pull requests.

---

## Project Context

- **Type:** Static portfolio site
- **Stack:** React 19, Vite, TypeScript (strict mode)
- **UI:** MUI + Emotion
- **Testing:** Vitest + React Testing Library; Playwright for E2E
- **Deploy:** GitHub Pages via `gh-pages` package
- **Docs:** See `memory-bank/` for architecture, conventions, and testing strategy

---

## Agent Behavior

### General Workflow

1. Always **read `.github/copilot-instructions.md` and `memory-bank/` docs** before proposing changes.
2. Confirm coding style: 2 spaces, single quotes, **no semicolons**.
3. Ensure TypeScript strictness (all new code must compile with `tsc --noEmit`).
4. Always run `npm run lint` and `npm run test` locally before suggesting a commit.
5. Keep changes small, cohesive, and well-documented.

### Code Changes

- Use **functional components + hooks** only.
- Prefer **composition over inheritance**.
- Do not introduce global state managers (Redux, Zustand, etc.).
- Place new components in `src/components/`, new data in `src/data/`.
- When adding tests, place them in `tests/` and use `test()` with “should …” phrasing.

### Testing

- Always add or update tests for new/changed components.
- Prefer behavior-driven tests (React Testing Library queries by role/label).
- Run **unit + integration tests** (`npm run test`) before PRs.
- For major flows, run **E2E tests** (`npm run test:e2e`).

### Security & Quality

- Never commit secrets or API keys (not applicable, static project).
- Check accessibility (ARIA roles, alt text, semantic HTML).
- Optimize for performance (tree-shaking, React.lazy, memoization when needed).

---

## PR and Commit Rules

- Use **clear, conventional commit messages** (`feat:`, `fix:`, `test:`, `refactor:`, etc.).
- Include **summary of changes** + **reason** in PR description.
- Ensure **all tests pass** and **lint is clean** before PR creation.
- Do not auto-merge; always request human review.

---

## Boundaries

- Do not add new dependencies without justification.
- Do not alter `vite.config.ts`, `tsconfig.json`, or build tooling unless explicitly requested.
- Do not suggest backend, auth, or DB code (this is a static portfolio).
- Avoid overengineering — keep solutions simple and idiomatic.
