import {LoggerPort} from '../../../../core/ports/monitoring/logger.port';
import {catchError, map, of, OperatorFunction} from 'rxjs';
import {User} from '../../domains/user.model';
import {UserResult} from '../user.result';
import {UserDomainError} from '../../domains/errors';
import {mapDomainError} from '../mappers/domain-error.mapper';

export function userDomainResult(
  logger: LoggerPort
): OperatorFunction<User, UserResult> {
  return source$ =>
    source$.pipe(
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
