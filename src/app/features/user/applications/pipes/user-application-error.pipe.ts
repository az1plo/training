import {LoggerPort} from '../../../../core/ports/monitoring/logger.port';
import {catchError, of, OperatorFunction} from 'rxjs';
import {UserResult} from '../user.result';
import {ApplicationError} from '../../../../core/application-errors/application-error.ts';
import {mapApplicationError} from '../mappers/application-error.mapper';

export function userApplicationErrorResult(
  logger: LoggerPort
): OperatorFunction<UserResult, UserResult> {
  return source$ =>
    source$.pipe(
      catchError(err => {
        if (err instanceof ApplicationError) {
          logger.warn('Application error', {
            code: err.code,
            message: err.message,
          });

          return of({
            kind: 'error',
            reason: mapApplicationError(err),
          } satisfies UserResult);
        }

        throw err;
      })
    );
}
