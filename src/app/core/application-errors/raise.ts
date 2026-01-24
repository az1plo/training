import { APPLICATION_ERROR_CODES } from './error-codes';
import {ApplicationError} from './application-error.ts';

export const raise = {
  notAuthenticated: (message?: string) =>
    new ApplicationError({
      code: APPLICATION_ERROR_CODES.NOT_AUTHENTICATED,
      message,
    }),

  accessDenied: (reason?: string) =>
    new ApplicationError({
      code: APPLICATION_ERROR_CODES.ACCESS_DENIED,
      message: reason,
    }),

  termsNotAccepted: () =>
    new ApplicationError({
      code: APPLICATION_ERROR_CODES.TERMS_NOT_ACCEPTED,
      message: 'User must accept terms before continuing',
    }),

  rateLimitExceeded: (limit: number) =>
    new ApplicationError({
      code: APPLICATION_ERROR_CODES.RATE_LIMIT_EXCEEDED,
      message: `Rate limit exceeded (${limit} req/min)`,
      details: { limit },
    }),

  invalidState: (state: string) =>
    new ApplicationError({
      code: APPLICATION_ERROR_CODES.INVALID_STATE,
      message: `Operation not allowed in state: ${state}`,
      details: { state },
    }),
};
