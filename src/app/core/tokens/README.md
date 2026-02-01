# Dependency Injection Tokens

Angular `InjectionToken`s that bind ports to implementations.

## Responsibility
- Bridge Angular DI with clean architecture
- Decouple ports from frameworks

## Why tokens are needed
Ports cannot depend on Angular.
Tokens allow Angular to provide concrete implementations **without polluting the domain or application layers**.
