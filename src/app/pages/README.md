# Pages

This directory contains **application pages**.

## Responsibility
- Represent routes
- Compose feature UI blocks
- Handle navigation-level concerns

---

## What belongs here

- Route components
- Page-level layouts

---

## What MUST NOT be here

❌ Business logic  
❌ Data fetching  

---

## Key principle

> Pages compose, not decide.


# Pages Facade

This directory contains **facades for pages**.

## Responsibility
- Orchestrate use cases
- Provide data streams to pages
- Shield pages from application complexity

---

## Why facades exist

They:
- Reduce component complexity
- Centralize orchestration
- Improve testability

---

## Key principle

> Pages talk to **facades**,  
> facades talk to **application**.
