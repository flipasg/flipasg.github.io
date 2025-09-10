# ARCHITECTURE

## Overview

- **Framework**: React 19 (functional components + hooks).
- **Bundler**: Vite.
- **Language**: TypeScript (strict).
- **UI Library**: MUI + Emotion for styling.
- **Deployment**: GitHub Pages via `gh-pages`.

## Module Boundaries

- `src/components/`: Reusable UI and section components.
- `src/data/`: Static content (projects, skills, posts).
- `src/assets/`: Images, logos, documents.
- `src/App.tsx`: Top-level app with routes/sections.
- `src/main.tsx`: Application entrypoint, ReactDOM render.

## Data Flow

- Data imported directly from `src/data`.
- Components read static data via props or direct import.
- No global state manager; React hooks/local state only.
