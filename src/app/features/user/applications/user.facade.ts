import {Injectable} from '@angular/core';import {Observable} from 'rxjs';
import {UserResult} from './user.result';
import {GetCurrentUserUseCase} from './use-cases/get-current-user.use-case';
import {UpdateUserUseCase} from './use-cases/update-user.use-case';
import {UpdateUserCommand} from './commands/update-user.command';

@Injectable()
export class UserFacade {
  constructor(
    private readonly getCurrentUserUseCase: GetCurrentUserUseCase,
    private readonly updateUserUseCase: UpdateUserUseCase
  ) {}

  loadCurrentUser(): Observable<UserResult> {
    return this.getCurrentUserUseCase.execute();
  }

  updateUser(command: UpdateUserCommand): Observable<UserResult> {
    return this.updateUserUseCase.execute(command);
  }
}

