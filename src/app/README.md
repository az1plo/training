# Application Root

This directory is the **composition root** of the Angular application.

## Responsibility
- Application bootstrap
- Global configuration
- Root-level providers
- Feature composition

## What belongs here
- `app.component.ts`
- `app.config.ts`
- Global Angular providers
- Feature imports and routing

## What MUST NOT be here
- Business rules
- Use cases
- Domain entities
- Infrastructure logic

## Why this exists
In FOTCHA, the root layer:
- Knows about all features
- Is allowed to wire dependencies
- Contains **no business logic**

This ensures that the application can be reconfigured without touching business code.
