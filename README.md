# Accessible React ToDo (Assessment)

Implements the requirements of the React ToDo App Skill Assessment.

## Features
- Add, delete, toggle complete (with undo).
- Persist tasks in localStorage (no backend).
- Responsive layout for mobile/tablet/desktop.
- Accessibility: keyboard navigable, labeled controls, aria feedback, semantic HTML.
- Reusable components: TodoInput, TodoList, TodoItem + useTodos hook.
- Validation & edge cases with clear error messaging.
- Tests with >90% coverage (Vitest + Testing Library).

## Quick start
```bash
npm i
npm run dev
```

## Tests
```bash
npm test
npm run coverage
# open coverage/index.html
```

## Tech choices
React 18 + Vite. No UI libs; only testing deps.
