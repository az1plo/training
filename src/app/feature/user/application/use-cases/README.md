# Use Cases

Each use case represents a **single business action**.

## Responsibility
- Orchestrate steps
- Call repositories
- Produce a result (success / error)

## Rules
- One public `execute()` method
- No UI logic
- No framework-specific code

## Why this exists
Use cases make business flows explicit and testable.
