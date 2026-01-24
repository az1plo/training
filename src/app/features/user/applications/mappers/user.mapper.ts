import {UpdateUserCommand} from '../commands/update-user.command';
import {UpdateUserData} from '../../domains/datas/update-user.data';
import {raise} from '../../../../core/application-errors/raise';

export function mapCommandToData(command: UpdateUserCommand): UpdateUserData {
  if (!command.agreedToTerms) {
    throw raise.termsNotAccepted();
  }

  return {
    email: command.emailInput || null,
    age: Number(command.ageInput)
  };
}


