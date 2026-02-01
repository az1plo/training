# Application Ports (User Feature)

This directory contains **application-level ports** for the User feature.

## Responsibility
- Define **contracts** required by application use cases
- Abstract external or cross-cutting concerns
- Decouple application logic from implementations

Ports describe **WHAT is needed**, not **HOW it is implemented**.

---

## What belongs here

### ✅ Interfaces (ports)
- Repositories
- Contexts
- External services

Examples:
- `UserRepository`
- `UserContextPort`

---

## What MUST NOT be here

❌ Implementations  
❌ Angular-specific code  
❌ Business rules  
❌ HTTP / storage logic  

---

## Dependency rules

Application ports:
- ✅ CAN depend on:
  - Domain
- ❌ MUST NOT depend on:
  - Infrastructure
  - Angular
  - UI

---

## Why ports exist

Ports allow:
- Replace infrastructure without changing use cases
- Test application logic in isolation
- Enforce Clean Architecture boundaries

---

## Key principle

> Application logic depends on **abstractions**,  
> not on concrete implementations.
