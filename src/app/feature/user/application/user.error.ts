export type UserDomainError =
  | { type: 'INVALID_SEX' }
  | { type: 'INVALID_AGE' };

export type UserApplicationError =
  | { type: 'TERMS_NOT_ACCEPTED' }
  | { type: 'NOT_AUTHENTICATED' }
  | { type: 'ACCESS_DENIED' };

export type UserError =
  | UserDomainError
  | UserApplicationError
  | { type: 'UNKNOWN' };
