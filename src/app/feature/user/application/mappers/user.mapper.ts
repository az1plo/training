import { raise } from "../../../../core/application/errors/raise";
import { UpdateUserData } from "../../domain/update-user.data";
import { UpdateUserCommand } from "../commands/update-user.command";

export function mapCommandToData(command: UpdateUserCommand): UpdateUserData {
    if (!command.agreedToTerms) {
         throw raise.termsNotAccepted();
    }

    return {
        email: command.emailInput || null,
        age: command.ageInput ? Number(command.ageInput) : null,
    };
}