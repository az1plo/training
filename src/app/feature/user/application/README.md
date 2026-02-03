# Application Layer (User)

The Application layer implements **use cases**.

## Responsibility
- Coordinate domain logic
- Call repositories
- Handle side effects
- Map errors

## What belongs here
- Use cases
- Commands
- Application-level mappers
- RxJS orchestration

## Why this exists
Application answers the question:
"How is this business operation executed?"

It does NOT define business rules,
only how they are applied.
