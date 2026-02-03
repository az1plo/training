import { User } from "../../domain/user.model";
import { OperatorFunction, map, catchError, of } from "rxjs";
import { LoggerPort } from "../../../../core/ports/monitoring/logger.port";
import { UserDomainError } from "../../domain/errors";
import { mapUserDomainError } from "../mappers/domain-error.mapper";
import { UserResult } from "../user.result";

export function mapUserDomainErrors(
  logger: LoggerPort
): OperatorFunction<User, UserResult> {
  return source$ =>
    source$.pipe(
      map(user => ({ kind: 'success', user }) satisfies UserResult),
      catchError(err => {
        if (err instanceof UserDomainError) {
          logger.warn('User domain error', {
            code: err.code,
            message: err.message,
          });

          return of({
            kind: 'error',
            reason: mapUserDomainError(err),
          } satisfies UserResult);
        }
        throw err;
      })
    );
}
