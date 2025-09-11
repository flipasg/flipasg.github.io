---
description: 'React development standards and best practices'
applyTo: '**/*.jsx, **/*.tsx, **/*.js, **/*.ts, **/*.css, **/*.scss'
---

# React Development Instructions

These are coding standards for React projects (React 19+, Vite, TypeScript strict mode).  
Copilot should always follow React’s official documentation → https://react.dev.

---

## Architecture

- Use **functional components with hooks** (no class components).
- Prefer **composition over inheritance**.
- Organize by **feature/domain** (not by file type).
- Extract **custom hooks** for reusable stateful logic.
- Keep **data flow clear** (top-down props or context).
- Container vs presentational components: containers handle data, presentational handle UI.

---

## TypeScript

- Always type props, state, events, and refs.
- Use **strict mode** in `tsconfig.json`.
- Prefer **interfaces** for component props.
- Use React’s built-in types (`React.FC`, `ComponentProps`, etc.).
- Use **union types** for variants and states.
- Generic components where appropriate.

---

## Components

- **Single responsibility** per component.
- Small, testable, reusable.
- Descriptive, consistent naming.
- Validate props with TypeScript.
- Prefer **children, render props, compound components** for composition.

---

## State Management

- `useState` for local state.
- `useReducer` for complex logic.
- `useContext` for shared state.
- External state (Redux Toolkit, Zustand) only for large apps.
- React Query / SWR for server state.

---

## Hooks & Effects

- Follow the **Rules of Hooks** (top-level only).
- Use `useEffect` with correct deps; add cleanup when needed.
- `useMemo` and `useCallback` only for performance-critical code.
- `useRef` for DOM/mutable values.

---

## Styling

- Prefer **MUI, Emotion, or CSS Modules**.
- Mobile-first responsive design.
- Consistent spacing, typography, colors.
- Use CSS vars for theming.
- Accessible components (ARIA + semantic HTML).

---

## Performance

- `React.memo` for pure components.
- Code splitting via `React.lazy` + `Suspense`.
- Tree-shaking + dynamic imports.
- Virtualize long lists.
- Profile with React DevTools.

---

## Data Fetching

- Use React Query, SWR, or Apollo.
- Always handle loading, error, success states.
- Support cancellation and race condition handling.
- Optimistic updates + caching.
- Offline/error fallback where possible.

---

## Error Handling

- Error Boundaries for runtime errors.
- Fallback UIs for failure states.
- Catch async errors in effects/handlers.
- Log errors appropriately.

---

## Forms

- Controlled components by default.
- Use React Hook Form / Formik for complex forms.
- Validate inputs (debounced if needed).
- Accessible labels, ARIA attributes.
- Handle file uploads + edge cases.

---

## Routing

- Use React Router.
- Nested + protected routes.
- Lazy-load routes where possible.
- Handle params + query strings correctly.

---

## Testing

- React Testing Library + Vitest/Jest.
- Test **behavior, not implementation details**.
- Unit tests for components; integration tests for flows.
- Mock external dependencies.
- Test accessibility and keyboard navigation.

---

## Security

- Sanitize and validate all user input.
- Escape rendered data (prevent XSS).
- Use HTTPS for API calls.
- Don’t store sensitive data in localStorage/sessionStorage.
- Enforce CSP headers.

---

## Accessibility

- Semantic HTML.
- ARIA roles where needed.
- Keyboard navigation support.
- Alt text for images, labels for forms.
- Check color contrast.
- Test with screen readers.

---

## Workflow

1. Plan architecture + data flow.
2. Define TypeScript types.
3. Build core components.
4. Add state + data fetching.
5. Add routing + forms.
6. Implement error handling.
7. Write tests.
8. Optimize performance.
9. Ensure accessibility.
10. Document code.

---

## Additional Guidelines

- PascalCase components, camelCase functions/vars.
- Meaningful commit messages, clean git history.
- ESLint + Prettier enforced.
- Document custom hooks/components with JSDoc.
- Keep dependencies updated and secure.
- Use environment configs for staging/prod.

---

## Common Patterns

- Higher-Order Components (HOCs).
- Render props.
- Compound components.
- Provider/context pattern.
- Container vs presentational separation.
- Custom hooks for reusable logic.
