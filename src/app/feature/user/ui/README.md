# UI Layer

The UI layer handles **presentation only**.

## Responsibility
- Display data
- Handle user interaction
- Delegate logic to facades

## What MUST NOT be here
- Business logic
- Repository calls
- Domain rules

## Why this exists
UI should be replaceable without touching business logic.
