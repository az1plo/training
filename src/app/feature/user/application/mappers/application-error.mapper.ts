import { ApplicationError } from '../../../../core/application/errors/application-error';
import { UserError } from '../user.error';

export function mapApplicationError(
  err: ApplicationError
): UserError {
  switch (err.code) {
    case 'TERMS_NOT_ACCEPTED':
      return { type: 'TERMS_NOT_ACCEPTED' };

    case 'NOT_AUTHENTICATED':
      return { type: 'NOT_AUTHENTICATED' };

    case 'ACCESS_DENIED':
      return { type: 'ACCESS_DENIED' };

    default:
      return { type: 'UNKNOWN' };
  }
}
