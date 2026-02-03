# Core Layer

The Core layer contains **shared abstractions** used across the entire application.

## Responsibility
- Cross-cutting concerns
- Shared contracts
- Framework-independent interfaces

## What belongs here
- Ports (interfaces)
- Injection tokens
- Global abstractions

## What MUST NOT be here
- Feature-specific logic
- Business rules
- Implementations

## Why this exists
Core is **feature-agnostic**.
Every feature can depend on Core, but Core must never depend on any feature.

This enforces a stable foundation.
