import { UserFormVm } from '../vms/user-form.vm';
import { UpdateUserCommand } from '../commands/update-user.command';

export function mapUserFormVmToCommand(
  vm: UserFormVm
): UpdateUserCommand {
  return {
    emailInput: vm.email,
    ageInput: vm.age,
    agreedToTerms: vm.agreedToTerms,
  };
}
