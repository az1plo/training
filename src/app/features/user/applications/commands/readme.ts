/**
 * Why commands are placed in a separate folder:
 *
 * Commands represent an explicit intention to execute a use case.
 *
 * A dedicated `commands/` folder is justified ONLY when:
 * 1. The same command is used by multiple use cases
 * 2. The command is shared between different adapters (UI, API, Queue, etc.)
 * 3. The command has its own validation, mapping or versioning
 * 4. The command becomes part of a stable application contract
 *
 * If a command is used by a single use case only,
 * it SHOULD live in the same file as that use case.
 *
 * Do not create a commands folder "for the future".
 * Create it only when duplication or coupling actually appears.
 */
