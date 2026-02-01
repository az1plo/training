# Domain Layer (User Feature)

This directory contains the **core business logic** of the User feature.

## Responsibility
- Define business rules
- Protect invariants
- Model the problem domain

This is the **most stable layer** of the system.

---

## What belongs here

### ✅ Domain entities
- `User`
- Value objects

### ✅ Domain errors
- Business rule violations

### ✅ Domain repositories (interfaces)
- Contracts only, no implementations

---

## What MUST NOT be here

❌ Angular  
❌ RxJS  
❌ HTTP  
❌ Application orchestration  

---

## About `.data.ts` files

### What is `.data.ts`?

`.data.ts` files define **pure data structures** used by the domain.

Examples:
- `UserData`
- `UpdateUserData`

They:
- Contain no logic
- Are immutable by convention
- Represent validated domain data

---

### Why `.data.ts` exists

Purpose:
- Separate **data shape** from **behavior**
- Avoid leaking DTOs into domain
- Make transformations explicit

---

## Dependency rules

Domain:
- ❌ Depends on nothing
- ✅ Is depended on by everything

---

## Key principle

> The domain is **independent** and **pure**.
