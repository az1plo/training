import { HttpErrorResponse } from "@angular/common/http";
import { raise } from "../../core/application/errors/raise";

export function mapHttpError(err: unknown): never {
    if (!(err instanceof HttpErrorResponse)) {
        throw err;
    }

    switch (err.status) {
        case 401:
            throw raise.notAuthenticated();
        
        case 403: 
            throw raise.accessDenied();

        case 409:
            throw raise.invalidState('REMOTE_CONFLICT');
        
        case 429: 
            throw raise.rateLimitExceeded(
                Number(err.headers.get('x-rate-limit')) || undefined
            );
        
        default:
            throw err;
    }
}