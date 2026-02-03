# Infrastructure Layer (User Feature)

This directory contains **infrastructure implementations** for the User feature.

## Responsibility
- Implement domain and application ports
- Communicate with external systems
- Translate external data into domain-compatible formats

Infrastructure is the **most volatile layer**.

---

## What belongs here

### ✅ Implementations of ports
Concrete classes that implement:
- Domain repositories
- Core ports (logger, context, etc.) if feature-scoped

Examples:
- HTTP repositories
- LocalStorage repositories
- API adapters

---

### ✅ External communication
- HTTP clients
- API DTOs
- Serialization / deserialization logic

---

### ✅ Framework-specific code
- Angular services
- HttpClient usage
- Environment-based configuration

---

## What MUST NOT be here

❌ Business rules  
❌ Use case orchestration  
❌ UI logic  
❌ Domain entities mutation  

Infrastructure **serves the domain**, not the other way around.

---

## Dependency rules (VERY IMPORTANT)

Infrastructure:
- ✅ CAN depend on:
  - Domain
  - Application
  - Core
  - Angular / RxJS
- ❌ MUST NOT be depended on by:
  - Domain
  - Application

Dependency direction:
UI → Application → Domain  
Infrastructure → Domain  
(Application knows only the interface, not the implementation)

---

## Why infrastructure is inside the feature

In FOTCHA architecture:
- Each feature is **self-contained**
- Infrastructure details are **feature-specific**
- No global “god infrastructure” folder

This allows:
- Feature isolation
- Independent evolution
- Easy deletion or replacement of a feature

---

## Typical structure

```text
infrastructure/
├── repositories/
│   └── user.api.repository.ts
├── dto/
│   └── user.dto.ts
├── mappers/
│   └── user.mapper.ts
├── providers/
│   └── user.providers.ts
└── README.md
