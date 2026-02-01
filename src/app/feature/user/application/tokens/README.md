# Application Tokens (User Feature)

This directory contains **Dependency Injection tokens** for the application layer.

## Responsibility
- Bridge ports and implementations
- Decouple Angular DI from application logic

---

## What belongs here

### ✅ InjectionToken definitions

Examples:
- `USER_REPOSITORY`
- `USER_USE_CASES`

---

## What MUST NOT be here

❌ Providers (`useClass`, `useFactory`)  
❌ Implementations  
❌ Business logic  

---

## Why tokens are needed

Angular DI cannot inject interfaces directly.

Tokens:
- Represent interfaces at runtime
- Allow flexible provider configuration
- Prevent tight coupling to implementations

---

## Dependency rules

Tokens:
- ✅ CAN depend on:
  - Application ports
- ❌ MUST NOT depend on:
  - Infrastructure
  - UI

---

## Key principle

> Tokens are **identifiers**, not logic.
