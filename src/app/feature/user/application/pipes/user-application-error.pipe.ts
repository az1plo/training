import { OperatorFunction, catchError, of } from "rxjs";
import { ApplicationError } from "../../../../core/application/errors/application-error";
import { LoggerPort } from "../../../../core/ports/monitoring/logger.port";
import { UserResult } from "../user.result";
import { mapApplicationError } from "../mappers/application-error.mapper";

export function mapApplicationErrors(
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
