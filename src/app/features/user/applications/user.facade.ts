import { Inject, Injectable } from '@angular/core';
import { UserRepository } from '../domains/user.repository';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { User } from '../domains/user.model';
import { UserDomainError } from '../domains/errors';

import {UserContextPort} from '../../../core/ports/monitoring/user-context.port';
import {LoggerPort} from '../../../core/ports/monitoring/logger.port';
import {USER_CONTEXT} from '../../../core/tokens/user-context.token';
import {LOGGER} from '../../../core/tokens/logger.token';

@Injectable()
export class UserFacade {
  constructor(
    private readonly repo: UserRepository,

    @Inject(USER_CONTEXT)
    private readonly userContext: UserContextPort,

    @Inject(LOGGER)
    private readonly loggerPort: LoggerPort
  ) {}

  getCurrentUser(): Observable<User> {
    return this.repo.getCurrentUser().pipe(
      tap(user => {
        this.userContext.set({
          id: user.id,
          email: user.email,
        });
      }),
      catchError(err => {
        if (err instanceof UserDomainError) {
          this.loggerPort.warn('User domain error', {
            code: err.code,
            message: err.message,
          });
        }
        return throwError(() => err);
      })
    );
  }
}
