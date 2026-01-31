import { UserResult } from '../user.result';
import { UserProfilePageVm } from '../vms/user-profile-page.vm';
import { mapUserToVm } from './user-vm.mapper';

export function mapUserResultToPageVm(
  result: UserResult
): UserProfilePageVm {
  if (result.kind === 'success') {
    return {
      user: mapUserToVm(result.user),
      error: null,
      loading: false,
    };
  }

  return {
    user: null,
    error: result.reason,
    loading: false,
  };
}
