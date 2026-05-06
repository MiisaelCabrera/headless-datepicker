# Headless Date Picker

A headless Date Picker implementation built with Vue 3 and TypeScript

# State Management Approach

State management is intentionally split between the Engine and Vue components.

## Engine State

The engine internally manages:

- Current visible month/year
- Calendar generation cache

This state is framework-agnostic and independent from Vue reactivity.

## UI State

Vue components manage:

- Popover open/close state
- Selected date
- Rendering updates

After calling methods like `nextMonth()` or `previousMonth()`, the UI requests fresh data by calling:

```ts
engine.getCalendar();
```

This keeps the engine independent from Vue while still allowing reactive rendering.

---

# Temporal API Observations

The challenge encouraged usage of the Temporal API.

For this implementation, the native `Date` object was used instead to avoid introducing additional polyfills and keep the engine lightweight.

However, the Temporal API would improve:

- Predictability around timezones
- Date immutability
- General date manipulation ergonomics

Using Temporal would be especially beneficial for larger-scale calendar systems or internationalized date handling.

---

# Running the Project

## Install dependencies

```bash
pnpm install
```

## Start development server

```bash
pnpm dev
```

The Vite development server runs by default at:

```txt
http://localhost:5173
```
