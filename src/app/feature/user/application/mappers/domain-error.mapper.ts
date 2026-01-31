import { UserDomainError } from "../../domain/errors";
import { UserError } from "../user.error";

export function mapUserDomainError(
    err: UserDomainError
): UserError {
    switch (err.code) {
        case 'USER.INVALID_SEX':
            return { type: 'INVALID_SEX' };
    
        case 'USER.INVALID_AGE':
            return { type: 'INVALID_AGE' };
        
        default:
            return { type: 'UNKNOWN' };
    }
}