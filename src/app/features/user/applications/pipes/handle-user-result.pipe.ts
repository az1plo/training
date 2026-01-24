import {catchError, map, Observable, of, tap} from 'rxjs';
import { UserDomainError } from '../../domains/errors';
import { mapDomainError } from '../mappers/domain-error.mapper';
import { UserResult } from '../user.result';
import { LoggerPort } from '../../../../core/ports/monitoring/logger.port';
import { UserContextPort } from '../../../../core/ports/monitoring/user-context.port';
import {User} from '../../domains/user.model';

export function handleUserResult(
  logger: LoggerPort,
  userContext: UserContextPort
) {
  return (source$: Observable<User>) =>
    source$.pipe(
      tap(user => {
        userContext.set({
          id: user.id,
          email: user.email,
        });
      }),

      map(user => ({
        kind: 'success',
        user,
      }) satisfies UserResult),

      catchError(err => {
        if (err instanceof UserDomainError) {
          logger.warn('User domain error', {
            code: err.code,
            message: err.message,
          });

          return of({
            kind: 'error',
            reason: mapDomainError(err),
          } satisfies UserResult);
        }

        throw err;
      })
    );
}
