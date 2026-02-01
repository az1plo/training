# View Models (User Feature)

This directory contains **View Models (VMs)** for the User feature.

## Responsibility
- Shape data specifically for UI consumption
- Hide domain and application complexity from UI
- Represent UI states (loading, error, success)

---

## What belongs here

### ✅ Plain objects describing UI state

Examples:
- `UserPageVm`
- `UserFormVm`

Typical fields:
- `loading`
- `error`
- `data`

---

## What MUST NOT be here

❌ Business rules  
❌ Domain entities  
❌ Angular components  

---

## Why View Models exist

UI should:
- Not know about domain rules
- Not transform complex structures
- Only render prepared state

VMs:
- Stabilize UI
- Simplify components
- Improve testability

---

## Dependency rules

VMs:
- ✅ CAN depend on:
  - Application types
- ❌ MUST NOT depend on:
  - Infrastructure
  - Angular

---

## Key principle

> UI consumes **View Models**, not domain objects.
