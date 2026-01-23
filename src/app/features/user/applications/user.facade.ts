import { catchError, Observable, tap, throwError } from "rxjs";
import { UserRepository } from "../domains/user.repository";
import { UserDomainError } from "../domains/errors";
import { Inject, Injectable } from "@angular/core";
import { UserContextPort } from "../../../core/ports/monitoring/user-context.port";
import { LoggerPort } from "../../../core/ports/monitoring/logger.port";
import { User } from "../domains/user.model";
import { LOGGER } from "../../../core/tokens/logger.token";
import { USER_CONTEXT } from "../../../core/tokens/user-context.token";

@Injectable()
export class UserFacade {
    constructor(
        private readonly userRepository: UserRepository,

        @Inject(USER_CONTEXT)
        private readonly userContext: UserContextPort,
        
        @Inject(LOGGER)
        private readonly logger: LoggerPort
    ) {}

    getCurrentUser(): Observable<User> {
        return this.userRepository.getCurrentUser().pipe(
            tap(user => {
                this.userContext.set({
                    id: user.id,
                    email: user.email,
                });
            }),
            catchError(err => {
                if (err instanceof UserDomainError) {
                    this.logger.warn('User domain error', {
                        code: err.code,
                        message: err.message,
                    });
                }

                return throwError(() => err);
            })
        );
    }
}