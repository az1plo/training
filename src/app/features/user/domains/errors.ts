export abstract class UserDomainError extends Error {
    abstract readonly code: string;

    protected constructor(message: string) {
        super(message);
    }
}

export class InvalidSexError extends UserDomainError {
    readonly code = 'USER.INVALID_SEX';

    constructor(value: unknown) {
        super(`Invalid sex value: ${String(value)}`);
    }
}

export class InvalidAgeError extends UserDomainError {
    readonly code = 'USER.INVALID_AGE';

    constructor(value: unknown) {
        super(`Invalid age value: ${String(value)}`);
    }
}