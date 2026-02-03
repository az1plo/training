import { UserError } from '../../application/user.error';

export function userErrorToMessage(error: UserError): string {
  switch (error.type) {
    case 'INVALID_AGE':
      return 'Invalid age';
    case 'NOT_AUTHENTICATED':
      return 'Please login';
    default:
      return 'Unknown error';
  }
}
