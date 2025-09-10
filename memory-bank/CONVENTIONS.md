# CONVENTIONS

## Coding Style

- TypeScript strict mode enabled.
- ESLint + Prettier enforced on commit.
- 2-space indentation, single quotes, no semicolons.
- No `any` unless unavoidable (documented).

## Naming

- Components: `PascalCase`.
- Hooks: `useCamelCase`.
- Variables/functions: `camelCase`.
- Constants: `UPPER_SNAKE_CASE`.

## Error Handling

- Minimal: app is static, no network calls by default.
- Use `console.error` only in development.

## i18n

- Default language: English.
- Strings kept in component files; future i18n can extract to JSON.

## Testing

- Jest + Testing Library for unit tests.
- Playwright (optional) for E2E.
- Required: component snapshot & accessibility tests.
