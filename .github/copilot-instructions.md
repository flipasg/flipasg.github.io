# Copilot Instructions for `flipasg.github.io`

## 1. Project Overview

- **Type:** Static personal portfolio site
- **Stack:** React 19 + Vite + TypeScript (strict mode)
- **UI:** Functional components + hooks, styled with **MUI** (Material UI) and **Emotion**
- **Data:** Static only (no backend, auth, or DB). Imported from `src/data`
- **Deployment:** GitHub Pages via `gh-pages` package

---

## 2. Directory Guide

- `src/components/` → All reusable UI + section components (e.g., `AboutMe`, `Projects`, `Blog`)
- `src/data/` → Static JSON/TS data (projects, skills, blog posts)
- `src/assets/` → Images, logos, docs
- `src/App.tsx` → Root component, renders all sections
- `src/main.tsx` → Entrypoint, mounts ReactDOM
- `tests/` → Unit + integration tests (Vitest + RTL). Always use explicit `.tsx` imports
- `memory-bank/` → Docs/specs (architecture, conventions, test strategy)

---

## 3. Developer Commands

- **Start dev:** `npm run dev`
- **Build:** `npm run build`
- **Lint:** `npm run lint`
- **Format:** `npm run format`
- **Unit tests:** `npm run test`
- **E2E tests (optional):** `npm run test:e2e` (Playwright)
- **Deploy:** `npm run deploy`

---

## 4. Conventions

**Code Style**

- 2-space indentation, single quotes, no semicolons
- Naming:
  - Components → `PascalCase`
  - Hooks → `useCamelCase`
  - Variables/functions → `camelCase`
  - Constants → `UPPER_SNAKE_CASE`

**Testing**

- Use `test` (not `it`) with `should` phrasing in descriptions
- Tests live in `tests/` only
- Explicit `.tsx` in imports

**React Rules**

- Local state only (no global state managers)
- Minimal error handling (`console.error` in dev only)
- i18n strings inline (extraction possible later)

---

## 5. Patterns & Integration

- **Data flow:** Static imports only (no APIs, no SSR)
- **Styling:** MUI theme provider for light/dark mode
- **SEO:** Metadata handled in `App.tsx` or `index.html`
- **Communication:** Props or direct imports from `src/data`

---

## 6. Examples

- **New Section:** Add component in `src/components/` → import in `App.tsx`
- **New Test:** Place in `tests/`, import components explicitly with `.tsx`
- **Update Content:** Edit files in `src/data/`

---

## 7. References

- `memory-bank/ARCHITECTURE.md` → app structure
- `memory-bank/CONVENTIONS.md` → style & naming rules
- `memory-bank/TESTS_CONVENTION.md` → test writing rules
- `memory-bank/TEST_STRATEGY.md` → testing philosophy
- `memory-bank/SPEC.md` → project goals & acceptance criteria
- `memory-bank/` → other relevant docs
