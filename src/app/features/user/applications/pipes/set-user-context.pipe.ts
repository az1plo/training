import {UserContextPort} from '../../../../core/ports/monitoring/user-context.port';
import {OperatorFunction, tap} from 'rxjs';
import {User} from '../../domains/user.model';

export function setUserContext(
  userContext: UserContextPort
): OperatorFunction<User, User> {
  return source$ =>
    source$.pipe(
      tap(user => {
        userContext.set({
          id: user.id,
          email: user.email,
        });
      })
    );
}
