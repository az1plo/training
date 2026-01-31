import { ApplicationErrorCode } from './error-codes';

export class ApplicationError extends Error {
  readonly code: ApplicationErrorCode;
  readonly details?: unknown;

  constructor(params: {
    code: ApplicationErrorCode;
    message?: string;
    details?: unknown;
  }) {
    super(params.message ?? params.code);
    this.code = params.code;
    this.details = params.details;
  }
}