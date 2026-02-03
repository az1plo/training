# Ports (Interfaces)

Ports define **contracts** that other layers depend on.

## Responsibility
- Describe required behavior
- Hide implementation details
- Enable dependency inversion

## Examples
- `LoggerPort`
- `UserContextPort`

## Rules
- No Angular imports
- No RxJS operators
- No implementations

## Why this exists
Ports allow:
- Easy mocking in tests
- Infrastructure replacement
- Clean separation between layers
