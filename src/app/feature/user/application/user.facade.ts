import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { GetCurrentUserUseCase } from "./use-cases/get-current-user.use-case";
import { UpdateUserUseCase } from "./use-cases/update-user.use-case";
import { UserResult } from "./user.result";
import { UpdateUserCommand } from "./commands/update-user.command";
import { UserFacadePort } from "./ports/user-facade.port";

@Injectable()
export class UserFacade implements UserFacadePort {
  constructor(
    private readonly getCurrentUserUseCase: GetCurrentUserUseCase,
    private readonly updateUserUseCase: UpdateUserUseCase
  ) {}

  getCurrentUser(): Observable<UserResult> {
    return this.getCurrentUserUseCase.execute();
  }

  updateUser(command: UpdateUserCommand): Observable<UserResult> {
    return this.updateUserUseCase.execute(command);
  }
}
