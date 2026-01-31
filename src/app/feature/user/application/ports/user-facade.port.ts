import { Observable } from 'rxjs';
import { UserResult } from '../user.result';
import { UpdateUserCommand } from '../commands/update-user.command';

export interface UserFacadePort {
  getCurrentUser(): Observable<UserResult>;
  updateUser(command: UpdateUserCommand): Observable<UserResult>;
}
