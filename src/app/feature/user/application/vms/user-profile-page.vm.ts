import { UserVm } from '../user.vm';
import { UserError } from '../user.error';

export interface UserProfilePageVm {
  user: UserVm | null;
  error: UserError | null;
  loading: boolean;
}
