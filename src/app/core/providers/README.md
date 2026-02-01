# Core Providers

This directory contains **global providers** shared across the application.

## Responsibility
- Configure dependency injection at application level
- Wire core services

---

## What belongs here

### ✅ Providers for:
- Logger
- User context
- Monitoring
- Global services

---

## What MUST NOT be here

❌ Feature-specific logic  
❌ UI code  

---

## Why this exists

Core providers:
- Are application-wide
- Cross multiple features
- Must be configured once

---

## Key principle

> Core providers support **the entire application**.
