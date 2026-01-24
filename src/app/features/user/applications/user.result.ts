import {User} from '../domains/user.model';
import {UserError} from './user.error';

export type UserResult =
  | { kind: 'success'; user: User }
  | { kind: 'error'; reason: UserError };
