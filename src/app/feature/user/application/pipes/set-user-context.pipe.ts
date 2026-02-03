import { User } from "../../domain/user.model";
import { OperatorFunction, tap } from "rxjs";
import { UserContextPort } from "../../../../core/ports/monitoring/user-context.port";

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
