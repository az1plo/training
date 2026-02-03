# User Feature

This feature encapsulates everything related to users.

## Responsibility
- User business rules
- User application workflows
- User UI

## Why this is isolated
Changes to user logic should not affect:
- Other features
- Core abstractions
- Application bootstrap

This improves maintainability and scalability.
