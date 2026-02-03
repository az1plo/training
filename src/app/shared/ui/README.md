# Shared UI

This directory contains **reusable UI components**.

## Responsibility
- Presentational components
- Design-system elements
- UI primitives

---

## What belongs here

- Buttons
- Inputs
- Modals
- Loaders

---

## What MUST NOT be here

❌ Business logic  
❌ API calls  
❌ Feature-specific assumptions  

---

## Dependency rules

Shared UI:
- ❌ MUST NOT depend on features
- ✅ MAY depend on Angular only

---

## Key principle

> Shared UI is **dumb, reusable, and stable**.
